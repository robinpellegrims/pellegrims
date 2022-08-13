import { render } from '@testing-library/react';

import GoldgettersUiMolecules from './goldgetters-ui-molecules';

describe('GoldgettersUiMolecules', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GoldgettersUiMolecules />);
    expect(baseElement).toBeTruthy();
  });
});
