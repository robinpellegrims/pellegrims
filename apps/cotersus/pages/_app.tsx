import 'tailwindcss/tailwind.css';
import { CounterDevAnalytics } from '@pellegrims/shared/ui/atoms';
import { AppType } from 'next/dist/shared/lib/utils';
import { DefaultSeo } from 'next-seo';
import { defaultSeoConfig } from '../constants';

const CotersusApp: AppType = ({ Component, pageProps }) => (
  <>
    <CounterDevAnalytics user="RobinPel" />
    <DefaultSeo {...defaultSeoConfig} />
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
