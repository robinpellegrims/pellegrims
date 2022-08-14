import { render } from '@testing-library/react';
import { Header } from './header';

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

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header links={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
