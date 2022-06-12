import { MarkdownDocument } from '@pellegrims/markdown';
import BlogArticle from './blog-article';
import { FunctionComponent } from 'react';

interface SnippetArticleListProps {
  snippets: MarkdownDocument[];
}

const SnippetArticleList: FunctionComponent<SnippetArticleListProps> = ({
  snippets,
}) => (
  <section>
    <div className="flex flex-col gap-12">
      <div className="divide-y-2 divide-gray-100 flex flex-col gap-6">
        {snippets.filter(Boolean).map((snippet, index) => (
          <span
            key={snippet.frontMatter.title}
            className={index !== 0 ? 'pt-6' : ''}
          >
            <BlogArticle markDown={snippet} />
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default SnippetArticleList;
