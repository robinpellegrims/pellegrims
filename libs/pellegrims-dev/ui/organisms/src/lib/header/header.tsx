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
      <div className="flex flex-col items-center gap-3 py-6 md:flex-row">
        <Link href="/">
          <Logo />
        </Link>
        <Nav links={links} />
      </div>
    </header>
  </Container>
);
