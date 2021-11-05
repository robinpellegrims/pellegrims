import ReactMarkdown from 'react-markdown';
import { MarkdownDocument } from '@pellegrims/markdown';
import CodeBlock from './code-block';

export interface MarkdownProps {
  markDown: MarkdownDocument;
}

export function Markdown({ markDown }: MarkdownProps) {
  return (
    <ReactMarkdown components={{ code: CodeBlock }}>
      {markDown.content}
    </ReactMarkdown>
  );
}

export default Markdown;
