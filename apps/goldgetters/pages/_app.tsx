import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { CounterDevAnalytics } from '@pellegrims/shared/ui/atoms';
import { Header } from '@pellegrims/goldgetters/ui/organisms';
import { PageTemplate } from '@pellegrims/goldgetters/ui/templates';
import logo from '../public/logo.png';
import { AppType } from 'next/dist/shared/lib/utils';
import { withGoldgettersTRPC } from '@pellegrims/goldgetters/data-access';

const headerNavLinks: { text: string; href: string }[] = [
  { text: 'Nieuws', href: '/news' },
  { text: 'Team', href: '/team' },
  { text: 'Wedstrijden', href: '/matches' },
  { text: 'Media', href: '/media' },
  { text: 'Contact', href: '/contact' },
];

const GoldgettersApp: AppType = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>ZVC Goldgetters</title>
    </Head>
    <CounterDevAnalytics user="RobinPel" />
    <PageTemplate
      header={<Header links={headerNavLinks} image={logo} />}
      content={<Component {...pageProps} />}
      footer={<>Footer</>}
    />
  </>
);

export default withGoldgettersTRPC(GoldgettersApp);
