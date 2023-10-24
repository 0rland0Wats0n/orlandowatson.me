export interface ResumeConfiguration {
  name: string;
  title: string;
  country: Country;
  introduction: Introduction;
  education: ResumeSection<Education>;
  experience: ResumeSection<Experience[]>;
  skills: ResumeSection<Skill[]>;
  contacts: ResumeSection<ContactInformation[]>
}

interface ResumeSection<T> {
  introduction?: string;
  data: T
}

interface Introduction {
  short: string;
  full: string;
}

export interface Country {
  name: string;
  flag: string;
}

export interface Education {
  school: string;
  type: string;
  degree: string;
}

export interface Experience {
  company: string;
  details: string;
  logo: string;
  skills: string[];
}

export interface Skill {
  name: string;
  score: number;
  details: string;
}

export type ContactKind = 'github' | 'linkedin' | 'x' | 'email';

export interface ContactInformation {
  type: ContactKind;
  handle: string;
  link: string;
}

export enum ProficiencyLevel {
  fundamental = 'fundamental awareness',
  novice = 'novice',
  intermediate = 'intermediate',
  advanced = 'advanced',
  expert = 'expert'
}

export type TransitionDirection = 'forward' | 'backward' | 'none';

export interface Transition {
  isTransitioning: boolean;
  direction: TransitionDirection;
  timeInMs: number;
}

export interface Active {
  left: number;
  right: number;
}

export type Visibility = 'visible' | 'hidden';

export type AppMode = 'default' | 'wheel';

export type ActiveSection = 'landing' | 'role+country' | 'introduction' | 'education' | 'experience' | 'contact'; 

export interface IconTypes {
  default: string;
  white: string;
}

export interface ContainerProps {
  resumeData: ResumeConfiguration;
  windowWidth: number;
}