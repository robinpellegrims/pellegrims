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
    <div className="mx-auto flex items-center justify-center flex-col gap-6 text-center">
      <Image
        alt="hero"
        src={imageSrc}
        width="264"
        height="280"
        layout="fixed"
      />
      <h1 className="sm:text-4xl text-3xl font-medium">
        Hi! I&apos;m <span className="font-semibold">{name}</span> 👋
      </h1>
      <p className="leading-relaxed sm:text-2xl text-xl">
        <RoughNotationGroup show={true}>
          I&apos;m a professional{' '}
          <Highlight color={colors.amber}>software developer</Highlight> &{' '}
          <Highlight color={colors.green}>front-end technical lead</Highlight>.{' '}
          <br />
          As a freelance{' '}
          <Highlight color={colors.blue}>web developer</Highlight>, I also help
          various clients building modern websites.
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
