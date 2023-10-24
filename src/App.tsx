import './styles/App.scss';

import React, { createContext } from 'react';

import RESUME_DATA from './lib/resume.data';

import { ActiveSection } from './lib/models';
import Landing from './containers/Landing';
import TitleAndCountry from './containers/TitleAndCountry';

export const SectionContext = createContext<ActiveSection>('landing');

function App() {
  return (
    <div className="App">
      <Landing name={RESUME_DATA.name} />
      <TitleAndCountry jobTitle={RESUME_DATA.title} country={RESUME_DATA.country.name} />
    </div>
  );
}

export default App;
