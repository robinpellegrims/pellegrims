import Image from 'next/image';
import { Highlight } from './highlight';
import { RoughNotationGroup } from 'react-rough-notation';
import { amber, green, blue } from 'tailwindcss/colors';
import Section from './section';

const colors = [amber['300'], green['300'], blue['300']];
const avataaarSrc =
  'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Red&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light';

export default function HeroHome() {
  return (
    <Section>
      <div className="mx-auto flex items-center justify-center flex-col gap-6 text-center">
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          src={avataaarSrc}
          width="264"
          height="280"
        />
        <h1 className="sm:text-4xl text-3xl font-medium text-gray-900">
          Hello! My name is{' '}
          <span className="font-semibold">Robin Pellegrims</span>.
        </h1>
        <p className="leading-relaxed">
          <RoughNotationGroup show={true}>
            I&apos;m a professional{' '}
            <Highlight color={colors[0]}>application developer</Highlight> &{' '}
            <Highlight color={colors[1]}>front-end technical lead</Highlight>.{' '}
            <br />
            As a freelance{' '}
            <Highlight color={colors[2]}>web developer</Highlight>, I also help
            various clients to develop their web presence.
          </RoughNotationGroup>
        </p>
      </div>
    </Section>
  );
}
