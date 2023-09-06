import './App.css';

import React from 'react';

import config from './lib/resume.data';
import NameTitle from './components/NameTitle';
import { EducationResumeSection } from './components/ResumeSection';

function App() {
  const { name, title, country, introduction, education } = config;

  const renderEducationSection = () => {
    if (!education) {
      return null;
    }

    return (
      <EducationResumeSection 
        title={education.title}
        introduction={education.introduction}
        {...education.data}
      />
    )
  }

  return (
    <div className="App">
      <NameTitle name={name} title={title} country={country} />
      <section className="Introduction">
        <p>{introduction.full || introduction.short}</p>
      </section>
      {renderEducationSection()}
    </div>
  );
}

export default App;
