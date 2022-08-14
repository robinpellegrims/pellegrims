import { render } from '@testing-library/react';
import { DarkModeSwitch } from './dark-mode-switch';
import { mockMatchMedia } from '@pellegrims/shared/test';

mockMatchMedia();

describe('DarkModeSwitch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DarkModeSwitch />);
    expect(baseElement).toBeTruthy();
  });
});
