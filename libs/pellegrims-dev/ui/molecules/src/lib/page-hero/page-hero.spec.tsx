import { render } from '@testing-library/react';
import { PageHero } from './page-hero';

describe('PageHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PageHero title="Title" description="Description" />
    );
    expect(baseElement).toBeTruthy();
  });
});
