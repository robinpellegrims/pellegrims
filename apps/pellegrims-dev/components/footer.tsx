import Logo from './logo';
import SocialIcon from './social-icon';
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
}

const Footer: FunctionComponent<FooterProps> = (props) => (
  <Container>
    <footer className="py-12 flex flex-col items-center sm:flex-row gap-3 justify-between">
      <span className="inline-flex gap-3">
        <SocialIcon href={props.twitterUrl} label="Twitter">
          <path d={props.twitterSvgIcon} />
        </SocialIcon>
        <SocialIcon href={props.facebookUrl} label="Facebook">
          <path d={props.facebookSvgIcon} />
        </SocialIcon>
        <SocialIcon href={props.linkedInUrl} label="LinkedIn">
          <path stroke="none" d={props.linkedInSvgIcon} />
          <circle cx="4" cy="4" r="2" stroke="none" />
        </SocialIcon>
      </span>
      <p className="text-sm text-gray-500">
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
