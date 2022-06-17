import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CodeComponent } from 'react-markdown/src/ast-to-react';

export const CodeBlock: CodeComponent = ({ className, children, inline }) => {
  const language = className?.split('-')[1];
  return inline ? (
    <code className={className}>{children}</code>
  ) : (
    <SyntaxHighlighter
      language={language}
      showLineNumbers={true}
      customStyle={{ backgroundColor: 'transparent', margin: 0, padding: 0 }}
      style={darcula}
    >
      {children}
    </SyntaxHighlighter>
  );
};
