import { FunctionComponent } from 'react';
import Link from 'next/link';

export interface NavItemProps {
  text: string;
  href: string;
}

export const NavItem: FunctionComponent<NavItemProps> = ({ text, href }) => (
  <Link key={href} href={href}>
    <a className="mr-5 hover:text-dark-900 dark:hover:text-white">{text}</a>
  </Link>
);
