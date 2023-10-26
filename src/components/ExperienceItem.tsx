import React, { useRef } from 'react';

import { Experience } from '../lib/models';
import { useIsInViewport } from '../lib/functions';
import AnimatedElement from './AnimatedElement';
import Text from './Text';
import Skill from './Skill';

interface ExperienceItemProps {
  experience: Experience;
  dark?: boolean;
}

const ExperienceItem = ({ experience, dark }: ExperienceItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInViewport(itemRef, 0.65);

  const _renderSkills = (skills?: string[]) => {
    if (!skills || skills.length === 0) {
      return null;
    }

    return (
      <AnimatedElement
        timeout={2000}
        visibility={isInView ? 'visible' : 'hidden'}
        enterActive='animate__fadeInUp'
        exitActive='animate__fadeOutDown'
        className='Skills'
      >
        <section>
          {
            skills.map(skill => {
              return (
                <Skill key={skill} skill={skill} />
              )
            })
          }
        </section>
      </AnimatedElement>
    )
  }

  return (
    <div 
      className="ExperienceItem" 
      ref={itemRef} 
      data-is-dark={dark!!}
    >
      <section className="LogoTitle">
        <AnimatedElement
          timeout={2000}
          visibility={isInView ? 'visible' : 'hidden'}
          enterActive='animate__fadeInLeft'
          exitActive='animate__fadeOut'
        >
          <img src={experience.logo} alt="experience company logo" className="Logo" />
        </AnimatedElement>
        <AnimatedElement
          timeout={2000}
          visibility={isInView ? 'visible' : 'hidden'}
          enterActive='animate__fadeInDown'
          exitActive='animate__fadeOutUp'
          className={`${dark ? 'color--white' : 'color--brown'}`}
        >
          <Text size='above-average'>{experience.company}</Text>
        </AnimatedElement>
      </section>
      <AnimatedElement
        timeout={2000}
        visibility={isInView ? 'visible' : 'hidden'}
        enterActive='animate__fadeIn'
        exitActive='animate__fadeOut'
        className={`${dark ? 'color--white' : ''}`}
      >
        <Text>{experience.details}</Text>
      </AnimatedElement>
      {_renderSkills(experience.skills)}
    </div>
  )
}

export default ExperienceItem;