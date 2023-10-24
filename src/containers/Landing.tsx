import React, { useRef } from 'react';
import { useIsInViewport } from '../lib/functions';

import Text from '../components/Text';
import AnimatedElement from '../components/AnimatedElement';
import AnimatedScrollIcon from '../components/AnimatedScrollIcon';

interface LandingProps {
  name: string;
}

const Landing = ({ name }: LandingProps) => {
  const landingRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInViewport(landingRef, 0.5);
  
  return (
    <section className="Landing" ref={landingRef}>
      <AnimatedElement
        timeout={1250}
        visibility={isInView ? 'visible' : 'hidden'}
        enterActive='animate__fadeInUp'
        exitActive='animate__fadeOutUp'
        className="name"
      >
        <Text size='xlarge'>i am {name}</Text>
      </AnimatedElement>
      <AnimatedElement
        timeout={1250}
        visibility={isInView ? 'visible' : 'hidden'}
        enterActive='animate__fadeInUp'
        exitActive='animate__fadeOutUp'
        className='intro color--brown'
      >
        <Text>this is my live resumè</Text>
      </AnimatedElement>
      <AnimatedElement
        timeout={1250}
        visibility={isInView ? 'visible' : 'hidden'}
        enterActive='animate__fadeIn'
        exitActive='animate__fadeOut'
      >
        <AnimatedScrollIcon  />
      </AnimatedElement>
    </section>
  );
}

export default Landing;