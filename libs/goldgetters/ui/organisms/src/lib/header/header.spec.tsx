import { render } from '@testing-library/react';
import { Header } from './header';
import { mockMatchMedia } from '@pellegrims/shared/test';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

mockMatchMedia();

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header links={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
