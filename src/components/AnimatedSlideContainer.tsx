import React, { PropsWithChildren } from 'react';

interface AnimatedSlideContainerProps extends PropsWithChildren {
  backgroundColor?: string;
  logo?: string;
  className?: string;
}

export default function AnimatedSlideContainer({
  backgroundColor = 'white',
  logo,
  className = '', 
  children
}: AnimatedSlideContainerProps) {
  return (
    <div className={`AnimatedSlideContainer ${className}`}>
      <div className="Animated-bg" style={{backgroundColor}}/>
      <section className="Animated-children">{children}</section>
      {
        logo ? <img src={logo} alt="Logo" className="Logo" /> : null
      }
    </div>
  )
}