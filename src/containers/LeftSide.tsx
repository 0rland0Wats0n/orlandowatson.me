import React, { useRef } from 'react';

import AnimatedElement from '../components/AnimatedElement';
import AnimatedScrollIcon from '../components/AnimatedScrollIcon';
import { ContainerProps } from '../lib/models';
import { log } from '../lib/functions';
import EducationSection from '../components/ResumeSections/EducationSection';
import ExperienceSection from '../components/ResumeSections/ExperienceSection';
import ContactsSection from '../components/ResumeSections/ContactsSection';
import TitleAndCountrySection from '../components/ResumeSections/TitleAndCountrySection';
import IntroductionSection from '../components/ResumeSections/IntroductionSection';

type LeftSideProps = ContainerProps;

const LeftSide = (props: LeftSideProps) => {
  const leftSideRef = useRef<HTMLDivElement>(null);

  const _renderLanding = () => {
    const { name } = props.resumeData;

    const _handleScrollIconClick = () => log('scroll clicked');

    return (
      <section className="Landing">
        <AnimatedElement
          timeout={1250}
          visibility={'visible'}
          enterActive='animate__fadeInUp'
          exitActive='animate__fadeOutUp'
        >
          <h1 className="Name">i am {name}</h1>
        </AnimatedElement>
        <AnimatedElement
          timeout={1250}
          visibility={'visible'}
          enterActive='animate__fadeInUp'
          exitActive='animate__fadeOutUp'
        >
          <p>this is my live resumè</p>
        </AnimatedElement>
        <AnimatedElement
          timeout={1250}
          visibility={'visible'}
          enterActive='animate__fadeIn'
          exitActive='animate__fadeOut'
        >
          <AnimatedScrollIcon 
            visible
            onClick={_handleScrollIconClick}
          />
        </AnimatedElement>
      </section>
    )
  }

  const _renderTitleAndCountry = () => {
    const { title, country } = props.resumeData;

    return (
      <TitleAndCountrySection
        title={title}
        country={country}
      />
    )
  }

  const _renderIntroduction = () => {
    const { introduction } = props.resumeData;

    return (
      <IntroductionSection introduction={introduction.full} />
    )
  }

  const _renderEducation = () => {
    const { education } = props.resumeData;

    return (
      <EducationSection education={education.data} />
    )
  }

  const _renderExperience = () => {
    const { experience } = props.resumeData;

    return (
      <ExperienceSection experiences={experience.data} />
    )    
  }

  const _renderContacts = () => {
    const { contacts } = props.resumeData;

    return (
      <AnimatedElement
        timeout={1000}
        visibility='visible'
        enterActive='animate__fadeIn'
        exitActive='animate__fadeOut'
      >
        <ContactsSection contacts={contacts.data} white />
      </AnimatedElement>
    )
  }

  return (
    <section 
      className="LeftSide" 
      ref={leftSideRef}
    >
      {_renderLanding()}
      {_renderTitleAndCountry()}
      {_renderIntroduction()}
      {_renderEducation()}
      {_renderExperience()}
      {_renderContacts()}
    </section>
  )
}

export default LeftSide;