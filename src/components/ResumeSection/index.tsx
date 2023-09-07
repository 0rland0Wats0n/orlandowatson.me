import './ResumeSection.css';

import React from 'react';
import { Education, Experience } from '../../lib/models';
import SectionTitle from '../SectionTitle';

interface ResumeSectionProps {
  education?: Education;
  experience?: Experience[];
  introduction?: string;
}

export interface EducationResumeSectionProps extends ResumeSectionProps, Education {}

export function ResumeSection(props: ResumeSectionProps) {
  const renderIntroduction = () => props.introduction ? 
    <p className="SectionIntroduction">{props.introduction}</p> : 
    null;

  const getSectionTitle = (): string => {
    if (props.education) {
      return 'education';
    }

    if (props.experience) {
      return 'experience';
    }

    return '';
  }

  const renderEducationSection = (): JSX.Element | null => {
    if (props.education) {
      return (
        <EducationResumeSection {...props.education} />
      )
    }

    if (props.experience) {
      return (
        <ExperienceResumeSection experiences={props.experience} />
      )
    }

    return null;
  }

  return (
    <section className="ResumeSection">
      <SectionTitle title={getSectionTitle()} />
      {renderIntroduction()}
      {renderEducationSection()}
    </section>
  )
}

function EducationResumeSection(education: Education) {
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

interface ExperienceResumeSectionProps {
  experiences: Experience[];
}

function ExperienceResumeSection({experiences}: ExperienceResumeSectionProps) {
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