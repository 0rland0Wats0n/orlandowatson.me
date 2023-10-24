import './styles/App.scss';

import React, { createContext, useContext, useEffect, useState } from 'react';

import RESUME_DATA from './lib/resume.data';

import LeftSide from './containers/LeftSide';
import RightSide from './containers/RightSide';
import { ActiveSection } from './lib/models';
import Landing from './containers/Landing';

export const SectionContext = createContext<ActiveSection>('landing');

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const getAndSetWindowDimensions = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }

    if (document.readyState === 'complete') {
      getAndSetWindowDimensions();
    }

    window.addEventListener('resize', getAndSetWindowDimensions);
    return () => {
      window.removeEventListener('resize', getAndSetWindowDimensions);
    }
  })

  return (
    <div className="App">
      <Landing name={RESUME_DATA.name} />
    </div>
  );
}

export default App;
