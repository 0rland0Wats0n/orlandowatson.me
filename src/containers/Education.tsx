import React, { useContext, useRef } from 'react';
import { useIsInViewport } from '../lib/functions';
import AnimatedElement from '../components/AnimatedElement';
import Text from '../components/Text';
import ResumeContext from '../lib/ResumeContext';

const Education = () => {
  const { education } = useContext(ResumeContext);
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
        <Text size='large'>{education.degree}</Text>
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
        <Text size='large'>{education.major}</Text>
      </AnimatedElement>
    </section>
  )
}

export default Education;