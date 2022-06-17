import { DateFormatted } from '@pellegrims/pellegrims-dev/ui/atoms';
import { Tags } from '@pellegrims/pellegrims-dev/ui/molecules';
import { FunctionComponent } from 'react';

export interface BookmarkProps {
  title: string;
  link: string;
  cover: string;
  tags: string[];
  excerpt: string;
  created: Date;
}

export const Bookmark: FunctionComponent<BookmarkProps> = (props) => (
  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
    <img
      className="lg:h-48 md:h-36 w-full object-cover object-center"
      src={props.cover}
      alt="cover image"
      loading="lazy"
    />
    <div className="p-6 flex flex-col flex-grow">
      <Tags tags={props.tags} />
      <h1 className="title-font text-lg font-medium mb-3">{props.title}</h1>
      <p className="leading-relaxed mb-3 grow line-clamp-3">{props.excerpt}</p>
      <div className="flex items-center justify-between mt-auto">
        <a
          href={props.link}
          target="_blank"
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
        <span className="text-dark-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
          <DateFormatted date={props.created} />
        </span>
      </div>
    </div>
  </div>
);
