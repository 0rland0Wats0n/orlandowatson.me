import './App.css';

import React from 'react';

import config from './lib/resume.data';
import NameTitle from './components/NameTitle';

function App() {
  const {name, title, country, introduction} = config;

  return (
    <div className="App">
      <NameTitle name={name} title={title} country={country} />
      <section className="Introduction">
        <h4>{introduction.full || introduction.short}</h4>
      </section>
    </div>
  );
}

export default App;
