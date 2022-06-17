import { render } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Footer
        name="John Doe"
        facebookSvgIcon=""
        facebookUrl=""
        linkedInSvgIcon=""
        linkedInUrl=""
        twitterSvgIcon=""
        twitterUrl=""
        githubSvgIcon=""
        githubUrl=""
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
