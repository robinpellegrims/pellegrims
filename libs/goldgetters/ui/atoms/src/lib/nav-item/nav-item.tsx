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
      active ? 'text-primary' : 'text-dark-700'
    } block p-2 md:p-0 hover:bg-dark-50 lg:hover:bg-transparent lg:hover:text-primary dark:text-dark-400  lg:dark:hover:bg-transparent md:text-sm md:font-medium`}
  >
    {text}
  </NextLink>
);
