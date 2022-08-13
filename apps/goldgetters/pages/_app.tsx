import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { CounterDevAnalytics } from '@pellegrims/shared/ui/atoms';
import { PageTemplate } from '@pellegrims/goldgetters/ui/templates';

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>ZVC Goldgetters</title>
    </Head>
    <CounterDevAnalytics user="RobinPel" />
    <PageTemplate
      header={<></>}
      content={<Component {...pageProps} />}
      footer={<></>}
    />
  </>
);

export default CustomApp;
