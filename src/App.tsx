import './styles/App.scss';

import React, { useEffect, useState } from 'react';

import RESUME_DATA from './lib/resume.data';

import LeftSide from './containers/LeftSide';
import RightSide from './containers/RightSide';

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
    <div 
      className="App" 
      style={{height: `${windowWidth >= 900 ? windowHeight + "px" : "auto"}`}}
    >
      <LeftSide 
        resumeData={RESUME_DATA}
        windowWidth={windowWidth}
      />
      <RightSide
        resumeData={RESUME_DATA}
        windowWidth={windowWidth}
      />
    </div>
  );
}

export default App;
