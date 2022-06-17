import { render } from '@testing-library/react';
import { BlogArticleSummary } from './blog-article-summary';

describe('BlogArticleSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BlogArticleSummary
        path=""
        post={{
          slug: '',
          content: '',
          frontMatter: {
            title: '',
            date: new Date(),
            tags: [],
            description: '',
          },
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
