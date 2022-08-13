import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { CounterDevAnalytics } from '@pellegrims/shared/ui/atoms';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ZVC Goldgetters</title>
      </Head>
      <CounterDevAnalytics user="RobinPel" />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
