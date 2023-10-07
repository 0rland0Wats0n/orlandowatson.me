import React, { useEffect, useState } from "react";
import { Skill } from "../lib/models";

interface ExpandableSkillBoxProps {
  skill: Skill;
  globalState?: ExpandableSkillBoxGlobalState;
}

export enum ExpandableSkillBoxGlobalState {
  default = 'default',
  globalOpen = 'globalOpen',
  globalClosed = 'globalClosed',
  wordCloud = 'wordCloud'
}

export function ExpandableSkillBox({
  skill, 
  globalState = ExpandableSkillBoxGlobalState.default
}: ExpandableSkillBoxProps) {
  const [expanded, setExpanded] = useState(false);
  const {name, score, details} = skill;

  useEffect(() => {
    switch (globalState) {  
      case ExpandableSkillBoxGlobalState.globalOpen:
        setExpanded(true);
        break;
      
      case ExpandableSkillBoxGlobalState.globalClosed:
      case ExpandableSkillBoxGlobalState.wordCloud:
      default:
        setExpanded(false);
        break;
    }
  }, [globalState])

  const handleClick = () => {
    if (globalState === ExpandableSkillBoxGlobalState.default) {
      setExpanded(!expanded);
    }
  }

  return (
    <div 
      className="ExpandableSkillBox" 
      state-expanded={`${expanded}`} 
      onClick={handleClick}
    >
      <div className="ExpandableSkillBox-bg" style={{width: `${score*100}%`}}></div>
      <h5 className="ExpandableSkillBox-skill">
        {name}
      </h5>
      <p className="ExpandableSkillBox-skill-details">{details}</p>
    </div>
  )
}