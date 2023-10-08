import React, { useLayoutEffect, useRef, useState } from 'react';

import { Skill } from '../lib/models';
import { mapScoreToProficiencyLevel, mapSkillToWord } from '../lib/functions';
import WordCloud, { WordCloudProps } from './WordCloud';

interface WordCloudWithSkillDetailsProps {
  skills: Skill[];
  width: number;
  height: number;
}

export default function WordCloudWithSkillDetails({
  skills,
  width,
  height
}: WordCloudWithSkillDetailsProps) {
  const cloudRef = useRef<HTMLDivElement>(null);
  const [dynamicWidth, setWidth] = useState(width);
  const [active, setActive] = useState<Skill>();
  const [hovered, setHovered] = useState<Skill>();

  useLayoutEffect(() => {
    const setDynamicWidthFromParent = () => {
      if (cloudRef.current) {
        const cloudWidth = cloudRef.current.offsetWidth;
        setWidth(cloudWidth);
      }
    }
    
    if (document.readyState === 'complete') {
      setDynamicWidthFromParent();
    }

    ['resize', 'load'].forEach(event => 
      window.addEventListener(event, setDynamicWidthFromParent)
    );
    
    return () => {
      ['resize', 'load'].forEach(event => 
        window.removeEventListener(event, setDynamicWidthFromParent)
      );
    }
  })

  const onWordClick = (event?: React.MouseEvent<SVGTextElement, MouseEvent>) => {
    if (event === undefined) {
      throw new Error('event is undefined');
    }

    const word = event.currentTarget.textContent || '';
    const skill = skills.find(skill => skill.name.includes(word))
    if (skill === undefined) {
      throw new Error('skill not found');
    }

    const element = event.currentTarget;
    if (active && active.name === word) {
      _resetActive();
    } else {
      _resetActiveClass();
      element.classList.add('active');
      setActive({
        ...skill,
        name: skill.name.includes('/') ? word : skill.name
      });
    }
  }

  const onWordMouseOver = (event?: React.MouseEvent<SVGTextElement, MouseEvent>) => {
    if (event === undefined) {
      throw new Error('event is undefined');
    }

    const word = event.currentTarget.textContent || '';
    const skill = skills.find(skill => skill.name.includes(word))
    if (skill === undefined) {
      throw new Error('skill not found');
    }

    if (active === undefined && hovered?.name !== word) {
      const element = event.currentTarget;
      if (!element.classList.contains('hovered')) {
        element.classList.add('hovered');
      }

      setHovered({
        ...skill,
        name: skill.name.includes('/') ? word : skill.name
      });
    }
  }

  const onWordMouseOut = (event?: React.MouseEvent<SVGTextElement, MouseEvent>) => {
    if (event === undefined) {
      throw new Error('event is undefined');
    }

    const word = event.currentTarget.textContent || '';
    const skill = skills.find(skill => skill.name.includes(word))
    if (skill === undefined) {
      throw new Error('skill not found');
    }

    if (active === undefined && hovered?.name === word) {
      setHovered(undefined);
    }

    const element = event.currentTarget;
    if (element.classList.contains('hovered')) {
      element.classList.remove('hovered');
    }
  }

  const _resetActive = () => {
    _resetActiveClass();
    setActive(undefined);
  }

  const _resetActiveClass = () => {
    document.querySelectorAll('.Cloud svg text').forEach(text => 
      text.classList.remove('active')
    );
  }

  const settings: WordCloudProps = {
    words: mapSkillToWord(skills),
    width: dynamicWidth,
    height,
    colors: ['#000', '#5e5e5e', '#bababa', '#a6a6a6', '#dfdfdf'],
    font: 'Mulish',
    fontWeight: '1000',
    fontRange: [21, 64],
    onWordClick,
    onWordMouseOver,
    onWordMouseOut
  }

  return (
    <section className="WordCloud">
      <section className="Cloud" ref={cloudRef}>
        <WordCloud {...settings} />
      </section>
      <section className="Word-details">
        <h4>{active?.name || hovered?.name}</h4>
        <h5>{mapScoreToProficiencyLevel(active?.score || hovered?.score)}</h5>
        <p>{active?.details || hovered?.details}</p>
      </section>
    </section>
  )
}