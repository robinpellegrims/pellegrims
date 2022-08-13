import { render } from '@testing-library/react';

import { CounterDevAnalytics } from './counter-dev-analytics';

describe('CounterDevAnalytics', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CounterDevAnalytics user="123" />);
    expect(baseElement).toBeTruthy();
  });
});
