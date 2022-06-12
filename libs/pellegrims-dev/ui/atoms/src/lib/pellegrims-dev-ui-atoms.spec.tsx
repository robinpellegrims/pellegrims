import { render } from '@testing-library/react';

import PellegrimsDevUiAtoms from './pellegrims-dev-ui-atoms';

describe('PellegrimsDevUiAtoms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PellegrimsDevUiAtoms />);
    expect(baseElement).toBeTruthy();
  });
});
