import { MarkdownDocument } from '@pellegrims/markdown';
import { FunctionComponent } from 'react';
import { BlogArticle } from '@pellegrims/pellegrims-dev/ui/organisms';
import { twitterSvgIcon, twitterUserName } from '../constants';
import { buildCanonicalUrl } from '../utils/url';

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
            <BlogArticle
              markDown={snippet}
              twitterUserName={twitterUserName}
              canonicalUrl={buildCanonicalUrl(snippet.slug)}
              twitterSvgIcon={twitterSvgIcon}
            />
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default SnippetArticleList;
