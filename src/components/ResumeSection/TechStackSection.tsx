import React, { useEffect, useState } from 'react';

import { Skill } from "../../lib/models";
import { ExpandableSkillBox, ExpandableSkillBoxGlobalState } from "../ExpandableSkillBox";
import WordCloud from '../WordCloudWithSkillDetails';

export default function TechStackSection({skills}: {skills: Skill[]}) {
  const [globalExpandableSkillBoxState, setGlobalExpandableSkillBoxState] = useState(ExpandableSkillBoxGlobalState.default);

  useEffect(() => {
    const switchGlobalExpandableSkillBoxState = () => {
      if (window.innerWidth >= 900) {
        setGlobalExpandableSkillBoxState(ExpandableSkillBoxGlobalState.wordCloud);
      } else if (window.innerWidth >= 600) {
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

  const _renderExpandableSkillBoxes = () => {
    return (
      <>
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
      </>
    )
  }

  const _renderSkills = () => {
    switch (globalExpandableSkillBoxState) {
      case ExpandableSkillBoxGlobalState.wordCloud:
        return (
          <WordCloud skills={skills} width={500} height={220}/>
        );

      case ExpandableSkillBoxGlobalState.default:
      case ExpandableSkillBoxGlobalState.globalOpen:
      case ExpandableSkillBoxGlobalState.globalClosed:
      default:
        return _renderExpandableSkillBoxes();
    }
  }

  return (
    <article className="TechStackSection">
      {_renderSkills()}
    </article>
  )
}