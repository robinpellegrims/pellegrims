import { render } from '@testing-library/react';
import { PageSubtitle } from './page-subtitle';

describe('PageSubtitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageSubtitle subTitle="Subtitle" />);
    expect(baseElement).toBeTruthy();
  });
});
