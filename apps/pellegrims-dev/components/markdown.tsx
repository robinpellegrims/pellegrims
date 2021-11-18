import ReactMarkdown from 'react-markdown';
import { MarkdownDocument } from '@pellegrims/markdown';
import CodeBlock from './code-block';
import { FunctionComponent } from 'react';

interface MarkdownProps {
  markDown: MarkdownDocument;
}

const Markdown: FunctionComponent<MarkdownProps> = ({ markDown }) => (
  <ReactMarkdown components={{ code: CodeBlock }}>
    {markDown.content}
  </ReactMarkdown>
);

export default Markdown;
