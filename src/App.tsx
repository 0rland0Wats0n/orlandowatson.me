import './styles/App.scss';

import React, { useLayoutEffect, useState } from 'react';

import RESUME_DATA, { SocialLogos } from './lib/resume.data';
import LOGO from './media/logo.png';

import NameAndTitleWithFlag from './components/NameAndTitleWithFlag';
import ResumeSection from './components/ResumeSection';
import EducationSection from './components/ResumeSection/EducationSection';
import ExperienceSection from './components/ResumeSection/ExperienceSection';
import TechStackSection from './components/ResumeSection/TechStackSection';
import ContactsSection from './components/ResumeSection/ContactsSection';
import AnimatedSlideContainer from './components/AnimatedSlideContainer';
import { ResumeConfiguration } from './lib/models';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const getAndSetWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    }

    if (document.readyState === 'complete') {
      getAndSetWindowWidth();
    }

    window.addEventListener('resize', getAndSetWindowWidth);
    return () => {
      window.removeEventListener('resize', getAndSetWindowWidth);
    }
  })

  const { 
    name, 
    title, 
    country, 
    introduction, 
    education,
    experience,
    skills, 
    contact 
  } = RESUME_DATA;

  const leftSideChildren: Record<keyof ResumeConfiguration, () => React.ReactNode> = {
    name: () => <NameAndTitleWithFlag name={name} />,
    title: () => <NameAndTitleWithFlag name={name} title={title} />,
    country: () => <NameAndTitleWithFlag name={name} title={title} country={country} />,
    introduction: () => {
      return (
        <section className="Introduction">
          <p>{introduction.full || introduction.short}</p>
        </section>
      )
    },
    education: () => {
      return (
        <ResumeSection 
          title="education"
          introduction={education.introduction}
        >
          <EducationSection education={education.data} />
        </ResumeSection>
      )
    },
    experience: () => {
      return (
        <ResumeSection title="experience">
          <ExperienceSection experiences={experience.data} />
        </ResumeSection>
      )
    },
    skills: () => {
      return (
        <ResumeSection
          title="tech stack"
          introduction={skills.introduction}
        >
          <TechStackSection skills={skills.data} windowWidth={windowWidth} />
        </ResumeSection>
      )
    },
    contact: () => {
      return (
        <ResumeSection title="get in touch">
          <ContactsSection contacts={contact.data} />
        </ResumeSection>
      )
    }
  }

  const rightSideChildren: Record<keyof ResumeConfiguration, () => React.ReactNode> = {
    name: () => <h1 className="Right-name">i am {name}</h1>,
    title: () => <h2 className="Right-title">i am a {title}</h2>,
    country: () => <h2 className="Right-country">i am from {country.name}</h2>,
    introduction: () => <h4 className="Right-intro">{introduction.short}</h4>,
    education: () => <h2 className="Right-education">i have a {education?.data.degree} degree from {education?.data.school}</h2>,
    experience: () => {
      return (
        <section className="Right-experience">
          <h2>i have professional experience building:</h2>
          <ul>
            {
              experience?.data
                .find(exp => exp.company === 'microsoft')
                ?.skills.map(skill => <li>{skill}</li>)
            }
          </ul>
        </section>
      )
    },
    skills: () => {
      return (
        <section className="Right-skills">
          <h2>my ever-evolving technical stack includes:</h2>
          <ul>
            {
              skills?.data.map((skill, i) => {
                if (i < 6) {
                  return (
                    <li>{skill.name}</li>
                  )
                }

                return null;
              })
            }
          </ul>
        </section>
      )
    },
    contact: () => {
      return (
        <section className="Right-contack">
          <h2>find me online and get in touch</h2>
          <ul>
            {
              contact?.data.map(c => {
                return (
                  <li>
                    <a href={c.link} key={c.type}>
                      <p>{c.handle}</p>
                      <img src={SocialLogos[c.type]} alt={`${c.type} logo`} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </section>
      )
    }
  }

  const _renderLeftSide = () => {
    if (windowWidth < 900) {
      return (
        <>
          {leftSideChildren.country()}
          {leftSideChildren.introduction()}
          {leftSideChildren.education()}
          {leftSideChildren.experience()}
          {leftSideChildren.skills()}
          {leftSideChildren.contact()}
        </>
      )
    }
  }

  return (
    <div className="App">
      <section className="App-left">
        {_renderLeftSide()}
      </section>
      <AnimatedSlideContainer
        className='App-right'
        logo={LOGO} 
        backgroundColor='#333'
      >
        
      </AnimatedSlideContainer>
    </div>
  );
}

export default App;
