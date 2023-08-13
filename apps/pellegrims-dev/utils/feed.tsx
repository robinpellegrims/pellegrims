import { Feed, FeedOptions, Item } from 'feed';
import {
  getMarkdownDocuments,
  MarkdownDocument,
  markdownToHtml,
} from '@pellegrims/shared/markdown';
import {
  avatarPngUrl,
  description,
  feedAtomFilename,
  feedAuthor,
  feedJsonFilename,
  feedRss2Filename,
  name,
  rssFolder,
} from '../constants';
import { buildBlogArticleUrlToShare, getCurrentOrigin } from './url';
import * as fs from 'fs';
import { POSTS_PATH } from './paths';

export const generateRssFeed = async () => {
  const posts = getMarkdownDocuments(POSTS_PATH);
  const siteURL = getCurrentOrigin();
  const feedOptions = buildFeedOptions(siteURL);
  const feed = new Feed(feedOptions);
  const feedItems = await Promise.all(
    posts.map((post) => mapPostOnFeedItem(post, siteURL))
  );
  feedItems.forEach((item) => feed.addItem(item));
  const publicRssFolderPath = `./public/${rssFolder}`;
  fs.mkdirSync(publicRssFolderPath, { recursive: true });
  fs.writeFileSync(`${publicRssFolderPath}/${feedRss2Filename}`, feed.rss2());
  fs.writeFileSync(`${publicRssFolderPath}/${feedAtomFilename}`, feed.atom1());
  fs.writeFileSync(`${publicRssFolderPath}/${feedJsonFilename}`, feed.json1());
};

const buildFeedOptions = (siteURL: string): FeedOptions => {
  const date = new Date();
  return {
    title: name,
    description,
    id: `${siteURL}/`,
    link: siteURL,
    image: `${siteURL}${avatarPngUrl}`,
    favicon: `${siteURL}/favicon-32x32.png`,
    copyright: `All rights reserved ${date.getFullYear()}, ${name}`,
    updated: date,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${siteURL}/${rssFolder}/${feedRss2Filename}`,
      json: `${siteURL}/${rssFolder}/${feedJsonFilename}`,
      atom: `${siteURL}/${rssFolder}/${feedAtomFilename}`,
    },
    author: feedAuthor,
  };
};

const mapPostOnFeedItem = (post: MarkdownDocument, siteUrl: string): Item => {
  const url = buildBlogArticleUrlToShare(post.slug);
  return {
    title: post.frontMatter.title ?? '',
    id: url,
    link: url,
    description: post.frontMatter.description,
    content: markdownToHtml(post.content, siteUrl),
    author: [feedAuthor],
    contributor: [feedAuthor],
    date: new Date(post.frontMatter.date ?? ''),
    image: `${siteUrl}${post.frontMatter.coverImage}`,
  };
};
