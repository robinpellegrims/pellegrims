import Logo from './logo';
import Link from 'next/link';
import Container from './container';
import { FunctionComponent } from 'react';

const links: { text: string; href: string }[] = [
  { text: 'Snippets', href: '/snippets' },
  { text: 'Bookmarks', href: '/bookmarks' },
  { text: 'Contact', href: '/contact' },
];

const Header: FunctionComponent = () => (
  <Container>
    <header>
      <div className="flex py-6 flex-col md:flex-row items-center gap-3">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-dark-600 dark:text-dark-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="mr-5 hover:text-dark-900 dark:hover:text-white">
                {link.text}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  </Container>
);

export default Header;
