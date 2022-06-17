import { MarkdownDocument } from '@pellegrims/markdown';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { DateFormatted, RightArrow } from '@pellegrims/pellegrims-dev/ui/atoms';
import { ChipList } from '@pellegrims/pellegrims-dev/ui/molecules';

export interface BlogArticleSummaryProps {
  post: MarkdownDocument;
  path: string;
}

export const BlogArticleSummary: FunctionComponent<BlogArticleSummaryProps> = (
  props
) => (
  <article className="flex flex-col md:flex-row md:flex-nowrap gap-12">
    <div className="md:w-1/5 flex-shrink-0 flex flex-col gap-2">
      <DateFormatted date={props.post.frontMatter.date} />
      <ChipList tags={props.post.frontMatter.tags} />
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
