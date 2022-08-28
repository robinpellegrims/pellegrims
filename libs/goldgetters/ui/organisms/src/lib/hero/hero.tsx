import { FunctionComponent } from 'react';
import { Section } from '@pellegrims/goldgetters/ui/templates';
import { Heading } from '@pellegrims/goldgetters/ui/atoms';

interface HeroProps {
  title: string;
  subtitle: string;
}

export const Hero: FunctionComponent<HeroProps> = ({ title, subtitle }) => (
  <Section>
    <div className="flex flex-col gap-4 text-center">
      <Heading level={1}>{title}</Heading>
      <p className="text-dark-500 mb-6 text-lg font-normal dark:text-gray-400 lg:text-xl">
        {subtitle}
      </p>
    </div>
  </Section>
);
