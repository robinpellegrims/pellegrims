import { render } from '@testing-library/react';

import GoldgettersUiAtoms from './goldgetters-ui-atoms';

describe('GoldgettersUiAtoms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GoldgettersUiAtoms />);
    expect(baseElement).toBeTruthy();
  });
});
