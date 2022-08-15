import { DateFormatted } from '@pellegrims/pellegrims-dev/ui/atoms';
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
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
    <div className="relative h-96 lg:h-64 md:h-36">
      {props.cover.startsWith('/') ? (
        <Image
          src={props.cover}
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      ) : (
        <img
          className="w-full h-full object-cover object-center"
          src={props.cover}
          loading="lazy"
        />
      )}
    </div>
    <div className="p-6 flex flex-col flex-grow gap-3">
      <Tags tags={props.tags} />
      <h1 className="title-font text-xl font-bold">{props.title}</h1>
      <p className="leading-relaxed grow line-clamp-3">{props.excerpt}</p>
      <div className="flex items-center justify-between mt-auto">
        <a
          href={props.link}
          target={props.linkTarget}
          className="text-primary-500 inline-flex items-center md:mb-2 lg:mb-0"
          rel="noreferrer"
        >
          Read more
          <svg
            className="w-4 h-4 ml-2"
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
          <span className="text-dark-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
            <DateFormatted date={new Date(props.created)} />
          </span>
        ) : null}
      </div>
    </div>
  </div>
);
