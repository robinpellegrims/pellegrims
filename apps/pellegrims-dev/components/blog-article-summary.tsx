import { MarkdownDocument } from '@pellegrims/markdown';
import RightArrow from './right-arrow';
import Link from 'next/link';
import BlogArticleCategories from './blog-article-categories';
import BlogArticleDate from './blog-article-date';

export interface BlogArticleSummaryProps {
  post: MarkdownDocument;
  path: string;
}

export default function BlogArticleSummary(props: BlogArticleSummaryProps) {
  return (
    <article className="flex flex-col md:flex-row md:flex-nowrap gap-6">
      <div className="md:w-1/5 flex-shrink-0 flex flex-col gap-2">
        <BlogArticleDate date={props.post.frontMatter.date} />
        <BlogArticleCategories tags={props.post.frontMatter.tags} />
      </div>
      <div className="flex flex-col gap-6 md:flex-grow  prose lg:prose-xl">
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
}
