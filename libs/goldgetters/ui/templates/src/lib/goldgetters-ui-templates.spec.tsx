import { render } from '@testing-library/react';

import GoldgettersUiTemplates from './goldgetters-ui-templates';

describe('GoldgettersUiTemplates', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GoldgettersUiTemplates />);
    expect(baseElement).toBeTruthy();
  });
});
