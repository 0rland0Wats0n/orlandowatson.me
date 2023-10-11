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

/**
 * Throttles a method
 * @param func The method to call
 * @param wait Time in ms to wait before calling method again
 * @returns 
 */
export const throttle = (func: (event: WheelEvent) => void, wait: number): (event: WheelEvent) => void => {
  let time = Date.now();

  return function(event: WheelEvent) {
    // we dismiss every wheel event with deltaY less than 4
    if (Math.abs(event.deltaY) < 4) return

    if ((time + wait - Date.now()) < 0) {
      func(event);
      time = Date.now();
    }
  }
}

/**
 * Logs to the console if not in a production env
 * @param message Message to log
 */
export const log = (message: string) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(message);
  }
}