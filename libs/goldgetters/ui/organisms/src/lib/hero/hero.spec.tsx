import { render } from '@testing-library/react';
import { Hero } from './hero';

describe('Hero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Hero title="This is the title" subtitle="This is the subtitle" />
    );
    expect(baseElement).toBeTruthy();
  });
});
