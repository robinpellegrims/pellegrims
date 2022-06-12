import { render } from '@testing-library/react';
import { RightArrow } from './right-arrow';

describe('RightArrow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RightArrow />);
    expect(baseElement).toBeTruthy();
  });
});
