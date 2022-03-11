import 'tailwindcss/tailwind.css';
import Header from '../components/header';
import Footer from '../components/footer';
import {
  defaultSeoConfig,
  facebookProfileUrl,
  facebookSvgIcon,
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
import { FunctionComponent } from 'react';
import Analytics from '../components/analytics';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
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
    />
  </>
);

export default App;
