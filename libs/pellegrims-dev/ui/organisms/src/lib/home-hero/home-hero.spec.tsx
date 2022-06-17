import { render } from '@testing-library/react';
import { HomeHero } from './home-hero';

describe('HomeHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HomeHero
        contactPath="google.com"
        name="John Doe"
        imageSrc="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
