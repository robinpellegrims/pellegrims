describe('goldgetters', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('img[alt="logo"]').should('be.visible');
  });
});
