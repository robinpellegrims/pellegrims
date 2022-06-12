import { render } from '@testing-library/react';
import { FormField } from './form-field';

describe('FormField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FormField type="input" label="Some Label" htmlAttributes={{}} />
    );
    expect(baseElement).toBeTruthy();
  });
});
