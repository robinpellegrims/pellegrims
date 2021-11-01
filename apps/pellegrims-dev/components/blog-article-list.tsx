import BlogArticleSummary from './blog-article-summary';
import { MarkdownDocument } from '@pellegrims/markdown';
import Section from './section';

export interface BlogArticleListProps {
  posts: MarkdownDocument[];
  title: string;
  path: string;
}

export default function BlogArticleList({
  posts,
  title,
  path,
}: BlogArticleListProps) {
  return (
    <Section>
      <div className="flex flex-col gap-12">
        <h1 className="sm:text-3xl text-4xl font-medium">{title}</h1>
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
