import { NextSeoProps } from 'next-seo';
import { getCurrentOrigin } from './utils/url';

export const facebookUserName = 'robin.pellegrims';
export const facebookProfileUrl = `https://www.facebook.com/${facebookUserName}`;
export const githubUrl = 'https://github.com/robinpellegrims';
export const linkedInUrl = 'https://www.linkedin.com/in/robinpellegrims';
export const twitterUrl = 'https://twitter.com/robinpel';
export const twitterUserName = 'robinpel';
export const twitterHandle = `@${twitterUserName}`;
export const canonicalDomain = 'www.pellegrims.dev';
export const canonicalOrigin = `https://${canonicalDomain}`;
const firstName = 'Robin';
const lastName = 'Pellegrims';
export const name = `${firstName} ${lastName}`;
export const avataaarUrl =
  'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Red&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light';
export const description =
  'Professional software developer, front-end technical lead and freelance web developer.';
export const avatarPngUrl = `${getCurrentOrigin()}/avataaar.png`;
export const defaultSeoConfig: NextSeoProps = {
  defaultTitle: name,
  description,
  openGraph: {
    title: name,
    type: 'website',
    url: canonicalOrigin,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    site_name: name,
    profile: { firstName, lastName, username: facebookProfileUrl },
    images: [{ url: avatarPngUrl, height: 560, width: 548 }],
  },
  twitter: {
    handle: twitterHandle,
    site: twitterHandle,
    cardType: 'summary_large_image',
  },
};
export const oGImageWidth = 1200;
export const oGImageHeight = 630;
export const rssFolder = 'rss';
export const feedRss2Filename = `feed.xml`;
export const feedJsonFilename = `feed.json`;
export const feedAtomFilename = `atom.xml`;
export const feedAuthor = { name, link: twitterUrl };
