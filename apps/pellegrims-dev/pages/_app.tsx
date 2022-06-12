import 'tailwindcss/tailwind.css';
import Header from '../components/header';
import Footer from '../components/footer';
import {
  defaultSeoConfig,
  facebookProfileUrl,
  facebookSvgIcon,
  githubUrl,
  githubSvgIcon,
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
import Analytics from '../components/analytics';

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <DefaultSeo
      {...defaultSeoConfig}
      canonical={productionUrl + useRouter().pathname}
    />
    <Analytics />
    <Header />
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
