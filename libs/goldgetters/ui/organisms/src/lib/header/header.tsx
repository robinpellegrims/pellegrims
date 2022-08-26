import { FunctionComponent, useState } from 'react';
import {
  Brand,
  DarkModeSwitch,
  Icon,
  IconButton,
  NavItem,
  NavItemProps,
} from '@pellegrims/goldgetters/ui/atoms';
import { StaticImageData } from 'next/image';
import { User, UserMenu } from './user-menu';
import { NavMenu } from '@pellegrims/goldgetters/ui/molecules';

type HeaderLink = Pick<NavItemProps, 'text' | 'href'>;

const loginLink: HeaderLink = { text: 'Inloggen', href: '/api/auth/signin' };

interface HeaderProps {
  links: HeaderLink[];
  image?: StaticImageData;
  currentPathName: string;
  user?: User;
}

export const Header: FunctionComponent<HeaderProps> = ({
  links,
  image,
  currentPathName,
  user,
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="border-dark-200 dark:border-dark-600 top-0 left-0 z-20 w-full border-b px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-col justify-between gap-2 sm:flex-row">
        <Brand image={image} />
        <div className="ml-auto flex items-center gap-2 sm:ml-0 md:order-2">
          <DarkModeSwitch />
          {user ? (
            <UserMenu user={user} />
          ) : (
            <NavItem
              {...loginLink}
              active={currentPathName === loginLink.href}
            />
          )}
          <div className="md:hidden">
            <IconButton onClick={() => setIsNavOpen((prev) => !prev)}>
              <Icon type="hamburger" />
            </IconButton>
          </div>
        </div>
        <div
          className={`${
            isNavOpen ? '' : 'hidden'
          } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
        >
          <NavMenu
            links={links.map((link) => ({
              ...link,
              active: link.href === currentPathName,
            }))}
          />
        </div>
      </div>
    </nav>
  );
};
