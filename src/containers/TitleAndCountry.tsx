import React, { useContext, useRef } from 'react';
import { useIsInViewport } from '../lib/functions';
import AnimatedElement from '../components/AnimatedElement';
import Text from '../components/Text';
import ResumeContext from '../lib/ResumeContext';

const TitleAndCountry = () => {
  const { location, role } = useContext(ResumeContext);
  const titleCountryRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInViewport(titleCountryRef, 0.5);

  return (
    <section className="TitleAndCountry" ref={titleCountryRef}>
      <Text size='large' className='color--brown'>i am a</Text>
      <AnimatedElement
        visibility={isInView ? 'visible' : 'hidden'}
        timeout={2250}
        enterActive='animate__fadeInUp'
        exitActive='animate__fadeOut'
        className='color--brown text--underline'
      >
        <Text size='large'>{role}</Text>
      </AnimatedElement>
      <Text size='large' className='color--brown'>from</Text>
      <AnimatedElement
        visibility={isInView ? 'visible' : 'hidden'}
        timeout={2250}
        enterActive='animate__fadeInUp'
        exitActive='animate__fadeOut'
        className='color--brown text--underline'
      >
        <Text size='large'>{location}</Text>
      </AnimatedElement>
    </section>
  )
}

export default TitleAndCountry;