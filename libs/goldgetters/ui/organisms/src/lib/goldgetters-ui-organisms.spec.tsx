import { render } from '@testing-library/react';

import GoldgettersUiOrganisms from './goldgetters-ui-organisms';

describe('GoldgettersUiOrganisms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GoldgettersUiOrganisms />);
    expect(baseElement).toBeTruthy();
  });
});
