import { BlogArticleSummary } from '@pellegrims/pellegrims-dev/ui/organisms';
import { MarkdownDocument } from '@pellegrims/markdown';
import { FunctionComponent } from 'react';

interface BlogArticleListProps {
  posts: MarkdownDocument[];
  path: string;
}

const BlogArticleList: FunctionComponent<BlogArticleListProps> = ({
  posts,
  path,
}) => (
  <section>
    <div className="flex flex-col gap-12">
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
  </section>
);

export default BlogArticleList;
