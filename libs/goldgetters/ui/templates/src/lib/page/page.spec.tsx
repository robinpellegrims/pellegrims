import { render } from '@testing-library/react';
import { PageTemplate } from './page';

describe('PageTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PageTemplate
        header={<>Header</>}
        content={<>Content</>}
        footer={<>Footer</>}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
