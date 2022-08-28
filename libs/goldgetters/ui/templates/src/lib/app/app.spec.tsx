import { render } from '@testing-library/react';
import { AppTemplate } from './app';

describe('PageTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AppTemplate
        header={<>Header</>}
        content={<>Content</>}
        footer={<>Footer</>}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
