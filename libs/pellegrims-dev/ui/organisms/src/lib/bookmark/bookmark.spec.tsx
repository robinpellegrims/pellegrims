import { render } from '@testing-library/react';
import { Bookmark } from './bookmark';

describe('Bookmark', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Bookmark
        {...{
          cover: '',
          created: new Date(),
          excerpt: '',
          link: '',
          tags: [],
          title: '',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
