import Image from 'next/image';
import { Button, Highlight } from '@pellegrims/pellegrims-dev/ui/atoms';
import { RoughNotationGroup } from 'react-rough-notation';
import { amber, green, indigo } from 'tailwindcss/colors';
import { FunctionComponent } from 'react';
import Link from 'next/link';

const colors = {
  amber: amber['400'],
  green: green['400'],
  blue: indigo['400'],
};

interface HomeHeroProps {
  imageSrc: string;
  name: string;
  contactPath: string;
}

export const HomeHero: FunctionComponent<HomeHeroProps> = ({
  imageSrc,
  name,
  contactPath,
}) => (
  <section>
    <div className="mx-auto flex flex-col items-center justify-center gap-12 text-center">
      <Image
        alt="hero"
        src={imageSrc}
        width="264"
        height="280"
        layout="fixed"
      />
      <h1 className="text-3xl font-medium sm:text-4xl">
        Hi! I&apos;m <span className="font-semibold">{name}</span> 👋
      </h1>
      <p className="text-xl leading-relaxed sm:text-2xl">
        <RoughNotationGroup show={true}>
          I&apos;m a professional{' '}
          <Highlight color={colors.amber}>software developer</Highlight>
          {', '}
          <Highlight color={colors.green}>front-end technical lead</Highlight>
          {' & '}
          <span className="whitespace-nowrap">
            <Highlight color={colors.blue}>freelance web developer</Highlight>.
          </span>
        </RoughNotationGroup>
      </p>
      <Link href={contactPath}>
        <a>
          <Button text="Get in touch" type="primary" />
        </a>
      </Link>
    </div>
  </section>
);
