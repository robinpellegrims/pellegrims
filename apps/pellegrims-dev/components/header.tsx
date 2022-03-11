import Logo from './logo';
import Link from 'next/link';
import Container from './container';
import { FunctionComponent } from 'react';

const links: { text: string; href: string }[] = [
  { text: 'Snippets', href: '/snippets' },
  { text: 'Bookmarks', href: '/bookmarks' },
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
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="mr-5 hover:text-gray-900">{link.text}</a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  </Container>
);

export default Header;
