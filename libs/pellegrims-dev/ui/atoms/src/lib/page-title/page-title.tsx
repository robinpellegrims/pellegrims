import { FunctionComponent } from 'react';

interface PageTitleProps {
  title: string;
}

export const PageTitle: FunctionComponent<PageTitleProps> = ({ title }) => (
  <>
    <h1 className="sm:text-6xl text-5xl font-medium title-font mb-4">
      {title}
    </h1>
    <div className="h-1 w-20 bg-primary-500 rounded" />
  </>
);
