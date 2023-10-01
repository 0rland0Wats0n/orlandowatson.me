import React from 'react';
import { Country } from '../lib/models';

export interface NameAndTitleWithFlagProps {
  name: string;
  title: string;
  country?: Country;
}

function NameAndTitleWithFlag({name, title, country}: NameAndTitleWithFlagProps) {
  const renderFlag = () => country ? <img className="Flag" src={country.flag} alt={country.name} /> : null;

  return (
    <section className="NameAndTitleWithFlag">
      <aside className="Name-flag">
        {renderFlag()}
        <h1 className="Name">{name}</h1>
      </aside>
      <h3 className="Title">{title}</h3>
    </section>
  )
}

export default NameAndTitleWithFlag;