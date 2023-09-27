import './ResumeSection.css';

import React from 'react';

import { 
  ContactInformation, 
  Education, 
  Experience, 
  Skill 
} from '../../lib/models';
import SectionTitle from '../SectionTitle';
import { ExpandableSkillBox } from '../ExpandableSkillBox';

import { SocialLogos } from '../../lib/resume.data';

interface ResumeSectionProps {
  education?: Education;
  experience?: Experience[];
  skills?: Skill[];
  contact?: ContactInformation[];
  introduction?: string;
}

interface EducationResumeSectionProps {
  education?: Education;
}

interface ExperienceResumeSectionProps {
  experiences?: Experience[];
}

interface TechStackResumeSectionProps {
  skills?: Skill[];
}

interface ContactResumeSectionProps {
  contacts?: ContactInformation[];
}

type SectionTitles = 'unknown' | 'education' | 'experience' | 'tech stack' | 'get in touch';

export function ResumeSection(props: ResumeSectionProps) {
  const renderIntroduction = () => props.introduction ? 
    <p className="SectionIntroduction">{props.introduction}</p> : 
    null;

  const getSectionTitle = (): SectionTitles  => {
    if (props.education) {
      return 'education';
    }

    if (props.experience) {
      return 'experience';
    }

    if (props.skills) {
      return 'tech stack';
    }

    if (props.contact) {
      return 'get in touch';
    }

    return 'unknown';
  }

  const renderSectionDetails = (): JSX.Element | null => {
    switch (getSectionTitle()) {
      case 'education':
        return (
          <EducationResumeSection education={props.education} />
        );

      case 'experience':
        return (
          <ExperienceResumeSection experiences={props.experience} />
        );

      case 'tech stack':
        return (
          <TechStackResumeSection skills={props.skills} />
        );

      case 'get in touch':
        return (
          <ContactResumeSection contacts={props.contact} />
        );

      default:
        return null;
    }
  }

  return (
    <section className="ResumeSection">
      <SectionTitle title={getSectionTitle()} />
      {renderIntroduction()}
      {renderSectionDetails()}
    </section>
  )
}

function EducationResumeSection({education}: EducationResumeSectionProps) {
  if (!education) {
    return null;
  }

  return (
    <section className="EducationSection">
      <aside className="School-location">
        <h5 className="School">{education.school}</h5>
        <h5 className="Location">{education.location}</h5>
      </aside>
      <p className="Degree">{education.degree}</p>
    </section>
  )
}

function ExperienceResumeSection({experiences}: ExperienceResumeSectionProps) {
  if (!experiences) {
    return null;
  }

  return (
    <>
      {
        experiences.map(experience => {
          return (
            <section className="Experience" key={experience.company}>
              <aside className="Company">
                <img src={experience.logo} alt={`${experience.company} logo`} className="Company-logo" />
                <h5 className="Company-name">{experience.company}</h5>
              </aside>
              <p className="Experience-details">{experience.details}</p>
              <aside className="Skills-used">
                {
                  experience.skills.map(skill => {
                    return <p className="Skill-used" key={skill}>{skill}</p>
                  })
                }
              </aside>
            </section>
          )
        })
      }
    </>
  );
}

function TechStackResumeSection({skills}: TechStackResumeSectionProps) {
  if (!skills) {
    return null;
  }

  return (
    <section className="TechStack">
      {
        skills.map(skill => {
          return (
            <ExpandableSkillBox key={skill.name} skill={skill} />
          )
        })
      }
    </section>
  )
}

function ContactResumeSection({contacts}: ContactResumeSectionProps) {
  if (!contacts) {
    return null;
  }

  return (
    <section className="Contacts">
      {
        contacts.map(contact => {
          return (
            <a href={contact.link} className="Contact-link">
              <img 
                src={SocialLogos[contact.type]} 
                alt={`${contact.type} logo`} 
                className="Contact-link-logo" 
              />
              <p className="Contact-link-handle">{contact.handle}</p>
            </a>
          )
        })
      }
    </section>
  )
}