import { render } from '@testing-library/react';
import { Brand } from './brand';

describe('Brand', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Brand />);
    expect(baseElement).toBeTruthy();
  });
});
