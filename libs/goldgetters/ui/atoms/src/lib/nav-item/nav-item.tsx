import { FunctionComponent } from 'react';
import Link from 'next/link';

export interface NavItemProps {
  text: string;
  href: string;
}

export const NavItem: FunctionComponent<NavItemProps> = ({ text, href }) => (
  <Link key={href} href={href}>
    <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:text-sm md:font-medium">
      {text}
    </a>
  </Link>
);
