import 'tailwindcss/tailwind.css';
import { Footer, Header } from '@pellegrims/pellegrims-dev/ui/organisms';
import {
  defaultSeoConfig,
  facebookProfileUrl,
  facebookSvgIcon,
  githubSvgIcon,
  githubUrl,
  linkedInSvgIcon,
  linkedInUrl,
  name,
  productionUrl,
  twitterSvgIcon,
  twitterUrl,
} from '../constants';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { CounterDevAnalytics } from '../components/counter-dev-analytics';

const headerNavLinks: { text: string; href: string }[] = [
  { text: 'Blog', href: '/blog' },
  { text: 'Snippets', href: '/snippets' },
  { text: 'Bookmarks', href: '/bookmarks' },
  { text: 'Contact', href: '/contact' },
];

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <DefaultSeo
      {...defaultSeoConfig}
      canonical={productionUrl + useRouter().pathname}
    />
    <CounterDevAnalytics user="RobinPel" />
    <Header links={headerNavLinks} />
    <main className="py-12">
      <Component {...pageProps} />
    </main>
    <Footer
      name={name}
      facebookSvgIcon={facebookSvgIcon}
      facebookUrl={facebookProfileUrl}
      linkedInSvgIcon={linkedInSvgIcon}
      linkedInUrl={linkedInUrl}
      twitterSvgIcon={twitterSvgIcon}
      twitterUrl={twitterUrl}
      githubSvgIcon={githubSvgIcon}
      githubUrl={githubUrl}
    />
  </>
);

export default App;
