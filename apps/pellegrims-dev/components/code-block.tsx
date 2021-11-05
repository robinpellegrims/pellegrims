import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export function CodeBlock({ className, children }: CodeProps) {
  const language = className?.split('-')[1];
  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers={true}
      customStyle={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}
      style={darcula}
    >
      {children}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
