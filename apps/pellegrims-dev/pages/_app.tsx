import 'tailwindcss/tailwind.css';
import './styles.css';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import {
  facebookSvgIcon,
  facebookUrl,
  linkedInSvgIcon,
  linkedInUrl,
  name,
  twitterHandle,
  twitterSvgIcon,
  twitterUrl,
} from '../constants';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pellegrims</title>
      </Head>
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer
        name={name}
        twitterHandle={twitterHandle}
        facebookSvgIcon={facebookSvgIcon}
        facebookUrl={facebookUrl}
        linkedInSvgIcon={linkedInSvgIcon}
        linkedInUrl={linkedInUrl}
        twitterSvgIcon={twitterSvgIcon}
        twitterUrl={twitterUrl}
      />
    </>
  );
}
