import { getHeading1 } from '../support/app.po';

describe('pellegrims-dev', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the main heading', () => {
    getHeading1().contains('Robin Pellegrims');
  });
});
