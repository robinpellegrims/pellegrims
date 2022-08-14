import { render } from '@testing-library/react';
import { ErrorSection } from './error-section';

describe('ErrorSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ErrorSection title="404" message="Not found" />
    );
    expect(baseElement).toBeTruthy();
  });
});
