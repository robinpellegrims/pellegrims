import { render } from '@testing-library/react';
import { mockMatchMedia } from '@pellegrims/shared/test';
import { IconButton } from './icon-button';
import { MoonIcon } from '@heroicons/react/24/outline';

mockMatchMedia();

describe('IconButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <IconButton onClick={Function}>
        <MoonIcon />
      </IconButton>
    );
    expect(baseElement).toBeTruthy();
  });
});
