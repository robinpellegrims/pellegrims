import { FunctionComponent } from 'react';
import { NextLink } from '@pellegrims/shared/ui/atoms';

export interface NavItemProps {
  text: string;
  href: string;
  active: boolean;
}

export const NavItem: FunctionComponent<NavItemProps> = ({
  text,
  href,
  active,
}) => (
  <NextLink
    href={href}
    className={`${
      active ? 'text-primary' : 'text-gray-700'
    } block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 md:text-sm md:font-medium`}
  >
    {text}
  </NextLink>
);
