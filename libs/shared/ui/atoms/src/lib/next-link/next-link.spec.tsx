import { render } from '@testing-library/react';
import { NextLink } from './next-link';

describe('NextLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <NextLink href="http://www.example.com">This is the link text</NextLink>
    );
    expect(baseElement).toBeTruthy();
  });
});
