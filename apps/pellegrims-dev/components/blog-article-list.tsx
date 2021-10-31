import BlogArticleSummary from './blog-article-summary';
import { MarkdownDocument } from '@pellegrims/markdown';

export interface BlogArticleListProps {
  posts: MarkdownDocument[];
}

export default function BlogArticleList(props: BlogArticleListProps) {
  return (
    <section className="overflow-hidden">
      <div className="px-5 py-12 flex flex-col gap-12">
        <h1 className="sm:text-3xl text-2xl font-medium mb-4">Blog</h1>
        <div className="-my-8 divide-y-2 divide-gray-100">
          {props.posts.map((post) => (
            <BlogArticleSummary
              key={post.frontMatter.title}
              post={post}
              path="/blog"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
