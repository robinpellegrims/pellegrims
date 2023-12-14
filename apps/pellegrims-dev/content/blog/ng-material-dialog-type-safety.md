---
title: 'Make Angular Material dialogs type-safe'
description: 'How to use Angular Material dialogs in a type-safe way and avoid runtime issues'
date: '2022-06-27'
updateDate: '2023-12-14'
tags: ['angular', 'material', 'typescript']
coverImage: '/assets/blog/ng-material-dialog-type-safety/cover.jpg'
---

## Introduction

Angular Material provides a `MatDialogService` that allows developers to easily integrate modal dialogs into their
applications. If you're not familiar with Angular Material or its dialog service, check out
the [official documentation](https://material.angular.io/components/dialog).

While this dialog service is very easy to use, the interaction between the `MatDialogService` and your dialog component
isn't completely type-safe and could potentially lead to runtime issues.

## Use case

Our use case is using Angular v17.0.4 and is based
on [this example](https://material.angular.io/components/dialog/overview#sharing-data-with-the-dialog-component) in the
official Angular Material documentation.

The dialog receives an input object representing a favorite animal:

```typescript
export interface DialogData {
  animal: string;
}
```

It then displays the animals in a dialog and asks the user to cancel or approve:

![Dialog screenshot {252x235}](/assets/blog/ng-material-dialog-type-safety/dialog.png)

After clicking one of the buttons, the dialog returns a boolean representing the button that was clicked.

## Implementation

### Parent component

```html
<!--template-->
<button mat-button (click)="openDialog()">Open dialog</button>
```

```typescript
@Component({
  selector: 'app-component',
  // template: see above
})
export class AppComponent {
  private dialog = inject(DialogService);

  protected openDialog() {
    this.dialog
      .open(DialogComponent, { data: { animal: 'panda' } })
      .afterClosed()
      .pipe(tap((result) => console.log(result === true)))
      .subscribe();
  }
}
```

### Dialog component

```html
<!--template-->
<h1 mat-dialog-title>Favorite Animal</h1>
<mat-dialog-content>
  <p>My favorite animal is "{{ data.animal }}".</p>
  <p>Do you approve?</p>
</mat-dialog-content>
<mat-dialog-actions>
  <button mat-button (click)="cancelClick()">Cancel</button>
  <button mat-button (click)="okClick()">Ok</button>
</mat-dialog-actions>
```

```typescript
@Component({
  selector: 'example-dialog',
  // template: see above
})
export class DialogComponent {
  protected data: DialogData = inject(MAT_DIALOG_DATA);
  protected dialogRef: MatDialogRef<DialogComponent> = inject(MatDialogRef);

  protected cancelClick = () => this.dialogRef.close(false);
  protected okClick = () => this.dialogRef.close(true);
}
```

## Type safety issues

While the dialog in our use case is currently working perfectly fine, the interaction between the parent and the dialog
component is not completely type-safe.

Let's identify some possible issues that will still compile completely fine, but that would break at runtime.

### Parent component

- When opening the dialog, a typo could be made in the `animal` property name that is passed as the dialog data:

```typescript
this.dialog.open(DialogComponent, { data: { annimal: 'panda' } });
```

- The parent component receives an untyped result from the `afterClosed` operator that could be used in a wrong way:

```typescript
this.dialog
  .open(DialogComponent, { data: { animal: 'panda' } })
  .afterClosed()
  // this will always log false, since result is a boolean
  .pipe(tap((result) => console.log(result === 'true')))
  .subscribe();
```

### Dialog component

- In the dialog component we might have forgotten about the correct type we were going to use and use a wrong type
  instead:

```typescript
protected data: { favouriteAnimal: string } = inject(MAT_DIALOG_DATA);
```

- The dialog should return a boolean value after closing, but nothing currently prevents us from passing anything else
  when closing the dialog:

```typescript
this.dialogRef.close('cancel');
```

### Parent-child type synchronization

There is no synchronization between the Data and Result types used in the parent component and the dialog component.
This means the application will still compile when we use different types by mistake on both sides.

## Adding generic params

A first step towards more type-safety would be to explicitly specify the types in the parent component when opening the
dialog:

```typescript
// parent component
this.dialog
  .open<DialogComponent, DialogData, boolean>(DialogComponent, {
    data: { animal: 'panda' },
  })
  .afterClosed()
  // result: boolean | undefined
  .pipe(tap((result) => console.log(result === true)))
  .subscribe();
```

In the dialog component, we can force the result type when injecting the `MatDialogRef`:

```typescript
// dialog component
protected data: DialogData = inject(MAT_DIALOG_DATA);
protected dialogRef: MatDialogRef<DialogComponent, boolean> = inject(MatDialogRef);
```

While these simple changes effectively force the developer to use correct dialog data and result objects, it still
doesn't prevent using different Data/Result types in the parent and dialog component. It also has the drawback that the
types need to be specified in both the parent and child component.

## Using an abstract dialog component superclass

To increase type safety even further between the parent and dialog component and have a single source of truth for the
dialog Data/Result types, a custom dialog service and abstract dialog component superclass can be created:

```typescript
@Directive()
export abstract class StronglyTypedDialog<DialogData, DialogResult> {
  protected data: DialogData = inject(MAT_DIALOG_DATA);
  protected dialogRef: MatDialogRef<
    StronglyTypedDialog<DialogData, DialogResult>,
    DialogResult
  > = inject(MatDialogRef);
}

@Injectable({ providedIn: 'root' })
export class DialogService {
  protected dialog = inject(MatDialog);

  open = <DialogData, DialogResult>(
    component: ComponentType<StronglyTypedDialog<DialogData, DialogResult>>,
    config?: MatDialogConfig<DialogData>
  ): MatDialogRef<
    StronglyTypedDialog<DialogData, DialogResult>,
    DialogResult
  > => this.dialog.open(component, config);
}
```

Since the constructor has been moved to an abstract superclass, the dialog component can then be simplified like this:

```typescript
@Component({
  selector: 'example-dialog',
  // template: unchanged, see above
})
export class DialogComponent extends StronglyTypedDialog<DialogData, boolean> {
  protected cancelClick = () => this.dialogRef.close(false);
  protected okClick = () => this.dialogRef.close(true);
}
```

The dialog can then be opened through this new `DialogService` instead of the regular `MatDialog` service:

```typescript
@Component({
  selector: 'app-component',
  // template: unchanged, see above
})
export class AppComponent {
  private dialog = inject(DialogService);

  protected openDialog() {
    this.dialog
      .open(DialogComponent, { data: { animal: 'panda' } })
      .afterClosed()
      // result: boolean | undefined
      .pipe(tap((result) => console.log(result === true)))
      .subscribe();
  }
}
```

This will achieve full type-safety on both the parent and dialog component while making the DialogComponent the single
source of truth for the Data/Result types.

## Summary

We explored multiple possible runtime issues when using Angular Material dialogs:

- passing unexpected data into the dialog
- returning unexpected results from the dialog to the parent component
- using different data/result types in the parent and dialog component

Some of the issues can be addressed by adding generic params:

- in the function call that opens the dialog
- to the injected `MatDialogRef` in the dialog constructor

Finally, the `open()` method of the `MatDialogService` can be wrapped in a custom service that provides full type-safety
and addresses all of the explored issues.

## More information

- [Example repository](https://github.com/robinpellegrims/angular-material-type-safe-dialog)
- [Official documentation](https://material.angular.io/components/dialog)
