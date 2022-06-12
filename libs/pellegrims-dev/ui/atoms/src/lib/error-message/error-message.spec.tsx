import { render } from '@testing-library/react';
import { ErrorMessage } from './error-message';

describe('ErrorMessage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorMessage errorMessage="error" />);
    expect(baseElement).toBeTruthy();
  });
});
