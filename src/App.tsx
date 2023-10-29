import './styles/App.scss';

import React, { useEffect } from 'react';

import ResumeContext, { DefaultResumeData } from './lib/ResumeContext';

import Landing from './containers/Landing';
import TitleAndCountry from './containers/TitleAndCountry';
import Introduction from './containers/Introduction';
import Education from './containers/Education';
import ExperienceContainer from './containers/ExperienceContainer';
import Contacts from './containers/Contacts';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  })

  return (
    <div className="App">
      <ResumeContext.Provider value={DefaultResumeData}>
        <Landing />
        <TitleAndCountry />
        <Introduction />
        <Education />
        <ExperienceContainer />
        <Contacts />
      </ResumeContext.Provider>
    </div>
  );
}

export default App;
