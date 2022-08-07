describe('goldgetters', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('img[alt="ZVC Goldgetters logo"]').should('be.visible');
  });
});
