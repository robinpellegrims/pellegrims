import { render } from '@testing-library/react';
import { Grid } from './grid';

describe('Grid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Grid render={() => <span />} items={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
