import Link from 'next/link';
import { Logo } from '@pellegrims/pellegrims-dev/ui/atoms';
import { FunctionComponent } from 'react';
import { Nav } from '@pellegrims/pellegrims-dev/ui/molecules';
import { Container } from '@pellegrims/pellegrims-dev/ui/templates';

interface HeaderProps {
  links: { text: string; href: string }[];
}

export const Header: FunctionComponent<HeaderProps> = ({ links }) => (
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
