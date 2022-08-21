import { FunctionComponent } from 'react';
import { NavItem, NavItemProps } from '@pellegrims/goldgetters/ui/atoms';

interface NavProps {
  links: NavItemProps[];
}

export const NavMenu: FunctionComponent<NavProps> = ({ links }) => (
  <ul className="border-dark-100 dark:border-dark-700 flex flex-col rounded-lg border md:flex-row md:gap-8 md:border-0">
    {links.map((link) => (
      <li
        key={link.href}
        className="border-dark-100 dark:border-dark-700 border-b md:border-0"
      >
        <NavItem {...link} />
      </li>
    ))}
  </ul>
);
