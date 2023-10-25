import { ContactKind, IconTypes, ResumeConfiguration } from './models';

import JamaicanFlag from '../media/jamaica.png';
import MicrosoftLogo from '../media/microsoft.png';
import Logo from '../media/logo.png';
import EmailLogo from '../media/email.png';
import EmailLogoWhite from '../media/email-white.png';
import TwitterXLogo from '../media/twitterx.png';
import TwitterXLogoWhite from '../media/twitterx-white.png';
import GithubLogo from '../media/github.png';
import GithubLogoWhite from '../media/github-white.png';
import LinkedinLogo from '../media/linkedin.png';
import LinkedinLogoWhite from '../media/linkedin-white.png';

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
    school: 'claflin university',
    degree: 'bachelor of science',
    major: 'computer science'
  },
  experience: [
    {
      company: 'orlandowatson.me',
      details: 'orlandowatson.me is an interactive resume designed and developed solely by myself. the ui/ux designs were made using figma while the web app was created using react and deployed in a docker container.',
      logo: Logo,
      skills: [
        'react.js',
        'javascript/typescript',
        'sass',
        'figma',
        'docker'
      ]
    },
    {
      company: 'microsoft',
      details: 'i worked across a range of projects and features at microsoft. these included search and @mentions for the onenote online web app; azure sdks to give developers access communication as a service features like sms and phone numbers; rest apis and azure sdks to provide live media composition capabilities to developers; and a host of other developer tools.',
      logo: MicrosoftLogo,
      skills: [
        'javascript/typescript',
        'ç#/.net',
        'azure sdks',
        'CaaS tools',
        'rest apis',
        'dev ex tools',
        'testing tools',
        'web apps'
      ]
    }
  ],
  contacts: [
    {
      type: 'github',
      handle: '/0rland0Wats0n',
      link: 'https://github.com/0rland0Wats0n'
    },
    {
      type: 'linkedin',
      handle: '/watsonorlando',
      link: 'https://www.linkedin.com/in/watsonorlando/'
    },
    {
      type: 'x',
      handle: '@0RLAND0WATS0N',
      link: 'https://twitter.com/0RLAND0WATS0N'
    },
    {
      type: 'email',
      handle: 'orlandowatson.me@gmail.com',
      link: 'mailto:orlandowatson.me@gmail.com?subject=Cool Website. Let\'s Connect!'
    }
  ]
}


export const SocialIcons: Record<ContactKind, IconTypes> = {
  email: {
    default: EmailLogo,
    white: EmailLogoWhite
  },
  x: {
    default: TwitterXLogo,
    white: TwitterXLogoWhite
  },
  github: {
    default: GithubLogo,
    white: GithubLogoWhite
  },
  linkedin: {
    default: LinkedinLogo,
    white: LinkedinLogoWhite
  }
}

export default config;