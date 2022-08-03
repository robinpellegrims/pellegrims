import { getForm } from '../support/home';
import {
  assertFieldsVisible,
  assertTypeMismatch,
  assertSubmitted,
  assertValueMissing,
  clickSubmitButton,
  completeForm,
  getMailField,
  getMessageField,
  getNameField,
  mockResponseStatusCode,
} from '../support/contact';

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
    getMailField().type('john.does@');
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
