import Logo from './logo';
import Link from 'next/link';
import Container from './container';

export default function Header() {
  return (
    <Container>
      <header>
        <div className="flex py-12 flex-col md:flex-row items-center">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {false && (
              <a className="mr-5 hover:text-gray-900" href={'/blog'}>
                Blog
              </a>
            )}
          </nav>
        </div>
      </header>
    </Container>
  );
}
