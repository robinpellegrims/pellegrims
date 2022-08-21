import { FunctionComponent } from 'react';

interface PageSubtitleProps {
  subTitle: string;
}

export const PageSubtitle: FunctionComponent<PageSubtitleProps> = ({
  subTitle,
}) => (
  <p className="text-dark-500 dark:text-dark-400 my-6 w-full leading-relaxed lg:w-1/2">
    {subTitle}
  </p>
);
