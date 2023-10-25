import React, { useRef } from 'react';
import { useIsInViewport } from '../lib/functions';
import AnimatedElement from '../components/AnimatedElement';
import Text from '../components/Text';

interface EducationProps {
  degree: string;
  major: string;
}

const Education = ({ degree, major }: EducationProps) => {
  const educationRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInViewport(educationRef, 0.5);

  return (
    <section className="Education" ref={educationRef}>
      <AnimatedElement
        visibility={isInView ? 'visible' : 'hidden'}
        timeout={1750}
        enterActive='animate__fadeIn'
        exitActive='animate__fadeOut'
        className='color--brown'
      >
        <Text size='large'>i have a</Text>
      </AnimatedElement>
      <AnimatedElement
        visibility={isInView ? 'visible' : 'hidden'}
        timeout={2250}
        enterActive='animate__fadeInLeft'
        exitActive='animate__fadeOutLeft'
        className='color--brown text--underline'
      >
        <Text size='large'>{degree}</Text>
      </AnimatedElement>
      <AnimatedElement
        visibility={isInView ? 'visible' : 'hidden'}
        timeout={1750}
        enterActive='animate__fadeIn'
        exitActive='animate__fadeOut'
        className='color--brown'
      >
        <Text size='large'>in</Text>
      </AnimatedElement>
      <AnimatedElement
        visibility={isInView ? 'visible' : 'hidden'}
        timeout={2250}
        enterActive='animate__fadeInLeft'
        exitActive='animate__fadeOutLeft'
        className='color--brown text--underline'
      >
        <Text size='large'>{major}</Text>
      </AnimatedElement>
    </section>
  )
}

export default Education;