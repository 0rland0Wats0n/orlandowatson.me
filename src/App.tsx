import './App.css';

import React from 'react';

import config from './lib/resume.data';
import NameTitle from './components/NameTitle';
import { ResumeSection } from './components/ResumeSection';

function App() {
  const { name, title, country, introduction, education } = config;

  return (
    <div className="App">
      <NameTitle name={name} title={title} country={country} />
      <section className="Introduction">
        <p>{introduction.full || introduction.short}</p>
      </section>
      <ResumeSection
        introduction={education?.introduction} 
        education={education?.data} 
      />
    </div>
  );
}

export default App;
