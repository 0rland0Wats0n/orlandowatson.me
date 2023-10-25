import React, { useRef } from 'react';
import { useIsInViewport } from '../lib/functions';
import AnimatedElement from '../components/AnimatedElement';
import Text from '../components/Text';

interface IntroductionProps {
  text: string;
}

const Introduction = ({ text }: IntroductionProps) => {
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
        <Text quote>{text}</Text>
      </AnimatedElement>
    </section>
  )
}

export default Introduction;

