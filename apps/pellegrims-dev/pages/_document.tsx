import { Head, Html, Main, NextScript } from 'next/document';
import { feedRss2Filename, name, rssFolder } from '../constants';
import { FavIcon } from '@pellegrims/shared/ui/atoms';

export const MyDocument = () => (
  <Html className="dark:bg-dark-800 text-dark-900 dark:text-dark-100 bg-white">
    <Head>
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Caveat&display=swap"
        rel="stylesheet"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title={name}
        href={`/${rssFolder}/${feedRss2Filename}`}
      />
      <FavIcon pathPrefix="/favicon" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
