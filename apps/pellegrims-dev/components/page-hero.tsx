import { FunctionComponent } from 'react';

interface HeroPageProps {
  title: string;
}

const PageHero: FunctionComponent<HeroPageProps> = ({ title }) => (
  <div className="lg:w-1/2 w-full">
    <h1 className="sm:text-3xl text-4xl font-medium mb-2">{title}</h1>
    <div className="h-1 w-20 bg-primary-500 rounded" />
  </div>
);

export default PageHero;
