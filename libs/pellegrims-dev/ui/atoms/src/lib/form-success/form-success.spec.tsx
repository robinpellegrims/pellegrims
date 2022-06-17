import { render } from '@testing-library/react';
import { FormSuccess } from './form-success';

describe('FormSuccessComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormSuccess />);
    expect(baseElement).toBeTruthy();
  });
});
