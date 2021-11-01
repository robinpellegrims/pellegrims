export interface BlogArticleDateProps {
  date: Date;
}

export function BlogArticleDate({ date }: BlogArticleDateProps) {
  return (
    <time dateTime={new Date(date).toISOString()}>
      {new Date(date).toLocaleDateString('en-BE')}
    </time>
  );
}

export default BlogArticleDate;
