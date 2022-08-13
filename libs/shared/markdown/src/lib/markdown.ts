import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import {
  FrontMatter,
  MarkdownDocument,
  MarkdownDocumentWithoutSlug,
} from './markdown.model';
import readingTime from 'reading-time';

export const getMarkdownDocumentBySlug = (
  slug: string,
  postsPath: string
): MarkdownDocument => {
  const postFilePath = join(postsPath, `${slug}.md`);
  return { ...getMarkdownDocument(postFilePath), slug };
};

export const getMarkdownDocuments = (
  directoryPath: string
): MarkdownDocument[] =>
  getSlugsForMarkdownFiles(directoryPath).map((slug) => ({
    ...getMarkdownDocumentBySlug(slug, directoryPath),
    slug,
  }));

const getMarkdownDocument = (filePath: string): MarkdownDocumentWithoutSlug => {
  const fileContents = fs.readFileSync(filePath);
  const { data, content } = matter(fileContents);
  return {
    frontMatter: data as FrontMatter,
    content,
    readingTimeMins: Math.ceil(readingTime(content).minutes),
  };
};

export const getSlugsForMarkdownFiles = (directoryPath: string): string[] =>
  fs
    .readdirSync(directoryPath)
    .filter((path) => path.endsWith('.md'))
    .map((path) => path.replace(/\.md?$/, ''));
