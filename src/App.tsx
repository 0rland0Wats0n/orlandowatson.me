import './styles/App.scss';

import React from 'react';

import RESUME_DATA from './lib/resume.data';

import NameTitle from './components/NameAndTitleWithFlag';
import ResumeSection from './components/ResumeSection';
import EducationSection from './components/ResumeSection/EducationSection';
import ExperienceSection from './components/ResumeSection/ExperienceSection';
import TechStackSection from './components/ResumeSection/TechStackSection';
import ContactsSection from './components/ResumeSection/ContactsSection';

function App() {
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

  return (
    <div className="App">
      <NameTitle name={name} title={title} country={country} />
      <section className="Introduction">
        <p>{introduction.full || introduction.short}</p>
      </section>
      {
        !education ? null :
          <ResumeSection 
            title="education"
            introduction={education.introduction}
          >
            <EducationSection education={education.data} />
          </ResumeSection>
      }
      {
        !experience ? null :
          <ResumeSection title="experience">
            <ExperienceSection experiences={experience.data} />
          </ResumeSection>

      }
      {
        !skills ? null :
          <ResumeSection
            title="tech stack"
            introduction={skills.introduction}
          >
            <TechStackSection skills={skills.data} />
          </ResumeSection>
      }
      {
        !contact ? null :
          <ResumeSection title="get in touch">
            <ContactsSection contacts={contact.data} />
          </ResumeSection>
      }
    </div>
  );
}

export default App;
