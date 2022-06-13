import { FunctionComponent } from 'react';
import { NavItem, NavItemProps } from './navItem';

interface NavProps {
  links: NavItemProps[];
}

export const Nav: FunctionComponent<NavProps> = ({ links }) => (
  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-dark-600 dark:text-dark-300">
    {links.map((link) => (
      <NavItem key={link.href} {...link} />
    ))}
  </nav>
);
