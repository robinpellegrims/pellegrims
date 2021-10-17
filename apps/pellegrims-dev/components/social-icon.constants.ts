export interface SocialIcon {
  url: string;
  svgData: string;
}

export const socialConfig: Record<string, SocialIcon> = {
  linkedin: {
    url: 'https://www.linkedin.com/in/robinpellegrims',
    svgData:
      'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z',
  },
  twitter: {
    url: 'https://twitter.com/robinpel',
    svgData:
      'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
  },
  facebook: {
    url: 'https://www.facebook.com/robin.pellegrims',
    svgData: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
  },
};
