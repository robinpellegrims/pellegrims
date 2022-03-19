import { MarkdownDocument } from '@pellegrims/markdown';
import RightArrow from './right-arrow';
import Link from 'next/link';
import BlogArticleCategories from './blog-article-categories';
import DateFormatted from './date-formatted';
import { FunctionComponent } from 'react';

interface BlogArticleSummaryProps {
  post: MarkdownDocument;
  path: string;
}

const BlogArticleSummary: FunctionComponent<BlogArticleSummaryProps> = (
  props
) => (
  <article className="flex flex-col md:flex-row md:flex-nowrap gap-12">
    <div className="md:w-1/5 flex-shrink-0 flex flex-col gap-2">
      <DateFormatted date={props.post.frontMatter.date} />
      <BlogArticleCategories tags={props.post.frontMatter.tags} />
    </div>
    <div className="flex flex-col gap-6 md:flex-grow prose lg:prose-xl dark:prose-invert">
      <h2>{props.post.frontMatter.title}</h2>
      <p className="leading-relaxed">{props.post.frontMatter.description}</p>
      <Link href={`${props.path}/${props.post.slug}`}>
        <a className="inline-flex items-center">
          Read more
          <RightArrow />
        </a>
      </Link>
    </div>
  </article>
);

export default BlogArticleSummary;
