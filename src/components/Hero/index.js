import React, { useState } from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroTitle,
  HeroSubTitle,
  HeroButton,
} from './HeroElement';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
const Hero = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
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
