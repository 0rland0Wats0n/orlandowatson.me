import React, { useState } from "react";
import { Skill } from "../lib/models";

interface ExpandableSkillBoxProps {
  skill: Skill;
}

export function ExpandableSkillBox({skill}: ExpandableSkillBoxProps) {
  const [expanded, setExpanded] = useState(false);
  const {name, score, details} = skill

  return (
    <div 
      className="ExpandableSkillBox" 
      state-expanded={`${expanded}`} 
      onClick={() => setExpanded(!expanded)}
    >
      <div className="ExpandableSkillBox-bg" style={{width: `${score*100}%`}}></div>
      <h5 className="ExpandableSkillBox-skill">
        {name}
      </h5>
      <p className="ExpandableSkillBox-skill-details">{details}</p>
    </div>
  )
}