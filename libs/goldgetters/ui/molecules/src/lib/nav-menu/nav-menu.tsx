import { FunctionComponent } from 'react';
import { NavItem, NavItemProps } from '@pellegrims/goldgetters/ui/atoms';

interface NavProps {
  links: NavItemProps[];
}

export const NavMenu: FunctionComponent<NavProps> = ({ links }) => (
  <ul className="flex flex-col md:gap-8 md:flex-row rounded-lg border md:border-0 border-dark-100 dark:border-dark-700">
    {links.map((link) => (
      <li
        key={link.href}
        className="border-b border-dark-100 md:border-0 dark:border-dark-700"
      >
        <NavItem {...link} />
      </li>
    ))}
  </ul>
);
