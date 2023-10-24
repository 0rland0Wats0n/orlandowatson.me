import './styles/App.scss';

import React, { createContext } from 'react';

import RESUME_DATA from './lib/resume.data';

import { ActiveSection } from './lib/models';
import Landing from './containers/Landing';
import TitleAndCountry from './containers/TitleAndCountry';
import Gradient from './components/Gradient';

export const SectionContext = createContext<ActiveSection>('landing');

const colors: Record<'black'|'brown'|'white', string> = {
  black: '#333333',
  brown: '#86836D',
  white: '#FDFCF3'
}

function App() {
  return (
    <div className="App">
      <Landing name={RESUME_DATA.name} />
      <TitleAndCountry jobTitle={RESUME_DATA.title} country={RESUME_DATA.country.name} />
      <Gradient height={100} from={colors.white} to={colors.black} />
    </div>
  );
}

export default App;
