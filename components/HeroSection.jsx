import React from 'react';
import {
  Hero,
  HeroInner,
  HeroTitle,
  HeroBold,
  HeroTagline,
  HeroButton,
} from './styled/Hero';

const HeroSection = () => {
  return (
    <Hero>
      <HeroInner>
        <HeroTitle>
          Good Food is A <HeroBold>Good Mood.</HeroBold>
        </HeroTitle>
        <HeroTagline>
          Food is the ingredient that bind us together! And nothing brings
          people together like a Good Food!
        </HeroTagline>
        <HeroButton href="#main-content">Let&apos;s Nongkrong!</HeroButton>
      </HeroInner>
    </Hero>
  );
};

export default HeroSection;
