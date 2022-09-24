import { DefaultSeoProps } from 'next-seo/lib/types';

const origin = 'https://www.cotersus.be';

export const defaultSeoConfig: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_BE',
    url: origin,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    site_name: 'Cotersus',
    images: [{ url: `${origin}/logo.png`, height: 508, width: 466 }],
  },
  description:
    'Cotersus is an IT Consulting company from Belgium specialized in software development.',
  defaultTitle: 'Cotersus IT Consulting',
  twitter: {
    handle: '@robinpel',
    site: '@cotersusIT',
    cardType: 'summary_large_image',
  },
};
