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
export const githubSvgIcon =
  'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12';
export const githubUrl = 'https://github.com/robinpellegrims';
export const linkedInUrl = 'https://www.linkedin.com/in/robinpellegrims';
export const twitterSvgIcon =
  'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z';
export const twitterUrl = 'https://twitter.com/robinpel';
export const twitterUserName = 'robinpel';
export const twitterHandle = `@${twitterUserName}`;
export const canonicalDomain = 'www.pellegrims.dev';
export const canonicalBaseUrl = `https://${canonicalDomain}`;
const firstName = 'Robin';
const lastName = 'Pellegrims';
export const name = `${firstName} ${lastName}`;
export const avataaarUrl =
  'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Red&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light';
export const defaultSeoConfig: NextSeoProps = {
  defaultTitle: name,
  description:
    'Professional software developer, front-end technical lead and freelance web developer.',
  openGraph: {
    title: name,
    type: 'website',
    url: canonicalBaseUrl,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    site_name: name,
    profile: {
      firstName,
      lastName,
      username: facebookProfileUrl,
    },
    images: [
      {
        url: `${canonicalBaseUrl}/avataaar.png`,
        height: 560,
        width: 548,
      },
    ],
  },
  twitter: {
    handle: twitterHandle,
    site: twitterHandle,
    cardType: 'summary_large_image',
  },
};
export const oGImageWidth = 1200;
export const oGImageHeight = 630;
