import { render } from '@testing-library/react';
import { mockMatchMedia } from '@pellegrims/shared/test';
import { SocialLink } from './social-link';

mockMatchMedia();

describe('IconButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialLink href="google.com"></SocialLink>);
    expect(baseElement).toBeTruthy();
  });
});
