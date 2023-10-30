import React, { useContext, useRef } from 'react';
import { useIsInViewport } from '../lib/functions';

import Text from '../components/Text';
import AnimatedElement from '../components/AnimatedElement';
import AnimatedScrollIcon from '../components/AnimatedScrollIcon';
import ResumeContext from '../lib/ResumeContext';

const Landing = () => {
  const { name } = useContext(ResumeContext);
  const landingRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInViewport(landingRef, 0.5);
  
  return (
    <section className="Landing" ref={landingRef}>
      <AnimatedElement
        timeout={1250}
        visibility={isInView ? 'visible' : 'hidden'}
        enterActive='animate__fadeInUp'
        exitActive='animate__fadeOutUp'
        className="Name"
      >
        <Text size='xlarge'>i am {name}</Text>
      </AnimatedElement>
      <AnimatedElement
        timeout={1250}
        visibility={isInView ? 'visible' : 'hidden'}
        enterActive='animate__fadeInUp'
        exitActive='animate__fadeOutUp'
        className='intro color--brown ff--paragraph'
      >
        <Text size='above-average'>this is my live resumè</Text>
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