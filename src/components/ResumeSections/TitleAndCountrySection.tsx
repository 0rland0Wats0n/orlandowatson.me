import React, { useRef } from 'react';

import { Country } from '../../lib/models';
import { useIsInViewport } from '../../lib/functions';
import AnimatedElement from '../AnimatedElement';

interface TitleAndCountrySectionProps {
  title: string;
  country: Country
}

const TitleAndCountrySection = (props: TitleAndCountrySectionProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIsInViewport(nodeRef, 0.75);

  return (
    <section 
      className="TitleAndCountry"
      ref={nodeRef}
    >
      <AnimatedElement
        visibility={isInViewport ? 'visible' : 'hidden'}
        timeout={1000}
        enterActive='animate__fadeIn'
        exitActive='animate__fadeOut'
      >
        <h2>i am</h2>
      </AnimatedElement>
      <AnimatedElement
        visibility={isInViewport ? 'visible' : 'hidden'}
        timeout={1500}
        enterActive='animate__fadeIn'
        exitActive='animate__fadeOut'
      >
        <h2>a <span className="color-orange">{props.title}</span></h2>
      </AnimatedElement>
      <AnimatedElement
        visibility={isInViewport ? 'visible' : 'hidden'}
        timeout={2000}
        enterActive='animate__fadeIn'
        exitActive='animate__fadeOut'
      >
        <h2>from <span className="color-orange">{props.country.name}</span></h2>
      </AnimatedElement>
    </section>
  )
}

export default TitleAndCountrySection;