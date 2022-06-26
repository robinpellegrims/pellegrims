import { render } from '@testing-library/react';
import { BlogArticle } from './blog-article';

describe('BlogArticle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BlogArticle
        markDown={{
          readingTimeMins: 5,
          slug: '',
          frontMatter: {
            title: '',
            date: new Date(),
            tags: [],
            description: '',
          },
          content: '',
        }}
        twitterUserName={''}
        urlToShare={''}
        twitterSvgIcon={''}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
