import { ResumeConfiguration } from './models';
import JamaicanFlag from '../media/jamaica.png';
import MicrosoftLogo from '../media/microsoft.png';
import Logo from '../media/logo.png';

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
    data: {
      school: 'claflin university',
      location: 'orangeburg, sc',
      degree: 'bsc computer science'
    }
  },
  experience: {
    data: [
      {
        company: 'orlandowatson.me',
        logo: Logo,
        skills: [
          'react web app',
          'ui/ux design',
        ]
      },
      {
        company: 'microsoft',
        logo: MicrosoftLogo,
        skills: [
          'azure sdks',
          'CaaS tools',
          'rest apis',
          'dev ex tools',
          'testing tools',
          'web apps'
        ]
      }
    ]
  }
}

export default config;