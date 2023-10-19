import React, { useRef } from 'react';

import { Education } from '../../lib/models';
import { useIsInViewport } from '../../lib/functions';
import AnimatedElement from '../AnimatedElement';

interface EducationSectionProps {
  education: Education;
}

export default function EducationSection({ education }: EducationSectionProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIsInViewport(nodeRef, 0.5);
  
  return (
    <section className="Education" ref={nodeRef}>
      <h2>i have a</h2>
      <AnimatedElement
        visibility={isInViewport ? 'visible' : 'hidden'}
        timeout={1750}
        enterActive='animate__fadeInUp'
        exitActive='animate__fadeOut'
        className='Type color-orange'
      >
        <h2>{education.type}</h2>
      </AnimatedElement>
      <AnimatedElement
        visibility={isInViewport ? 'visible' : 'hidden'}
        timeout={1250}
        enterActive='animate__fadeInLeft'
        exitActive='animate__fadeOut'
        className='Degree'
      >
        <h2>in <span className="color-orange">{education.degree}</span></h2>
      </AnimatedElement>
      <AnimatedElement
        visibility={isInViewport ? 'visible' : 'hidden'}
        timeout={2250}
        enterActive='animate__fadeInUp'
        exitActive='animate__fadeOut'
        className='School'
      >
        <h2>from <span className="color-orange">{education.school}</span></h2>
      </AnimatedElement>
    </section>
  )
}