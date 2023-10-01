import React from 'react';

import { Education } from '../../lib/models';

export default function EducationSection({education}: {education: Education}) {
  return (
    <section className="EducationSection">
      <aside className="School-location">
        <h5 className="School">{education.school}</h5>
        <h5 className="Location">{education.location}</h5>
      </aside>
      <p className="Degree">{education.degree}</p>
    </section>
  )
}