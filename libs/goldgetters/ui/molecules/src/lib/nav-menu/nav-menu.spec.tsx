import { render } from '@testing-library/react';
import { NavMenu } from './nav-menu';

describe('NavMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <NavMenu links={[{ text: 'Label', href: 'http://google.com' }]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
