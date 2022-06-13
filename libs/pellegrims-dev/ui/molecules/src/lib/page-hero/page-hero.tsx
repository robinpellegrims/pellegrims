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
  <div className="flex flex-wrap w-full py-12 mb-6 flex-col items-center text-center">
    <PageTitle title={title} />
    {description ? <PageSubtitle subTitle={description} /> : null}
  </div>
);
