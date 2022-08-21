import { Head, Html, Main, NextScript } from 'next/document';

export const MyDocument = () => (
  <Html>
    <Head />
    <body className="dark:bg-dark-800 text-dark-900 dark:text-dark-100 bg-white">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
