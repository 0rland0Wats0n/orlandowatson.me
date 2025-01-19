import React, { createContext } from 'react';

import { ResumeData } from './models';

import MicrosoftLogo from '../media/microsoft.png';
import Logo from '../media/logo.png';
import Seneca from '../media/seneca.png';

import {
  OnenoteOnlineDetails,
  ACSPhoneDetails,
  ACSSMSDetails,
  ACSRoomsDetails,
  SenecaDetails,
} from "./snippets";

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
          details: OnenoteOnlineDetails(),
          skills: ['javascript', 'typescript', 'c#', 'script#', 'react.js', 'node.js']
        },
        {
          name: 'azure communications phone number javascript library',
          details: ACSPhoneDetails(),
          skills: ['javascript', 'typescript', 'node.js', 'c#', '.net']
        },
        {
          name: 'azure communication sms javascript library',
          details: ACSSMSDetails(),
          skills: ['javascript', 'typescript', 'node.js', 'c#', '.net']
        },
        {
          name: 'azure communication rooms',
          details: ACSRoomsDetails(),
          skills: ['javascript', 'typescript', 'node.js', 'c#', '.net', 'asp.net', 'rest api']
        },
        {
          name: 'media composition',
          details: 'i worked on researching, designing and developing microsoft\'s media composition layout solution to give developers live media composition capabilities through azure. this worked involved working on azure sdks, rest apis and more backend related tasks.',
          skills: ['javascript', 'typescript', 'node.js', 'c#', '.net']
        }
      ]
    },
    {
      company: 'seneca family of agencies',
      logo: Seneca,
      details: SenecaDetails(),
      skills: [
        'wordpress',
        'php',
        'javascript',
        'figma'
      ]
    },
    {
      company: 'microsoft',
      details: 'i interned with microsoft in the summer of 2016 where i had the opportunity of working on a very cool front end project:',
      logo: MicrosoftLogo,
      projects: [
        {
          name: 'yammer',
          details: 'while on the yammer team i created a wizard which guided users through completing certain important tasks whenever they created a new Yammer group',
          skills: ['javascript', 'angular', 'node.js']
        },
      ]
    },
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
