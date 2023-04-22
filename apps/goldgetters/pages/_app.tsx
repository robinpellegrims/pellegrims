import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { CounterDevAnalytics } from '@pellegrims/shared/ui/atoms';
import { Footer, Header } from '@pellegrims/goldgetters/ui/organisms';
import { AppTemplate } from '@pellegrims/goldgetters/ui/templates';
import logo from '../public/logo.png';
import { AppType } from 'next/dist/shared/lib/utils';
import { trpc } from '@pellegrims/goldgetters/data-access';
import { SessionProvider, useSession } from 'next-auth/react';
import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { facebookUrl, githubUrl, twitterUrl } from '../constants';
import { Session } from 'next-auth';

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
  const userLoading = session.status === 'loading';
  return (
    <Header
      links={headerNavLinks}
      image={logo}
      currentPathName={router.pathname}
      user={session.data?.user}
      userLoading={userLoading}
    />
  );
};

const GoldgettersApp: AppType<{ session: Session | null | undefined }> = ({
  Component,
  pageProps,
}) => (
  <SessionProvider session={pageProps.session}>
    <Head>
      <title>ZVC Goldgetters</title>
    </Head>
    <CounterDevAnalytics user="RobinPel" />
    <AppTemplate
      header={<GoldgettersHeader />}
      content={<Component {...pageProps} />}
      footer={
        <Footer
          facebookUrl={facebookUrl}
          githubUrl={githubUrl}
          twitterUrl={twitterUrl}
        />
      }
    />
  </SessionProvider>
);

export default trpc.withTRPC(GoldgettersApp);
