import { render } from '@testing-library/react';
import { mockMatchMedia } from '@pellegrims/shared/test';
import { Icon } from './icon';

mockMatchMedia();

describe('Icon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon type="hamburger" />);
    expect(baseElement).toBeTruthy();
  });
});
