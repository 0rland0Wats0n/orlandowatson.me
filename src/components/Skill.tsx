import React from 'react';
import Text from './Text';

interface SkillProps {
  skill: string;
}

const Skill = ({ skill }: SkillProps) => {
  return (
    <div className="Skill">
      <Text size='small'>{skill}</Text>
    </div>
  )
}

export default Skill;