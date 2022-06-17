import { render } from '@testing-library/react';
import { BlogArticle } from './blog-article';

describe('BlogArticle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BlogArticle
        markDown={{
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
        canonicalUrl={''}
        twitterSvgIcon={''}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
