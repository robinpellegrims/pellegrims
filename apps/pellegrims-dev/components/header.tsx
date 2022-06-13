import Logo from './logo';
import Link from 'next/link';
import Container from './container';
import { FunctionComponent } from 'react';
import { Nav } from './nav';

interface HeaderProps {
  links: { text: string; href: string }[];
}

const Header: FunctionComponent<HeaderProps> = ({ links }) => (
  <Container>
    <header>
      <div className="flex py-6 flex-col md:flex-row items-center gap-3">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <Nav links={links} />
      </div>
    </header>
  </Container>
);

export default Header;
