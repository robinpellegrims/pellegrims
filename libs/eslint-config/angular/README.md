# @pellegrims/eslint-config-angular

[![npm package link](https://img.shields.io/npm/v/@pellegrims/eslint-config-angular)](https://www.npmjs.com/package/@pellegrims/eslint-config-angular)

This package provides an opinionated shareable eslint config.

## Usage

This package exports 4 ESLint configurations.

To install all peer dependencies automatically:

```sh
npx install-peerdeps --dev @pellegrims/eslint-config-angular
```

### @pellegrims/eslint-config-angular/javascript

This entry points enables linting rules for javascript.

It requires the following packages:

- `eslint`
- `eslint-config-angular-prettier`
- `eslint-plugin-etc`
- `eslint-plugin-import`
- `eslint-plugin-unicorn`

### @pellegrims/eslint-config-angular/typescript

This entry points enables linting rules for typescript.

It requires the following packages:

- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`
- `eslint-config-angular-prettier`
- `eslint-plugin-etc`
- `eslint-plugin-import`
- `eslint-plugin-rxjs`

### @pellegrims/eslint-config-angular/angular

This entry points enables linting rules for angular.

It requires the following packages:

- `@angular-eslint/eslint-plugin`
- `eslint-plugin-ngrx`
- `eslint-plugin-rxjs-angular`

### @pellegrims/eslint-config-angular/angular-template

This entry points enables linting rules for angular templates.

It requires the following packages:

- `@angular-eslint/eslint-plugin-template`
- `eslint-plugin-angular-template-consistent-this`
