import { render } from '@testing-library/react';
import { Alert } from './alert';

describe('Alert', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Alert type="warning" text="this is the text" title="this is the title" />
    );
    expect(baseElement).toBeTruthy();
  });
});
