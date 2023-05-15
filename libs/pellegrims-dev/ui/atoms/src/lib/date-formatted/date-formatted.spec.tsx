import { render } from '@testing-library/react';
import { DateFormatted } from '@pellegrims/shared/ui/atoms';

describe('DateFormatted', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DateFormatted date={new Date()} />);
    expect(baseElement).toBeTruthy();
  });
});
