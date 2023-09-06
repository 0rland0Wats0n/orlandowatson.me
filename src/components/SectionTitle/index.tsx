import './SectionTitle.css';

import React from 'react';

export interface SectionTitleProps {
  title: string;
}

function SectionTitle({title}: SectionTitleProps) {
  return (
    <aside className="SectionTitle">
      <h3>{title}</h3>
    </aside>
  )
}

export default SectionTitle;