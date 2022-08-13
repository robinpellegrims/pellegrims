export interface FrontMatter {
  title?: string;
  description?: string;
  date?: Date;
  tags?: string[];
  coverImage?: string;
}

export interface MarkdownDocumentWithoutSlug {
  frontMatter: FrontMatter;
  content: string;
  readingTimeMins: number;
}

export interface MarkdownDocument extends MarkdownDocumentWithoutSlug {
  slug: string;
}
