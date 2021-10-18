import Logo from './logo';
import SocialIcon from './social-icon';
import Link from 'next/link';

interface FooterProps {
  facebookSvgIcon: string;
  facebookUrl: string;
  linkedInSvgIcon: string;
  linkedInUrl: string;
  name: string;
  twitterHandle: string;
  twitterSvgIcon: string;
  twitterUrl: string;
}

export default function Footer(props: FooterProps) {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Logo />
          </a>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} {props.name} —
          <a
            href={props.twitterUrl}
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            {props.twitterHandle}
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <SocialIcon href={props.twitterUrl}>
            <path d={props.twitterSvgIcon} />
          </SocialIcon>
          <SocialIcon href={props.facebookUrl}>
            <path d={props.facebookSvgIcon} />
          </SocialIcon>
          <SocialIcon href={props.linkedInUrl}>
            <path stroke="none" d={props.linkedInSvgIcon} />
            <circle cx="4" cy="4" r="2" stroke="none" />
          </SocialIcon>
        </span>
      </div>
    </footer>
  );
}
