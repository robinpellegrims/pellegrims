import { render } from '@testing-library/react';
import { Header } from './header';
import { mockMatchMedia } from '@pellegrims/shared/test';

mockMatchMedia();

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Header
        links={[]}
        userName="John Doe"
        currentPathName="/"
        loggedIn={false}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
