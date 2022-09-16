import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { CounterDevAnalytics } from '@pellegrims/shared/ui/atoms';
import { AppType } from 'next/dist/shared/lib/utils';

const CotersusApp: AppType = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Cotersus - IT Consulting</title>
    </Head>
    <CounterDevAnalytics user="RobinPel" />
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0"></header>
      <main className="grow overflow-y-auto">
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </div>
  </>
);

export default CotersusApp;
