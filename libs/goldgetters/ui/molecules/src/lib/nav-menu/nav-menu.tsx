import { FunctionComponent } from 'react';
import { NavItem, NavItemProps } from '@pellegrims/goldgetters/ui/atoms';

interface NavProps {
  links: NavItemProps[];
}

export const NavMenu: FunctionComponent<NavProps> = ({ links }) => (
  <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    {links.map((link) => (
      <li key={link.href}>
        <NavItem {...link} />
      </li>
    ))}
  </ul>
);
