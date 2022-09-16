import { Head, Html, Main, NextScript } from 'next/document';
import { FavIcon } from '@pellegrims/shared/ui/atoms';

export const MyDocument = () => (
  <Html lang="nl">
    <Head>
      <FavIcon pathPrefix="/favicon" />
    </Head>
    <body className="dark:bg-dark-800 text-dark-900 dark:text-dark-100 bg-white">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
