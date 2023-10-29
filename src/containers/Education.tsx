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
      <Text size='large' className='color--brown'>i have a</Text>
      <AnimatedElement
        visibility={isInView ? 'visible' : 'hidden'}
        timeout={2250}
        enterActive='animate__fadeInUp'
        exitActive='animate__fadeOut'
        className='color--brown text--underline'
      >
        <Text size='large'>{education.degree}</Text>
      </AnimatedElement>
      <Text size='large' className='color--brown'>in</Text>
      <AnimatedElement
        visibility={isInView ? 'visible' : 'hidden'}
        timeout={2250}
        enterActive='animate__fadeInUp'
        exitActive='animate__fadeOut'
        className='color--brown text--underline'
      >
        <Text size='large'>{education.major}</Text>
      </AnimatedElement>
    </section>
  )
}

export default Education;