import { render } from '@testing-library/react';
import { ProfileForm } from './profile-form';

describe('ContactForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProfileForm submitHandler={() => Promise.resolve()} />
    );
    expect(baseElement).toBeTruthy();
  });
});
