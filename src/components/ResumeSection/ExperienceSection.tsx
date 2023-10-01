import React from 'react';

import { Experience } from '../../lib/models';

export default function ExperienceSection({experiences}: {experiences: Experience[]}) {
  return (
    <article className="ExperienceSection">
      {
        experiences.map(experience => {
          return (
            <section className="Experience" key={experience.company}>
              <aside className="Company">
                <img src={experience.logo} alt={`${experience.company} logo`} className="Company-logo" />
                <h5 className="Company-name">{experience.company}</h5>
              </aside>
              <p className="Details">{experience.details}</p>
              <aside className="Skills-used">
                {
                  experience.skills.map(skill => {
                    return <p className="Skill-used" key={skill}>{skill}</p>
                  })
                }
              </aside>
            </section>
          )
        })
      }
    </article>
  );
}