import { render } from '@testing-library/react';

import PellegrimsDevUiOrganisms from './pellegrims-dev-ui-organisms';

describe('PellegrimsDevUiOrganisms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PellegrimsDevUiOrganisms />);
    expect(baseElement).toBeTruthy();
  });
});
