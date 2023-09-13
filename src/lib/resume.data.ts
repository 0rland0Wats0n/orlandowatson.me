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
          'docker'
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
  }
}

export default config;