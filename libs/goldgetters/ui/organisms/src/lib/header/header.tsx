import { FunctionComponent, useState } from 'react';
import { Brand, NavItem, NavItemProps } from '@pellegrims/goldgetters/ui/atoms';
import { StaticImageData } from 'next/image';
import { NavMenu } from '@pellegrims/goldgetters/ui/molecules';
import { useRouter } from 'next/router';

type HeaderLink = Pick<NavItemProps, 'text' | 'href'>;

interface HeaderProps {
  links: HeaderLink[];
  image: StaticImageData | string;
}

const loginLink: HeaderLink = { text: 'Login', href: '/login' };

const Hamburger = () => (
  <button
    data-collapse-toggle="navbar-sticky"
    type="button"
    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    aria-controls="navbar-sticky"
    aria-expanded="false"
  >
    <span className="sr-only">Open main menu</span>
    <svg
      className="w-6 h-6"
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

export const Header: FunctionComponent<HeaderProps> = ({ links, image }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Brand image={image} />
        <div className="flex md:order-2">
          <NavItem {...loginLink} active={router.pathname === loginLink.href} />
          <div onClick={() => setIsNavOpen((prev) => !prev)}>
            <Hamburger />
          </div>
        </div>
        <div
          className={`${
            isNavOpen ? '' : 'hidden'
          } justify-between items-center w-full md:flex md:w-auto md:order-1`}
        >
          <NavMenu
            links={links.map((link) => ({
              ...link,
              active: link.href === router.pathname,
            }))}
          />
        </div>
      </div>
    </nav>
  );
};
