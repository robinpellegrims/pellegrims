import { FunctionComponent } from 'react';
import { PageSubtitle, PageTitle } from '@pellegrims/pellegrims-dev/ui/atoms';

interface HeroPageProps {
  title: string;
  description?: string;
}

export const PageHero: FunctionComponent<HeroPageProps> = ({
  title,
  description,
}) => (
  <div className="mb-6 flex w-full flex-col flex-wrap items-center py-12 text-center">
    <PageTitle title={title} />
    {description ? <PageSubtitle subTitle={description} /> : null}
  </div>
);
