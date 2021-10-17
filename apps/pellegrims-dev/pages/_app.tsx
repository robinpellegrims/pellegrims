import { AppProps } from 'next/app';
import './styles.css';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pellegrims</title>
      </Head>
      <div className="app">
        <Header></Header>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}
