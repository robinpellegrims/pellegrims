import { render } from '@testing-library/react';
import { Brand } from './brand';

describe('Logo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Brand image="" />);
    expect(baseElement).toBeTruthy();
  });
});
