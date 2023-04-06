import { render } from '@testing-library/react';
import ImageInput from './image-input';

describe('ImageInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageInput label="label" />);
    expect(baseElement).toBeTruthy();
  });
});
