import { render } from '@testing-library/react';

import PellegrimsDevUiTemplates from './pellegrims-dev-ui-templates';

describe('PellegrimsDevUiTemplates', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PellegrimsDevUiTemplates />);
    expect(baseElement).toBeTruthy();
  });
});
