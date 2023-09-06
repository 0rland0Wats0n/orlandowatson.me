import './ResumeSection.css';

import React from 'react';
import { Education } from '../../lib/models';
import SectionTitle from '../SectionTitle';

interface ResumeSectionProps {
  title: string;
  introduction?: string;
}

export interface EducationResumeSectionProps extends ResumeSectionProps, Education {}

function ResumeSectionDefault({title, introduction}: ResumeSectionProps) {
  const renderIntroduction = () => introduction ? <p className="SectionIntroduction">{introduction}</p> : null;
  return (
    <>
      <SectionTitle title={title} />
      {renderIntroduction()}
    </>
  )
}

export function EducationResumeSection({title, introduction, ...education}: EducationResumeSectionProps) {
  return (
    <section className="ResumeSection EducationSection">
      <ResumeSectionDefault title={title} introduction={introduction} />
      <aside className="School-location">
        <h5 className="School">{education.school}</h5>
        <h5 className="Location">{education.location}</h5>
      </aside>
      <p className="Degree">{education.degree}</p>
    </section>
  )
}