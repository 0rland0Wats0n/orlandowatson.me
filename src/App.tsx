import './styles/App.scss';

import React from 'react';

import RESUME_DATA from './lib/resume.data';

import Landing from './containers/Landing';
import TitleAndCountry from './containers/TitleAndCountry';
import Introduction from './containers/Introduction';
import Education from './containers/Education';
import ExperienceContainer from './containers/ExperienceContainer';

function App() {
  return (
    <div className="App">
      <Landing name={RESUME_DATA.name} />
      <TitleAndCountry jobTitle={RESUME_DATA.title} country={RESUME_DATA.country.name} />
      <Introduction text={RESUME_DATA.introduction.full} />
      <Education degree={RESUME_DATA.education.degree} major={RESUME_DATA.education.major} />
      <ExperienceContainer experiences={RESUME_DATA.experience} />
    </div>
  );
}

export default App;
