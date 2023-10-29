import React, { useContext, useRef } from 'react';
import { useIsInViewport } from '../lib/functions';
import AnimatedElement from '../components/AnimatedElement';
import Text from '../components/Text';
import ResumeContext from '../lib/ResumeContext';

const Introduction = () => {
  const { introduction } = useContext(ResumeContext);
  const introductionRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInViewport(introductionRef);

  return (
    <section className="Introduction" ref={introductionRef}>
      <AnimatedElement
        timeout={1250}
        visibility={isInView ? 'visible' : 'hidden'}
        enterActive='animate__fadeInLeft'
        exitActive='animate__fadeOutLeft'
      >
        <Text quote>{introduction}</Text>
      </AnimatedElement>
    </section>
  )
}

export default Introduction;

