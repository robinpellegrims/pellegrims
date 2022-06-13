import { render } from '@testing-library/react';

import PellegrimsDevUiMolecules from './pellegrims-dev-ui-molecules';

describe('PellegrimsDevUiMolecules', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PellegrimsDevUiMolecules />);
    expect(baseElement).toBeTruthy();
  });
});
