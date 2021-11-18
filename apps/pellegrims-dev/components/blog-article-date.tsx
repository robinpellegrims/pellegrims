import { FunctionComponent } from 'react';

interface BlogArticleDateProps {
  date: Date;
}

const BlogArticleDate: FunctionComponent<BlogArticleDateProps> = ({ date }) => (
  <time dateTime={new Date(date).toISOString()}>
    {new Date(date).toLocaleDateString('en-BE')}
  </time>
);

export default BlogArticleDate;
