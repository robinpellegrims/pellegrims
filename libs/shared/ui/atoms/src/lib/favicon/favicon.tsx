import { FunctionComponent } from 'react';

export const FavIcon: FunctionComponent<{ pathPrefix?: string }> = ({
  pathPrefix,
}) => (
  <>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${pathPrefix}/apple-touch-icon.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${pathPrefix}/favicon-32x32.png`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${pathPrefix}/favicon-16x16.png`}
    />
    <link rel="manifest" href={`${pathPrefix}/site.webmanifest`} />
    <link rel="shortcut icon" href={`${pathPrefix}/favicon.ico`} />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta
      name="msapplication-config"
      content={`${pathPrefix}/browserconfig.xml`}
    />
    <meta name="theme-color" content="#ffffff" />
  </>
);
