import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { CounterDevAnalytics } from '@pellegrims/shared/ui/atoms';
import { Header } from '@pellegrims/goldgetters/ui/organisms';
import { PageTemplate } from '@pellegrims/goldgetters/ui/templates';
import logo from '../public/logo.png';
import { AppType } from 'next/dist/shared/lib/utils';
import { withGoldgettersTRPC } from '@pellegrims/goldgetters/data-access';
import { SessionProvider, useSession } from 'next-auth/react';
import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

const headerNavLinks: { text: string; href: string }[] = [
  { text: 'Nieuws', href: '/news' },
  { text: 'Team', href: '/team' },
  { text: 'Wedstrijden', href: '/matches' },
  { text: 'Media', href: '/media' },
  { text: 'Contact', href: '/contact' },
];

const GoldgettersHeader: FunctionComponent = () => {
  const session = useSession();
  const router = useRouter();
  return (
    <Header
      links={headerNavLinks}
      image={logo}
      currentPathName={router.pathname}
      user={session.data?.user}
    />
  );
};

const GoldgettersApp: AppType = ({ Component, pageProps }) => (
  <SessionProvider session={pageProps.session}>
    <Head>
      <title>ZVC Goldgetters</title>
    </Head>
    <CounterDevAnalytics user="RobinPel" />
    <PageTemplate
      header={<GoldgettersHeader />}
      content={<Component {...pageProps} />}
      footer={<>Footer</>}
    />
  </SessionProvider>
);

export default withGoldgettersTRPC(GoldgettersApp);
