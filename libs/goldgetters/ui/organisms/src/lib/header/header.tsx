import { FunctionComponent, useState } from 'react';
import {
  Brand,
  DarkModeSwitch,
  NavItem,
  NavItemProps,
} from '@pellegrims/goldgetters/ui/atoms';
import { StaticImageData } from 'next/image';
import { NavMenu } from '@pellegrims/goldgetters/ui/molecules';

type HeaderLink = Pick<NavItemProps, 'text' | 'href'>;

interface HeaderProps {
  links: HeaderLink[];
  image?: StaticImageData;
  currentPathName: string;
  loggedIn: boolean;
  userName: string;
}

const loginLink: HeaderLink = { text: 'Login', href: '/api/auth/signin' };
const logoutLink: HeaderLink = { text: 'Logout', href: '/api/auth/signout' };

export const Hamburger = () => (
  <button
    data-collapse-toggle="navbar-sticky"
    type="button"
    className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
    aria-controls="navbar-sticky"
    aria-expanded="false"
  >
    <span className="sr-only">Open main menu</span>
    <svg
      className="h-6 w-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  </button>
);

export const Header: FunctionComponent<HeaderProps> = ({
  links,
  image,
  currentPathName,
  loggedIn,
  userName,
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const loginOrLogoutLink = loggedIn ? logoutLink : loginLink;

  return (
    <nav className="border-dark-200 dark:border-dark-600 top-0 left-0 z-20 w-full border-b px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap justify-between gap-2">
        <Brand image={image} />
        <div className="flex items-center gap-4 md:order-2">
          {userName}
          <NavItem
            {...loginOrLogoutLink}
            active={currentPathName === loginOrLogoutLink.href}
          />
          <DarkModeSwitch />
          <div onClick={() => setIsNavOpen((prev) => !prev)}>
            <Hamburger />
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
