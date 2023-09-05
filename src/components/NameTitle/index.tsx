import './NameTitle.css';

import React from 'react';
import { Country } from '../../lib/models';

export interface NameTitleProps {
  name: string;
  title: string;
  country?: Country;
}

function NameTitle({name, title, country}: NameTitleProps) {
  const renderFlag = () => country ? <img src={country.flag} alt={country.name} /> : null;

  return (
    <section className="Name-title">
      <aside className="Name-flag">
        {renderFlag()}
        <h1 className="Name">{name}</h1>
      </aside>
      <h3 className="Title">{title}</h3>
    </section>
  )
}

export default NameTitle;