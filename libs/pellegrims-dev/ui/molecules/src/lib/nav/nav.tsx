import { FunctionComponent } from 'react';
import { NavItem, NavItemProps } from '@pellegrims/pellegrims-dev/ui/atoms';

interface NavProps {
  links: NavItemProps[];
}

export const Nav: FunctionComponent<NavProps> = ({ links }) => (
  <nav className="text-dark-600 dark:text-dark-300 flex flex-wrap items-center justify-center text-base md:ml-auto">
    {links.map((link) => (
      <NavItem key={link.href} {...link} />
    ))}
  </nav>
);
