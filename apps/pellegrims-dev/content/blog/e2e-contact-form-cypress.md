---
title: 'Testing a contact form with Cypress'
description: 'How to test a simple contact form using Cypress'
date: '2022-08-02'
tags: ['cypress', 'testing']
coverImage: '/assets/blog/e2e-contact-form-cypress/cover.jpg'
---

## Introduction

Many websites have a dedicated contact form that allows users to send a message to the website owner.
Using [Cypress](https://www.cypress.io/), we can easily write automated tests to prevent regressions to these types of
forms.

## Use case

For this article, we'll use a contact form containing three fields:

- Name
- E-Mail
- Message

![Contact Form screenshot {781x353}](/assets/blog/e2e-contact-form-cypress/form.png)

## Acceptance criteria

Before diving into writing the actual tests, it's usually a good idea to reflect on the acceptance criteria to
determine what actually needs to be tested:

- The contact form should be empty by default
- The form can only be submitted if
  - All form fields are filled in
  - The e-mail address field contains a valid e-mail address
- After the form has been successfully submitted
  - The fields should be hidden
  - A message should be shown saying the form was sent successfully
- In case of an http error after submitting the form, an error message should be displayed and the fields should remain
  visible

## Support functions

Based on these acceptance criteria, we can prepare some support functions to implement the desired checks and to make
the actual test file more readable and maintainable. These functions can be added in the Cypress test file on top of
your actual tests, or you could add them in specific support file.

### Retrieving the fields DOM elements

Since our contact form already contains ids for each field, the field elements can easily be retrieved:

```typescript
type ChainableInputElement = Cypress.Chainable<JQuery<HTMLInputElement>>;

export const getNameField = (): ChainableInputElement => cy.get('#field-Name');
export const getMailField = (): ChainableInputElement => cy.get('#field-Email');
export const getMessageField = (): ChainableInputElement =>
  cy.get('#field-Message');
export const getForm = () => cy.get('form');
```

The reason we explicitly define the return type for each of the query functions is that by default, `cy.get` returns a
Chainable `HTMLElement`, which doesn't allow us to chain with other handy functions
like [type](https://docs.cypress.io/api/commands/type).

### Filling out the form

We'll need to be able to fill out the form with some valid dummy values:

```typescript
export const completeForm = () => {
  getNameField().type('John Doe');
  getMailField().type('john.doe@mail.com');
  getMessageField().type('This is my message');
};
```

### Check validity of fields

The fields are all required so they might throw a validation error `valueMissing`. On top of that, the e-mail
field might throw a `typeMismatch` validation error if the entered value is not a valid e-mail address.

```typescript
export const assertValueMissing = (field: ChainableInputElement) =>
  assertValidity(field, { valueMissing: true });

export const assertTypeMismatch = (field: ChainableInputElement) =>
  assertValidity(field, { typeMismatch: true });

const assertValidity = (
  field: ChainableInputElement,
  expectedValidity: { valueMissing?: boolean; typeMismatch?: boolean }
) =>
  field.invoke('prop', 'validity').should('deep.include', {
    valueMissing: false,
    typeMismatch: false,
    ...expectedValidity,
  });
```

### Form fields visibility

The following function verifies if the fields are visible or hidden:

```typescript
export const assertFieldsVisible = (visible: boolean) =>
  cy.get('input').should(visible ? 'have.length.gt' : 'have.length', 0);
```

### Mocking the api call

When we submit the form using a POST request in a Cypress test, we don't want to actually send the form data to the api.
Instead, we can use [intercept](https://docs.cypress.io/api/commands/intercept) to mock the api call and return a
specific response.

Note that we store the intercepted call using an alias so that we can easily check later if the data was submitted or
not.

```typescript
const submitAlias = 'submit';

export const mockResponseStatusCode = (statusCode: number) =>
  cy
    .intercept('POST', 'http://localhost:4200/api/contact', { statusCode })
    .as(submitAlias);
```

### Checking that the form was submitted

To verify if the form data was submitted, the previously assigned alias can be used:

```typescript
export const assertSubmitted = (submitted: boolean) =>
  cy.get(`@${submitAlias}`).should(submitted ? 'not.be.null' : 'be.null');
```

### Submitting the form

There is only one button on the page, so we can just click the first button found to submit the form:

```typescript
export const clickSubmitButton = () => cy.get('button').click();
```

## Implementing the Cypress test

Now that we have all these support functions ready, we can easily implement the actual tests:

```typescript
describe('contact', () => {
  beforeEach(() => cy.visit('/contact'));

  it('form fields should be empty by default', () =>
    [getNameField(), getMailField(), getMessageField()].forEach((field) =>
      field.should('be.empty')
    ));

  it('form fields should have errors for missing fields', () => {
    assertValueMissing(getNameField());
    assertValueMissing(getMailField());
    assertValueMissing(getMessageField());
  });

  it('email field should have an error for an incorrect email address', () => {
    getMailField().type('john.doe@');
    assertTypeMismatch(getMailField());
  });

  describe('when submitting an invalid form', () => {
    beforeEach(() => {
      mockResponseStatusCode(204);
      clickSubmitButton();
    });
    it('should not send a POST request to the APi', () =>
      assertSubmitted(false));
    it('should keep the fields visible', () => assertFieldsVisible(true));
  });

  describe('when submitting a valid form', () => {
    beforeEach(() => {
      completeForm();
      mockResponseStatusCode(204);
      clickSubmitButton();
    });
    it('should send a POST request to the APi', () => assertSubmitted(true));
    it('should display a success message', () =>
      getForm().should('contain', 'Message succesfully sent, thank you!'));
    it('should hide the form fields', () => assertFieldsVisible(false));
  });

  describe('when submitting a valid form returns an error response', () => {
    beforeEach(() => {
      completeForm();
      mockResponseStatusCode(400);
      clickSubmitButton();
    });
    it('should send a POST request to the APi', () => assertSubmitted(true));
    it('should display an error message', () =>
      getForm().should('contain', 'Something went wrong, try again later.'));
    it('should keep the fields visible', () => assertFieldsVisible(true));
  });
});
```

![Contact Form screenshot {397x419}](/assets/blog/e2e-contact-form-cypress/execution.png)

## Summary

In this article, we demonstrated how to implement automated testing for a simple contact form using [Cypress](https://www.cypress.io/).

We first defined some acceptance criteria determining the requirements for the contact form. Based on these acceptance criteria, a number of support functions were implemented to keep the final test file more readable and maintainable.
Finally, these support functions were used in the actual test file.
