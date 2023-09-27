import { ContactKind, ResumeConfiguration } from './models';

import JamaicanFlag from '../media/jamaica.png';
import MicrosoftLogo from '../media/microsoft.png';
import Logo from '../media/logo.png';
import EmailLogo from '../media/email.png';
import TwitterXLogo from '../media/twitterx.png';
import GithubLogo from '../media/github.png';
import LinkedinLogo from '../media/linkedin.png';

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
        details: 'orlandowatson.me is an interactive resume designed and developed solely by myself. the ui/ux designs were made using figma while the web app was created using react and deployed in a docker container.',
        logo: Logo,
        skills: [
          'react web app',
          'ui/ux design',
          'docker'
        ]
      },
      {
        company: 'microsoft',
        details: 'i worked across a range of projects and features at microsoft. these included search and @mentions for the onenote online web app; azure sdks to give developers access communication as a service features like sms and phone numbers; rest apis and azure sdks to provide live media composition capabilities to developers; and a host of other developer tools.',
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
  },
  skills: {
    introduction: 'i try to keep my skills up-to-date through continuous learning and not shying away from new challenges.',
    data: [
      {
        name: 'html/css',
        score: 0.9,
        details: 'i have a very strong understanding of semantic html and css and have worked a lot with these languages. i can very efficiently markup and style pages and know the best resources to supplement gaps in my knowledge.'
      },
      {
        name: 'javascript/typescript',
        score: 0.9,
        details: 'i have a very strong understanding of javascript and typescript and have worked a lot with these languages. i can very efficiently write advanced javascript and typescript code. i also know the best resources to supplement gaps in my knowledge of javascript and typescript.'
      },
      {
        name: 'python',
        score: 0.6,
        details: 'i have a basic understanding of the python language and have only worked on a few projects that required the language. i was able to complete these projects and developed knowledge of the best resources to supplement gaps in my understanding of python.'
      },
      {
        name: 'c#/.net',
        score: 0.75,
        details: 'i have a good understanding of the c# language and the .net framework and have worked on a good amount of projects requiring the language. i can write and understand advanced c# code and i know the best resources to supplement gaps in my knowledge of c# and .net.'
      },
      {
        name: 'git',
        score: 0.85,
        details: 'i have a strong understanding of git and best practices when working in a git-based version controlled system. i can effectively execute advanced git commands and i know the best resources to supplement gaps in my knowledge of git.'
      },
      {
        name: 'react',
        score: 0.8,
        details: 'i have a strong understanding of the react framework and have worked with it in a few professional and personal projects. i can write and understand advanced react techniques and know the best resources to supplement gaps in my knowledge of the framework.'
      },
      {
        name: 'wordpress',
        score: 0.8,
        details: 'i have a strong understanding of building wordpress websites and have worked on a number of wordpress projects. i can build and deploy custom themed wordpress websites and know the best resources to supplement gaps in my knowledge of wordpress.'
      },
      {
        name: 'php',
        score: 0.65,
        details: 'i have a basic understanding of the php language through my work on wordpress websites. i can read and write php code if required and know the best resources to supplement gaps in my knowledge of the language.'
      },
      {
        name: 'docker',
        score: 0.6,
        details: 'i have a basic understanding of docker and some familiarity with its fundamental concepts and functionalities. i have developed and deployed web applications in docker containers and know the best resources to supplement gaps in my knowledge of docker.'
      }
    ]
  },
  contact: {
    data: [
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
}

export const SocialLogos: Record<ContactKind, string> = {
  email: EmailLogo,
  x: TwitterXLogo,
  github: GithubLogo,
  linkedin: LinkedinLogo
}

export default config;