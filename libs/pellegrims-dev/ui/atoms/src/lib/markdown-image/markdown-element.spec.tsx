import { render } from '@testing-library/react';
import { MarkdownImage } from './markdown-image';

describe('MarkdownImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MarkdownImage
        node={{ type: 'element', tagName: '', children: [] }}
        children={[]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
