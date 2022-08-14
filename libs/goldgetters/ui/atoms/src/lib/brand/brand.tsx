import { FunctionComponent } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface LogoProps {
  image: StaticImageData | string;
}

export const Brand: FunctionComponent<LogoProps> = ({ image }) => (
  <Link href="/">
    <a className="flex items-center">
      <div className="mr-3 h-9 w-10 relative ">
        <Image src={image} alt="logo" layout="fill" />
      </div>
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        ZVC Goldgetters
      </span>
    </a>
  </Link>
);
