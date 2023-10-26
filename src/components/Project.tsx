import React, { useRef } from 'react';
import { useIsInViewport } from '../lib/functions';
import { Project } from '../lib/models';
import AnimatedElement from './AnimatedElement';
import Text from './Text';
import Skill from './Skill';

interface ProjectProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectProps) => {
  const projectRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInViewport(projectRef, 0.25);

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
    <div className="Project" ref={projectRef}>
      <AnimatedElement
        timeout={2000}
        visibility={isInView ? 'visible' : 'hidden'}
        enterActive='animate__fadeInUp'
        exitActive='animate__fadeOutDown'
        className='Name color--brown'
      >
        <Text size='above-average'>{project.name}</Text>
      </AnimatedElement>
      <AnimatedElement
        timeout={2000}
        visibility={isInView ? 'visible' : 'hidden'}
        enterActive='animate__fadeInUp'
        exitActive='animate__fadeOutDown'
      >
        <Text>{project.details}</Text>
      </AnimatedElement>
      {_renderSkills(project.skills)}
    </div>
  )
}

export default ProjectItem;