import { Head, Html, Main, NextScript } from 'next/document';
import { FavIcon } from '@pellegrims/shared/ui/atoms';

export const MyDocument = () => (
  <Html lang="nl">
    <Head>
      <FavIcon pathPrefix="/favicon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Montserrat&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body className="bg-zinc-800 text-zinc-100">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
