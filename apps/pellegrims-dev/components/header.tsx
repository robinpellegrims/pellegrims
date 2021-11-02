import Logo from './logo';
import Link from 'next/link';
import Container from './container';

const links: { text: string; href: string }[] = [
  // { text: 'Blog', href: '/blog' },
  { text: 'Snippets', href: '/snippets' },
];

export default function Header() {
  return (
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
}
