export interface ResumeConfiguration {
  name: string;
  title: string;
  country: string;
  introduction: Introduction;
  education: Education;
  experience: Experience[];
  contacts: ContactInformation[];
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
  major: string;
  degree: string;
}

export interface Experience {
  company: string;
  details: string;
  logo: string;
  skills?: string[];
  projects?: Project[];
}

export interface Project {
  name: string;
  details: React.ReactNode;
  skills?: string[];
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