import { render } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Footer
        twitterUrl="google.com"
        githubUrl="github.com"
        facebookUrl="facebook.com"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
