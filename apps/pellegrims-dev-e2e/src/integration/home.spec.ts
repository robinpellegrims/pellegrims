import { getHeading1 } from '../support/home';

describe('home', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the main heading', () => {
    getHeading1().contains('Robin Pellegrims');
  });
});
