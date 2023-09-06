import './ResumeSection.css';

import React from 'react';
import { Education } from '../../lib/models';
import SectionTitle from '../SectionTitle';

interface ResumeSectionProps {
  education?: Education;
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

    return '';
  }

  const renderEducationSection = (): JSX.Element | null => {
    if (props.education) {
      return (
        <EducationResumeSection {...props.education} />
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