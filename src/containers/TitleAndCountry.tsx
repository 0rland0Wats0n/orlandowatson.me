import React, { useRef } from 'react';
import { useIsInViewport } from '../lib/functions';
import AnimatedElement from '../components/AnimatedElement';
import Text from '../components/Text';

interface TitleCountryProps {
  jobTitle: string;
  country: string;
}

const TitleAndCountry = ({ jobTitle, country }: TitleCountryProps) => {
  const titleCountryRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInViewport(titleCountryRef, 0.5);

  return (
    <section className="TitleAndCountry" ref={titleCountryRef}>
      <AnimatedElement
        visibility={isInView ? 'visible' : 'hidden'}
        timeout={1750}
        enterActive='animate__fadeIn'
        exitActive='animate__fadeOut'
        className='color--brown'
      >
        <Text size='large'>i am a</Text>
      </AnimatedElement>
      <AnimatedElement
        visibility={isInView ? 'visible' : 'hidden'}
        timeout={2250}
        enterActive='animate__fadeInLeft'
        exitActive='animate__fadeOutLeft'
        className='color--brown text--underline'
      >
        <Text size='large'>{jobTitle}</Text>
      </AnimatedElement>
      <AnimatedElement
        visibility={isInView ? 'visible' : 'hidden'}
        timeout={1750}
        enterActive='animate__fadeIn'
        exitActive='animate__fadeOut'
        className='color--brown'
      >
        <Text size='large'>from</Text>
      </AnimatedElement>
      <AnimatedElement
        visibility={isInView ? 'visible' : 'hidden'}
        timeout={2250}
        enterActive='animate__fadeInLeft'
        exitActive='animate__fadeOutLeft'
        className='color--brown text--underline'
      >
        <Text size='large'>{country}</Text>
      </AnimatedElement>
    </section>
  )
}

export default TitleAndCountry;