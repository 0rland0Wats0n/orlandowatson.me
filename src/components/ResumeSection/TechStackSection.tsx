import React from 'react';

import { Skill } from "../../lib/models";
import { ExpandableSkillBox } from "../ExpandableSkillBox";

export default function TechStackSection({skills}: {skills: Skill[]}) {
  return (
    <article className="TechStackSection">
      {
        skills.map(skill => {
          return (
            <ExpandableSkillBox key={skill.name} skill={skill} />
          )
        })
      }
    </article>
  )
}