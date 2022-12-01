import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroTitle,
  HeroSubTitle,
  HeroButton,
} from './HeroElement';
import Navbar from '../Navbar';
const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroTitle>FRESH PIZZA</HeroTitle>
          <HeroSubTitle>Are u ready in order? Hurry up</HeroSubTitle>
          <HeroButton>Order Now</HeroButton>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
