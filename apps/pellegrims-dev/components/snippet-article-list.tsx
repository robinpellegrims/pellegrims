import { MarkdownDocument } from '@pellegrims/markdown';
import Section from './section';
import BlogArticle from './blog-article';
import PageHero from './page-hero';

export interface SnippetArticleListProps {
  snippets: MarkdownDocument[];
}

export default function SnippetArticleList({
  snippets,
}: SnippetArticleListProps) {
  return (
    <Section>
      <div className="flex flex-col gap-12">
        <PageHero title="Snippets" />
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
    </Section>
  );
}
