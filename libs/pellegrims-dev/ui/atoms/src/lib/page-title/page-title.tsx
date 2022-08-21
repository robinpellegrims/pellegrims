import { FunctionComponent } from 'react';

interface PageTitleProps {
  title: string;
}

export const PageTitle: FunctionComponent<PageTitleProps> = ({ title }) => (
  <>
    <h1 className="title-font mb-4 text-5xl font-medium sm:text-6xl">
      {title}
    </h1>
    <div className="bg-primary-500 h-1 w-20 rounded" />
  </>
);
