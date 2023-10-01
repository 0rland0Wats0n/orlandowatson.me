import React, { useEffect, useState } from 'react';

import { Skill } from "../../lib/models";
import { ExpandableSkillBox, ExpandableSkillBoxGlobalState } from "../ExpandableSkillBox";

export default function TechStackSection({skills}: {skills: Skill[]}) {
  const [globalExpandableSkillBoxState, setGlobalExpandableSkillBoxState] = useState(ExpandableSkillBoxGlobalState.default);

  useEffect(() => {
    const switchGlobalExpandableSkillBoxState = () => {
      if (window.innerWidth >= 600) {
        setGlobalExpandableSkillBoxState(ExpandableSkillBoxGlobalState.globalOpen);
      } else {
        setGlobalExpandableSkillBoxState(ExpandableSkillBoxGlobalState.default);
      }
    }

    window.addEventListener('resize', switchGlobalExpandableSkillBoxState);
    window.addEventListener('load', switchGlobalExpandableSkillBoxState);

    return () => {
      window.removeEventListener('resize', switchGlobalExpandableSkillBoxState);
      window.removeEventListener('load', switchGlobalExpandableSkillBoxState);  
    }
  }, []);

  return (
    <article className="TechStackSection">
      {
        skills.map(skill => {
          return (
            <ExpandableSkillBox 
              key={skill.name} 
              skill={skill}
              globalState={globalExpandableSkillBoxState} 
            />
          )
        })
      }
    </article>
  )
}