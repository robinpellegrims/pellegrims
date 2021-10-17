import Logo from './logo';
import { socialConfig } from './social-icon.constants';
import SocialIcon from './social-icon';
import Link from 'next/link';

const twitterHandle = '@RobinPel';
const name = 'Robin Pellegrims';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Logo></Logo>
          </a>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {currentYear} {name} —
          <a
            href={socialConfig.twitter.url}
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            {twitterHandle}
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <SocialIcon href={socialConfig.twitter.url}>
            <path d={socialConfig.twitter.svgData}></path>
          </SocialIcon>
          <SocialIcon href={socialConfig.facebook.url}>
            <path d={socialConfig.facebook.svgData}></path>
          </SocialIcon>
          <SocialIcon href={socialConfig.linkedin.url}>
            <path stroke="none" d={socialConfig.linkedin.svgData}></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </SocialIcon>
        </span>
      </div>
    </footer>
  );
}
