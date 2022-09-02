import { render } from '@testing-library/react';
import { ContactForm } from './contact-form';

describe('ContactForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ContactForm
        onSubmit={() => {
          /* do nothing*/
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
