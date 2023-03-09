import React, {useState} from 'react';
import Video from '../../videos/Turing_machines_02-1.gif';
import {Button} from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight, HeroBtnLink} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };


  return (
  
        <HeroContainer id='home' >
           <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
           </HeroBg>
           <HeroContent>
            <HeroH1>Turing Machine Visualisation</HeroH1>
            <HeroP>
              Design the Turing Machine based on the problem and test it with the required Strings
            </HeroP>
            <HeroBtnWrapper>
              <Button to='introduction' 
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary = 'true'
              dark = 'true'
              smooth={true} 
              duration={500} 
              spy={true}
              exact='true'  
              offset={-80}
              > <HeroBtnLink to='/signup'>
                Sign Up{hover ? <ArrowForward />: <ArrowRight/>}</HeroBtnLink>
              </Button>
            </HeroBtnWrapper>
           </HeroContent>
        </HeroContainer>
    
  );
};

export default HeroSection;