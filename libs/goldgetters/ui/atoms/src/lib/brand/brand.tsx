import { FunctionComponent } from 'react';
import Image, { StaticImageData } from 'next/image';
import { NextLink } from '@pellegrims/shared/ui/atoms';

interface LogoProps {
  image?: StaticImageData;
}

export const Brand: FunctionComponent<LogoProps> = ({ image }) => (
  <NextLink href="/" className="flex items-center">
    {image ? (
      <div className="mr-3 h-9 w-10 relative ">
        <Image src={image} alt="logo" layout="fill" />
      </div>
    ) : null}
    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
      ZVC Goldgetters
    </span>
  </NextLink>
);
