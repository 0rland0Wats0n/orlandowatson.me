import React, { useRef } from 'react';

import { Experience } from '../../lib/models';
import AnimatedElement from '../AnimatedElement';
import { useIsInViewport } from '../../lib/functions';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIsInViewport(nodeRef, 0.5);
  
  return (
    <section className="Experience" ref={nodeRef}>
      <AnimatedElement
        visibility={isInViewport ? 'visible' : 'hidden'}
        timeout={1250}
        enterActive='animate__zoomInRight'
        exitActive='animate__fadeOut'
        className='Experience-title'
      >
        <h4 className="Experience-title">recent work &lt;</h4>
      </AnimatedElement>
      <div className="Experience-items">
        {
          experiences.map(experience => {
            return (
              <AnimatedElement
                key={experience.company}
                visibility={isInViewport ? 'visible' : 'hidden'}
                timeout={200}
                enterActive='animate__fadeInLeft'
                exitActive='animate__fadeOutRight'
                className='Experience-item'
              >
                <section>
                  <aside className="Company">
                    <img src={experience.logo} alt={`${experience.company} logo`} className="Company-logo" />
                    <h5 className="Company-name">{experience.company}</h5>
                  </aside>
                  <p className="Details">{experience.details}</p>
                  <aside className="Skills-used">
                    {
                      experience.skills.map(skill => {
                        return <p className="Skill-used" key={skill}>{skill}</p>
                      })
                    }
                  </aside>
                </section>
              </AnimatedElement>
            )
          })
        }
      </div>
    </section>
  );
}