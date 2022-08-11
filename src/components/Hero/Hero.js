import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I am Sharjeel Ahmed
        </SectionTitle>
        <SectionText>
        I am a Software Engineer and a Machine Learning enthusiast. I am really interested in Computer Vision applications and always on the lookout for oppurtunities to hone my skills. 
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;