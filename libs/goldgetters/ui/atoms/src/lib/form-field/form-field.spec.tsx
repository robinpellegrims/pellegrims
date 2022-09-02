import { render } from '@testing-library/react';
import { FormField } from './form-field';

describe('FormField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormField id="123" />);
    expect(baseElement).toBeTruthy();
  });
});
