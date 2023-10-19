import React from 'react';

import { Country } from '../lib/models';
import AnimatedElement from './AnimatedElement';

export interface NameAndTitleWithFlagProps {
  name: string;
  title: string;
  country: Country;
  state: NameAndTitleWithFlagState;
}

export type NameAndTitleWithFlagState = 'landing' | 'name' | 'name+title' | 'name+title+flag';

const NameAndTitleWithFlag = ({
  name, 
  title, 
  country, 
  state
}: NameAndTitleWithFlagProps) => {
  return (
    <section className="NameAndTitleWithFlag">
      <aside className="Name-flag">
        <AnimatedElement
          timeout={1250}
          visibility={state.includes('flag') ? 'visible' : 'hidden'}
          enterActive='animate__fadeIn'
          exitActive='animate__fadeOut'
        >
          <img className="Flag" src={country.flag} alt={country.name} />
        </AnimatedElement>
        <AnimatedElement
          timeout={1250}
          visibility={state.includes('name') ? 'visible' : 'hidden'}
          enterActive='animate__fadeInUp'
          exitActive='animate__fadeOutDown'
        >
          <h1 className="Name">{name}</h1>
        </AnimatedElement>
      </aside>
      <AnimatedElement
        timeout={1250}
        visibility={state.includes('title') ? 'visible' : 'hidden'}
        enterActive='animate__fadeInUp'
        exitActive='animate__fadeOutDown'
      >
        <h3 className="Title">{title}</h3>
      </AnimatedElement>
    </section>
  )
}

export default NameAndTitleWithFlag;