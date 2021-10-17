import Logo from './logo';
import Link from 'next/link';

export function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Logo></Logo>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/*<a className="mr-5 hover:text-gray-900" href="blog">*/}
          {/*  Blog*/}
          {/*</a>*/}
        </nav>
      </div>
    </header>
  );
}

export default Header;
