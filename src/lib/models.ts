export interface ResumeConfiguration {
  name: string;
  title: string;
  country: Country;
  introduction: string;
  education: ResumeSection<Education>;
  experience: ResumeSection<Experience[]>;
  skills: ResumeSection<WordCloudData>;
  contact: ResumeSection<ContactInformation[]>
}

interface ResumeSection<T> {
  title: string;
  introduction?: string;
  data: T
}

interface Country {
  name: string;
  flag: string;
}

interface Education {
  school: string;
  degree: string;
}

interface Experience {
  company: string;
  logo: string;
  skills: string[];
}

type WordCloudData = Record<string, number>;

interface ContactInformation {
  type: "github" | "linkedin" | "x" | "email";
  handle: string;
  link: string;
}