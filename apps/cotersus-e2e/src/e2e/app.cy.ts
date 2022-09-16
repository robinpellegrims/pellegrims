describe('cotersus', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Cotersus', () => {
    cy.get('h1').contains('Cotersus');
    cy.get('h2').contains('IT Consulting');
  });
});
