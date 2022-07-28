import { getButton } from './home';

type ChainableInputElement = Cypress.Chainable<JQuery<HTMLInputElement>>;

export const getNameField = (): ChainableInputElement => cy.get('#field-Name');
export const getMailField = (): ChainableInputElement => cy.get('#field-Email');
export const getMessageField = (): ChainableInputElement =>
  cy.get('#field-Message');

export const completeForm = () => {
  getNameField().type('John Doe');
  getMailField().type('john.doe@mail.com');
  getMessageField().type('This is my message');
};

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

const submitAlias = 'submit';

export const mockResponseStatusCode = (statusCode: number) =>
  cy
    .intercept('POST', 'http://localhost:4200/api/contact', { statusCode })
    .as(submitAlias);

export const assertSubmitted = (submitted: boolean) =>
  cy.get(`@${submitAlias}`).should(submitted ? 'not.be.null' : 'be.null');

export const assertFieldsVisible = (visible: boolean) =>
  cy.get('input').should(visible ? 'have.length.gt' : 'have.length', 0);

export const clickSubmitButton = () => getButton().click();
