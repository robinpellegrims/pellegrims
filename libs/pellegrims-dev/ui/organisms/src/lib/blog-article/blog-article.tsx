import { MarkdownDocument } from '@pellegrims/shared/markdown';
import { Markdown, Tags } from '@pellegrims/pellegrims-dev/ui/molecules';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { SocialIcon } from '@pellegrims/pellegrims-dev/ui/atoms';
import { DateFormatted } from '@pellegrims/shared/ui/atoms';
import Image from 'next/image';

export interface BlogArticleProps {
  markDown: MarkdownDocument;
  twitterUserName: string;
  urlToShare?: string;
}

const shareOnTwitter = 'Share on twitter' as const;

export const BlogArticle: FunctionComponent<BlogArticleProps> = ({
  markDown,
  twitterUserName,
  urlToShare,
}) => (
  <article className="prose lg:prose-xl dark:prose-invert mx-auto">
    <header className="flex flex-col">
      <div className="mb-6 flex flex-col gap-2">
        <div className="flex w-full flex-row items-center justify-between">
          {markDown.frontMatter.date ? (
            <DateFormatted date={new Date(markDown.frontMatter.date)} />
          ) : null}
          {markDown.readingTimeMins} min read
        </div>
        <Tags tags={markDown.frontMatter.tags ?? []} />
      </div>
      <h1>{markDown.frontMatter.title}</h1>
      {markDown.frontMatter.coverImage ? (
        <div className="relative h-[31rem]">
          <Image
            src={markDown.frontMatter.coverImage}
            alt="cover image"
            loading="eager"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      ) : null}
    </header>
    <Markdown markDown={markDown} />
    {urlToShare ? (
      <footer className="mt-24">
        <Link
          href={`https://twitter.com/intent/tweet?text=${markDown.frontMatter.title}&via=${twitterUserName}&url=${urlToShare}`}
          rel="noopener noreferrer"
          target="_blank"
          aria-label={shareOnTwitter}
          className="flex items-center justify-center gap-2"
        >
          <SocialIcon type="twitter" />
          {shareOnTwitter}
        </Link>
      </footer>
    ) : null}
  </article>
);
