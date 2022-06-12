import { FunctionComponent } from 'react';

interface PageSubtitleProps {
  subTitle: string;
}

export const PageSubtitle: FunctionComponent<PageSubtitleProps> = ({
  subTitle,
}) => (
  <p className="lg:w-1/2 w-full leading-relaxed text-dark-500 dark:text-dark-400 my-6">
    {subTitle}
  </p>
);
