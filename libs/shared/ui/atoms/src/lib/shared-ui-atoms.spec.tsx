import { render } from '@testing-library/react';

import SharedUiAtoms from './shared-ui-atoms';

describe('SharedUiAtoms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiAtoms />);
    expect(baseElement).toBeTruthy();
  });
});
