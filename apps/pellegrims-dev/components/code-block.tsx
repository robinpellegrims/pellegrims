import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { FunctionComponent } from 'react';

const CodeBlock: FunctionComponent<CodeProps> = ({
  className,
  children,
  inline,
}) => {
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

export default CodeBlock;
