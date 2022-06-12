import { render } from '@testing-library/react';
import { Highlight } from './highlight';

describe('Highlight', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Highlight color="red">Content</Highlight>);
    expect(baseElement).toBeTruthy();
  });
});
