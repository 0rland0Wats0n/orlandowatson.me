import React, { PropsWithChildren, forwardRef } from 'react';

export interface AnimatedSlideContainerSection {
  title: string;
  order: number;
}

interface AnimatedSlideContainerProps extends PropsWithChildren {
  backgroundColor?: string;
  className?: string;
  atStart?: boolean;
}

const AnimatedSlideContainer = forwardRef<HTMLDivElement, AnimatedSlideContainerProps>((
  {
    backgroundColor = 'white',
    className = '',
    atStart, 
    children
  },
  ref
) => {
  return (
    <div 
      className={`AnimatedSlideContainer ${className}`} 
      ref={ref}
      data-is-at-start={atStart}
    >
      <div className="Animated-bg" style={{backgroundColor}} />
      <section className="Animated-children">
        {children}
      </section>
    </div>
  )
})

export default AnimatedSlideContainer;
