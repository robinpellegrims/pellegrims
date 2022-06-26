import { render } from '@testing-library/react';
import { Card } from './card';

describe('Bookmark', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Card
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
