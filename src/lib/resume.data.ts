import { ResumeConfiguration } from "./models";
import JamaicanFlag from "../media/jamaica.png";

const config: ResumeConfiguration = {
  name: 'orlando',
  title: 'software engineer',
  country: {
    name: 'jamaica',
    flag: JamaicanFlag
  },
  introduction: {
    short: 'i have a deep passion for learning and building' +
    ' customer-focused web experiences using the latest available web technologies.',
    full: 'i have a deep passion for learning and building' +
    ' customer-focused web experiences using the latest available web technologies.' +
    ' i love the challenge of working with, and discovering new technologies. ' + 
    'i look forward to a professional opportunity to flex both my current skills and' +
    ' adaptability to new environments.'
  },
  education: {
    title: 'education',
    data: {
      school: 'claflin university',
      location: 'orangeburg, sc',
      degree: 'bsc computer science'
    }
  }
}

export default config;