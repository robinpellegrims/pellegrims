import Image from 'next/image';
import { Highlight } from './highlight';
import { RoughNotationGroup } from 'react-rough-notation';
import { amber, blue, green } from 'tailwindcss/colors';
import Section from './section';
import Button from './button';
import { FunctionComponent } from 'react';
import Link from 'next/link';

const colors = { amber: amber['300'], green: green['300'], blue: blue['300'] };

const HomeHero: FunctionComponent = () => (
  <Section>
    <div className="mx-auto flex items-center justify-center flex-col gap-6 text-center">
      <Image
        alt="hero"
        src="/avataaar.svg"
        width="264"
        height="280"
        layout="fixed"
      />
      <h1 className="sm:text-4xl text-3xl font-medium text-gray-900">
        Hi! I&apos;m <span className="font-semibold">Robin Pellegrims</span> 👋
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
      <Link href="/contact">
        <a>
          <Button text="Get in touch" type="primary" />
        </a>
      </Link>
    </div>
  </Section>
);

export default HomeHero;
