import { render } from '@testing-library/react';
import { FavIcon } from './favicon';

describe('FavIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FavIcon />);
    expect(baseElement).toBeTruthy();
  });
});
