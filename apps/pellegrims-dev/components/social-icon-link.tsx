import Link from 'next/link';
import { FunctionComponent, ReactNode } from 'react';
import SocialIcon from './social-icon';

interface SocialIconProps {
  href: string;
  children: ReactNode;
  label: string;
}

const SocialIconLink: FunctionComponent<SocialIconProps> = (props) => (
  <Link href={props.href}>
    <a rel="noopener noreferrer" target="_blank" aria-label={props.label}>
      <SocialIcon>{props.children}</SocialIcon>
    </a>
  </Link>
);

export default SocialIconLink;
