export interface FrontMatter {
  title: string;
  excerpt: string;
  date: Date;
}

export interface MarkdownDocument {
  frontMatter: FrontMatter;
  content: string;
}

export interface MarkdownRenderingResult {
  frontMatter: FrontMatter;
  html: string;
}
