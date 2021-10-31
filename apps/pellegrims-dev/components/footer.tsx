import Logo from './logo';
import SocialIcon from './social-icon';
import Link from 'next/link';
import Container from './container';

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
    <Container>
      <footer>
        <div className="px-5 py-8 flex items-center sm:flex-row flex-col">
          <Link href="/">
            <a className="flex font-medium items-center md:justify-start justify-center text-gray-900">
              <Logo />
            </a>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} {props.name} —
            <a
              href={props.twitterUrl}
              className="ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              {props.twitterHandle}
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3">
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
    </Container>
  );
}
