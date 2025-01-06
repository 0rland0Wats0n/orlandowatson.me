import React, { createContext } from 'react';

import { ResumeData } from './models';
import MicrosoftLogo from '../media/microsoft.png';
import Logo from '../media/logo.png';

export const DefaultResumeData: ResumeData = {
  name: 'orlando',
  role: 'software engineer',
  location: 'the bay area',
  introduction: 'i have a deep passion for learning and building customer-focused web experiences using the latest available web technologies. i love the challenge of working with, and discovering new technologies. i look forward to a professional opportunity to flex both my current skills and adaptability to new environments.',
  education: {
    school: 'claflin university',
    degree: 'bachelor of science',
    major: 'computer science'
  },
  experience: [
    {
      company: 'orlandowatson.me',
      details: 'orlandowatson.me is an interactive resume designed and developed by me. the ui/ux designs were made using figma while the web app was created using react.js',
      logo: Logo,
      skills: [
        'react.js',
        'javascript',
        'typescript',
        'node.js',
        'vercel',
        'sass',
        'figma'      
      ]
    },
    {
      company: 'microsoft',
      details: 'i started working at microsoft right after college and worked across a few teams, projects and features. these included:',
      logo: MicrosoftLogo,
      projects: [
        {
          name: 'onenote online',
          details: 'while on the onenote online team i worked on several features and projects. i worked on implementing page-level search for notebooks; adding page-level at-mentions; and numerous bug fixes and customer issues.',
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
          details: 'i worked on researching, designing and developing microsoft\'s media composition layout solution to give developers live media composition capabilities through azure. this worked involved working on azure sdks, rest apis and more backend related tasks.',
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

const ResumeContext = createContext<ResumeData>(DefaultResumeData);

export default ResumeContext;