import React from 'react';

import { ContactKind, ResumeConfiguration } from './models';
import MicrosoftLogo from '../media/microsoft.png';
import Logo from '../media/logo.png';
import EmailLogo from '../media/email.png';
import TwitterXLogo from '../media/twitterx.png';
import GithubLogo from '../media/github.png';
import LinkedinLogo from '../media/linkedin.png';

const config: ResumeConfiguration = {
  name: 'orlando',
  title: 'software engineer',
  country: 'jamaica',
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
        'javascript',
        'typescript',
        'node.js',
        'sass',
        'figma',
        'docker'
      ]
    },
    {
      company: 'microsoft',
      details: 'i worked across a range of teams, projects and features at microsoft. these included:',
      logo: MicrosoftLogo,
      projects: [
        {
          name: 'onenote online',
          details: 'while on the onenote online team i worked on several features ranging from search and @ mentions within within pages.',
          skills: ['javascript', 'typescript', 'c#', 'script#', 'react.js', 'node.js']
        },
        {
          name: 'azure communications phone number javascript library',
          details: React.createElement(
            'span',
            { className: 'font--normal'},
            'i worked on and published the first version of ',
             React.createElement(
              'a',
              { 
                className: 'color--blue text--underline',
                href: 'https://www.npmjs.com/package/@azure/communication-phone-numbers',
                target: '_blank',
                rel: 'noreferrer'
              },
              '@azure/communication-phone-numbers'
             ),
            ' to npmjs. this library provides capabilities for phone number administration.'
          ),
          skills: ['javascript', 'typescript', 'node.js', 'c#', '.net']
        },
        {
          name: 'azure communication sms javascript library',
          details: React.createElement(
            'span',
            { className: 'font--normal'},
            'i worked on and published the first version of ',
             React.createElement(
              'a',
              { 
                className: 'color--blue text--underline',
                href: 'https://www.npmjs.com/package/@azure/communication-sms',
                target: '_blank',
                rel: 'noreferrer'
              },
              '@azure/communication-sms'
             ),
            ' to npmjs. this library gives developers the ability to send SMS messages from a phone numbers purchased through the azure ui or the phone numbers library.'
          ),
          skills: ['javascript', 'typescript', 'node.js', 'c#', '.net']
        },
        {
          name: 'azure communication rooms',
          details: React.createElement(
            'span',
            { className: 'font--normal'},
            'i worked on the azure communication rooms rest api and published the latest version of ',
             React.createElement(
              'a',
              { 
                className: 'color--blue text--underline',
                href: 'https://www.npmjs.com/package/@azure/communication-rooms',
                target: '_blank',
                rel: 'noreferrer'
              },
              '@azure/communication-rooms'
             ),
            ' to npm js.'
          ),
          skills: ['javascript', 'typescript', 'node.js', 'c#', '.net']
        },
        {
          name: 'media composition',
          details: 'i worked on media composition apis and sdks to give developers teams like live video composition capabilities.',
          skills: ['javascript', 'typescript', 'node.js', 'c#', '.net']
        }
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
      handle: 'orlandowatson.me@gmail',
      link: 'mailto:orlandowatson.me@gmail.com?subject=Cool Website. Let\'s Connect!'
    }
  ]
}


export const SocialIcons: Record<ContactKind, string> = {
  email: EmailLogo,
  x: TwitterXLogo,
  github: GithubLogo,
  linkedin: LinkedinLogo
}

export default config;