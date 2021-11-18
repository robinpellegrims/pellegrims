import Link from 'next/link';
import { FunctionComponent } from 'react';

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
  label: string;
}

const SocialIcon: FunctionComponent<SocialIconProps> = (props) => (
  <Link href={props.href}>
    <a rel="noopener noreferrer" target="_blank" aria-label={props.label}>
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        {props.children}
      </svg>
    </a>
  </Link>
);

export default SocialIcon;
