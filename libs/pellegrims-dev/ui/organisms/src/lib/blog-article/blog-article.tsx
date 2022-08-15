import { MarkdownDocument } from '@pellegrims/shared/markdown';
import { Markdown, Tags } from '@pellegrims/pellegrims-dev/ui/molecules';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { DateFormatted, SocialIcon } from '@pellegrims/pellegrims-dev/ui/atoms';
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
  <article className="mx-auto prose lg:prose-xl dark:prose-invert">
    <header className="flex flex-col">
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex flex-row justify-between w-full items-center">
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
            layout="fill"
            objectFit="cover"
            loading="eager"
          />
        </div>
      ) : null}
    </header>
    <Markdown markDown={markDown} />
    {urlToShare ? (
      <footer className="mt-24">
        <Link
          href={`https://twitter.com/intent/tweet?text=${markDown.frontMatter.title}&via=${twitterUserName}&url=${urlToShare}`}
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            aria-label={shareOnTwitter}
            className="flex gap-2 items-center justify-center"
          >
            <SocialIcon type="twitter" />
            {shareOnTwitter}
          </a>
        </Link>
      </footer>
    ) : null}
  </article>
);
