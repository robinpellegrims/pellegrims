import { render } from '@testing-library/react';
import { CodeBlock } from './code-block';

describe('CodeBlock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CodeBlock
        node={{ type: 'element', tagName: '', children: [] }}
        children={["console.log('test')"]}
        className="language-typescript"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
