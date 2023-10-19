import React, { useEffect, useRef, useState } from 'react';
import { hasScrolled, percentageScrolled, useIsInViewport } from '../../lib/functions';
import AnimatedElement from '../AnimatedElement';

interface IntroductionSectionProps {
  introduction: string;
}

const IntroductionSection = (props: IntroductionSectionProps) => {
  const [vertLineHeight, _setVertLineHeight] = useState(50);
  const vertLineHeightRef = useRef(vertLineHeight);
  const setVertLineHeight = (height: number) => {
    vertLineHeightRef.current = height;
    _setVertLineHeight(height);
  }

  const nodeRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIsInViewport(nodeRef, 0.5);

  useEffect(() => {
    const handleScroll = () => {
      if (hasScrolled(nodeRef, 0.5)) {
        const scrolled = percentageScrolled(nodeRef);
        setVertLineHeight(scrolled);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <section className="Introduction" ref={nodeRef}>
      <AnimatedElement
        visibility={isInViewport ? 'visible' : 'hidden'}
        timeout={1250}
        enterActive='animate__fadeInRight'
        exitActive='animate__fadeOutRight'
      >
        <p>{props.introduction}</p>
      </AnimatedElement>
      <div className="VerticalLine" style={{ height: `${vertLineHeight}%` }}/>
    </section>
  )
}

export default IntroductionSection;