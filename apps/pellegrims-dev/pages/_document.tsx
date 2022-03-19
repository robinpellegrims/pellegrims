import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Favicon } from '../components/favicon';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html className="bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100">
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Caveat&display=swap"
            rel="stylesheet"
          />
          <Favicon />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
