import Logo from './logo';
import SocialIconLink from './social-icon-link';
import Link from 'next/link';
import Container from './container';
import { FunctionComponent } from 'react';

interface FooterProps {
  facebookSvgIcon: string;
  facebookUrl: string;
  linkedInSvgIcon: string;
  linkedInUrl: string;
  name: string;
  twitterSvgIcon: string;
  twitterUrl: string;
  githubSvgIcon: string;
  githubUrl: string;
}

const Footer: FunctionComponent<FooterProps> = (props) => (
  <Container>
    <footer className="py-12 flex flex-col items-center sm:flex-row gap-3 justify-between">
      <span className="inline-flex gap-3">
        <SocialIconLink href={props.twitterUrl} label="Twitter">
          <path d={props.twitterSvgIcon} />
        </SocialIconLink>
        <SocialIconLink href={props.facebookUrl} label="Facebook">
          <path d={props.facebookSvgIcon} />
        </SocialIconLink>
        <SocialIconLink href={props.linkedInUrl} label="LinkedIn">
          <path stroke="none" d={props.linkedInSvgIcon} />
          <circle cx="4" cy="4" r="2" stroke="none" />
        </SocialIconLink>
        <SocialIconLink href={props.githubUrl} label="Github">
          <path d={props.githubSvgIcon} />
        </SocialIconLink>
      </span>
      <p className="text-sm text-dark-500">
        © {new Date().getFullYear()} {props.name}
      </p>
      <Link href="/">
        <a>
          <Logo end={true} />
        </a>
      </Link>
    </footer>
  </Container>
);

export default Footer;
