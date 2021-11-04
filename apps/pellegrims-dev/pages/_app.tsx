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
  twitterSvgIcon,
  twitterUrl,
} from '../constants';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSeoConfig} />
      <Header />
      <main>
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
}
