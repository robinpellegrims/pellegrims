export interface FrontMatter {
  title: string;
  description: string;
  date: Date;
  tags: string[];
}

export interface MarkdownDocumentWithoutSlug {
  frontMatter: FrontMatter;
  content: string;
}

export interface MarkdownDocument extends MarkdownDocumentWithoutSlug {
  slug: string;
}
