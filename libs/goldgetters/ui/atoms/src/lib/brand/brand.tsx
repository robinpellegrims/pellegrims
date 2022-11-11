import { FunctionComponent } from 'react';
import Image, { StaticImageData } from 'next/image';
import { NextLink } from '@pellegrims/shared/ui/atoms';

interface LogoProps {
  image?: StaticImageData;
}

export const Brand: FunctionComponent<LogoProps> = ({ image }) => (
  <NextLink href="/" className="flex items-center">
    <>
      {image ? (
        <div className="relative mr-3 h-10 w-10 ">
          <Image src={image} alt="logo" fill sizes="100vw" />
        </div>
      ) : null}
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        ZVC Goldgetters
      </span>
    </>
  </NextLink>
);
