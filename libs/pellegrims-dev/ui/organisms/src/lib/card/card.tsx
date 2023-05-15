import { DateFormatted } from '@pellegrims/shared/ui/atoms';
import { Tags } from '@pellegrims/pellegrims-dev/ui/molecules';
import { FunctionComponent, HTMLAttributeAnchorTarget } from 'react';
import Image from 'next/image';
import { DateString } from '@pellegrims/shared/markdown';

export interface CardProps {
  title: string;
  link: string;
  linkTarget: HTMLAttributeAnchorTarget;
  cover: string;
  tags: string[];
  excerpt: string;
  created?: DateString;
}

export const Card: FunctionComponent<CardProps> = (props) => (
  <div className="flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
    <div className="relative h-96 md:h-36 lg:h-64">
      {props.cover.startsWith('/') ? (
        <Image
          src={props.cover}
          alt="cover image"
          loading="lazy"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      ) : (
        <img
          className="h-full w-full object-cover object-center"
          src={props.cover}
          loading="lazy"
        />
      )}
    </div>
    <div className="flex flex-grow flex-col gap-3 p-6">
      <Tags tags={props.tags} />
      <h1 className="title-font text-xl font-bold">{props.title}</h1>
      <p className="line-clamp-3 grow leading-relaxed">{props.excerpt}</p>
      <div className="mt-auto flex items-center justify-between">
        <a
          href={props.link}
          target={props.linkTarget}
          className="text-primary-500 inline-flex items-center md:mb-2 lg:mb-0"
          rel="noreferrer"
        >
          Read more
          <svg
            className="ml-2 h-4 w-4"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
        {props.created ? (
          <span className="text-dark-400 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none md:ml-0 lg:ml-auto">
            <DateFormatted date={new Date(props.created)} />
          </span>
        ) : null}
      </div>
    </div>
  </div>
);
