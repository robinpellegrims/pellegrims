import { FunctionComponent } from 'react';

interface HeroPageProps {
  title: string;
  description?: string;
}

const PageHero: FunctionComponent<HeroPageProps> = ({ title, description }) => (
  <div className="flex flex-wrap w-full py-12 mb-6 flex-col items-center text-center">
    <h1 className="sm:text-6xl text-5xl font-medium title-font mb-4">
      {title}
    </h1>
    <div className="h-1 w-20 bg-primary-500 rounded" />
    <p className="lg:w-1/2 w-full leading-relaxed text-dark-500 dark:text-dark-400 my-6">
      {description}
    </p>
  </div>
);

export default PageHero;
