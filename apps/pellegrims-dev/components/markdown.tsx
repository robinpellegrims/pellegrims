import ReactMarkdown from 'react-markdown';
import { MarkdownDocument } from '@pellegrims/markdown';
import { FunctionComponent } from 'react';
import { CodeBlock, MarkdownImage } from '@pellegrims/pellegrims-dev/ui/atoms';

interface MarkdownProps {
  markDown: MarkdownDocument;
}

const Markdown: FunctionComponent<MarkdownProps> = ({ markDown }) => (
  <ReactMarkdown components={{ code: CodeBlock, img: MarkdownImage }}>
    {markDown.content}
  </ReactMarkdown>
);

export default Markdown;
