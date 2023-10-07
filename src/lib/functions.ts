import { Word } from '../components/WordCloud';
import { ProficiencyLevel, Skill } from './models';

/**
 * Get the proficiency level given a score
 * @param score Skill score (0 < n >= 1)
 */
export const mapScoreToProficiencyLevel = (score?: number): ProficiencyLevel | null => {
  if (!score) {
    return null;
  }

  if (score <= 0 || score > 1) {
    throw new Error('score out of range');
  }

  score = Math.ceil((score*10)/2);
  switch (score) {
    case 5:
      return ProficiencyLevel.expert;
    case 4:
      return ProficiencyLevel.advanced;
    case 3:
      return ProficiencyLevel.intermediate;
    case 2:
      return ProficiencyLevel.novice;
    case 1:
      return ProficiencyLevel.fundamental;
    default:
      throw new Error('invalid score');
  }
}

/**
 * Maps skills to words
 * @param skills List of skills to be mapped
 * @returns
 */
export const mapSkillToWord = (skills: Skill[]): Word[] => {
  const words: Word[] = [];
  for (const skill of skills) {
    if (skill.name.includes('/')) {
      const names = skill.name.split('/');
      names.map(name => {
        return words.push({
          text: name,
          value: skill.score
        })
      });
      continue;
    }

    words.push({
      text: skill.name,
      value: skill.score
    });
  }

  return words;
}