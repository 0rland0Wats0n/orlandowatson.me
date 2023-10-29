import React, { useContext, useRef } from 'react';
import { useIsInViewport } from '../lib/functions';
import Text from '../components/Text';
import ExperienceItem from '../components/ExperienceItem';
import AnimatedElement from '../components/AnimatedElement';
import ResumeContext from '../lib/ResumeContext';

const ExperienceContainer = () => {
  const { experience } = useContext(ResumeContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInViewport(containerRef, 0.1);

  return (
    <section className="Experience" ref={containerRef}>
      <AnimatedElement
        timeout={2000}
        visibility={isInView ? 'visible' : 'hidden'}
        enterActive='animate__fadeInDown'
        exitActive='animate__fadeOut'
        className='Heading'
      >
        <Text size='large'>things i've worked on:</Text>
      </AnimatedElement>
      {
        experience.map((exp, i) => {
          const isOdd = Math.floor((i+1)/2) === 1;
          return (
            <ExperienceItem experience={exp} dark={!isOdd} />
          )
        })
      }
    </section>
  )
}

export default ExperienceContainer;