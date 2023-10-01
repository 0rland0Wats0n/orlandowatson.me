import React, { PropsWithChildren } from 'react';

import SectionTitle from '../SectionTitle';

interface ResumeSectionProps extends PropsWithChildren  {
  title: string;
  introduction?: string;
}

export default function ResumeSection({introduction, title, children}: ResumeSectionProps) {
  const renderIntroduction = () => introduction ? 
    <p className="SectionIntroduction">{introduction}</p> : 
    null;

  return (
    <section className="ResumeSection">
      <SectionTitle title={title} />
      {renderIntroduction()}
      {children}
    </section>
  )
}