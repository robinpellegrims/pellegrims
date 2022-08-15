import { DateString } from '@pellegrims/shared/markdown';

const shareTag = 'share';

const url = [
  'https://api.raindrop.io/rest/v1/raindrops/0',
  '?perpage=50',
  '&sort=-created',
  `&search=%23${shareTag}`,
].join('');

export interface RaindropBookmark {
  title: string;
  link: string;
  cover: string;
  tags: string[];
  domain: string;
  excerpt: string;
  created: `${DateString}${string}`;
  _id: string;
}

export async function fetchRaindropBookmarks(): Promise<RaindropBookmark[]> {
  const res = await fetch(url, {
    method: 'get',
    headers: new Headers({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
    }),
  });
  const data: { items?: RaindropBookmark[] } = await res.json();
  return (
    data.items?.map((item) => ({
      ...item,
      tags: item.tags.filter((tag) => tag !== shareTag),
    })) ?? []
  );
}
