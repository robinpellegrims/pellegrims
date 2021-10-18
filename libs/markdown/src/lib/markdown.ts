import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import {
  FrontMatter,
  MarkdownDocumentWithoutSlug,
  MarkdownDocument,
} from './markdown.model';
import { markdownToHtml } from './markdown-to-html';

export const getMarkdownDocumentBySlug = (
  slug: string,
  postsPath: string
): MarkdownDocument => {
  const postFilePath = join(postsPath, `${slug}.mdx`);
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
  };
};

export const getSlugsForMarkdownFiles = (directoryPath: string) =>
  fs.readdirSync(directoryPath).map((path) => path.replace(/\.mdx?$/, ''));

export const renderMarkdown = async (
  markdownContent: string
): Promise<string> => {
  return await markdownToHtml(markdownContent ?? '');
};
