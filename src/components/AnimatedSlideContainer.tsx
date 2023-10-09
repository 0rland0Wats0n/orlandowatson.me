import React, { Children, PropsWithChildren, useEffect, useRef, useState } from 'react';

export interface AnimatedSlideContainerSection {
  title: string;
  order: number;
}

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
  const [activeChild, setActiveChild] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const arrayChildren = Children.toArray(children);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.onwheel = (event => {
        if (containerRef.current && !isAnimating) {
          const deltaY = event.deltaY;
          setIsAnimating(true);
          console.log(deltaY);
          if (deltaY > 0) {
            setActiveChild(activeChild+1);
          } else if (deltaY < 0 && (activeChild-1) >= 0) {
            setActiveChild(activeChild-1);
          }
          setTimeout(() => {
            setIsAnimating(false);
          }, 2000);
        }
      })
    }
  });

  return (
    <div className={`AnimatedSlideContainer ${className}`} ref={containerRef}>
      <div className="Animated-bg" style={{backgroundColor}}/>
      <section className="Animated-children">
        {
          Children.map(arrayChildren, (child, index) => {
            return (
              <div className="Animated-child" data-is-active={activeChild === index+1}>
                {child}
              </div>
            )
          })
        }
      </section>
      {
        logo ? <img src={logo} alt="Logo" className="Logo" /> : null
      }
    </div>
  )
}