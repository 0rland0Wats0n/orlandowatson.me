import './styles/App.scss';

import React from 'react';

import RESUME_DATA from './lib/resume.data';

import Landing from './containers/Landing';
import TitleAndCountry from './containers/TitleAndCountry';
import Introduction from './containers/Introduction';

function App() {
  return (
    <div className="App">
      <Landing name={RESUME_DATA.name} />
      <TitleAndCountry jobTitle={RESUME_DATA.title} country={RESUME_DATA.country.name} />
      <Introduction text={RESUME_DATA.introduction.full} />
    </div>
  );
}

export default App;
