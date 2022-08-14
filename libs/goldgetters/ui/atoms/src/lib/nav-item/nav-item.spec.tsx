import { render } from '@testing-library/react';
import { NavItem } from './nav-item';

describe('RightArrow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <NavItem text="text" href="http://google.com" active={false} />
    );
    expect(baseElement).toBeTruthy();
  });
});
