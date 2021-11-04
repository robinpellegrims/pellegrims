import { join } from 'path';
import { NextSeoProps } from 'next-seo';

export const POSTS_PATH = join(
  process.cwd(),
  'apps/pellegrims-dev/content/blog'
);
export const SNIPPETS_PATH = join(
  process.cwd(),
  'apps/pellegrims-dev/content/snippets'
);
export const facebookSvgIcon =
  'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z';
export const facebookUserName = 'robin.pellegrims';
export const facebookProfileUrl = `https://www.facebook.com/${facebookUserName}`;
export const linkedInSvgIcon =
  'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z';
export const linkedInUrl = 'https://www.linkedin.com/in/robinpellegrims';
export const twitterSvgIcon =
  'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z';
export const twitterUrl = 'https://twitter.com/robinpel';
export const twitterHandle = '@robinpel';
export const productionUrl = 'https://www.pellegrims.dev';
const firstName = 'Robin';
const lastName = 'Pellegrims';
export const name = `${firstName} ${lastName}`;
export const avataaarUrl =
  'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Red&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light';
export const defaultSeoConfig: NextSeoProps = {
  defaultTitle: name,
  titleTemplate: `${name} | %s`,
  description:
    'Professional software developer, front-end technical lead and freelance web developer.',
  openGraph: {
    title: name,
    type: 'website',
    locale: 'en_BE',
    url: productionUrl,
    site_name: name,
    profile: {
      firstName: firstName,
      lastName: lastName,
      username: facebookProfileUrl,
    },
    images: [{ url: `${productionUrl}/avataaar.png`, height: 560, width: 548 }],
  },
  twitter: {
    handle: twitterHandle,
    site: twitterHandle,
    cardType: 'summary_large_image',
  },
};
