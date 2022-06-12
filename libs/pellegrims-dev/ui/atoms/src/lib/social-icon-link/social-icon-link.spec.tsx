import { render } from '@testing-library/react';
import { SocialIconLink } from './social-icon-link';

describe('SocialIconLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SocialIconLink href="google.com" label="Label">
        Content
      </SocialIconLink>
    );
    expect(baseElement).toBeTruthy();
  });
});
