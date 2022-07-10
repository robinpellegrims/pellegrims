import Link from 'next/link';
import { FunctionComponent } from 'react';
import { SocialIcon, SocialIconType } from '../social-icon/social-icon';

interface SocialIconProps {
  href: string;
  iconType: SocialIconType;
  label: string;
}

export const SocialIconLink: FunctionComponent<SocialIconProps> = (props) => (
  <Link href={props.href}>
    <a rel="noopener noreferrer" target="_blank" aria-label={props.label}>
      <SocialIcon type={props.iconType} />
    </a>
  </Link>
);
