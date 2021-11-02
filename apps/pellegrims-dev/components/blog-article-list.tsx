import BlogArticleSummary from './blog-article-summary';
import { MarkdownDocument } from '@pellegrims/markdown';
import Section from './section';
import PageHero from './page-hero';

export interface BlogArticleListProps {
  posts: MarkdownDocument[];
  title: string;
  path: string;
}

export default function BlogArticleList({ posts, path }: BlogArticleListProps) {
  return (
    <Section>
      <div className="flex flex-col gap-12">
        <PageHero title="Blog" />
        <div className="divide-y-2 divide-gray-100 flex flex-col gap-6">
          {posts.map((post, index) => (
            <span
              key={post.frontMatter.title}
              className={index !== 0 ? 'pt-6' : ''}
            >
              <BlogArticleSummary post={post} path={path} />
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
