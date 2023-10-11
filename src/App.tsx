import './styles/App.scss';

import React, { useEffect, useRef, useState, useMemo } from 'react';

import RESUME_DATA, { SocialLogos } from './lib/resume.data';

import NameAndTitleWithFlag from './components/NameAndTitleWithFlag';
import ResumeSection from './components/ResumeSection';
import EducationSection from './components/ResumeSection/EducationSection';
import ExperienceSection from './components/ResumeSection/ExperienceSection';
import TechStackSection from './components/ResumeSection/TechStackSection';
import ContactsSection from './components/ResumeSection/ContactsSection';
import AnimatedSlideContainer from './components/AnimatedSlideContainer';
import { ResumeConfiguration, Transition, Active, TransitionDirection } from './lib/models';
import { log, throttle } from './lib/functions';
import AnimatedScrollIcon from './components/AnimatedScrollIcon';

const { 
  name, 
  title, 
  country, 
  introduction, 
  education,
  experience,
  skills, 
  contact 
} = RESUME_DATA;

const sections = Object.keys(RESUME_DATA) as Array<keyof ResumeConfiguration>;
const defaultTransition: Transition = {
  isTransitioning: false,
  direction: 'forward',
  timeInMs: 1000
}
const defaultActive: Active = {
  left: -1,
  right: 0
}

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeLeft, _setActiveLeft] = useState(defaultActive.left);
  const [activeRight, _setActiveRight] = useState(defaultActive.right);
  const [leftStack, _setLeftStack] = useState<React.ReactNode[]>([]);
  const [transitioning, _setTransitioning] = useState(defaultTransition.isTransitioning);
  const [transitionDirection, setTransitionDirection] = useState<TransitionDirection>(defaultTransition.direction);
  const [transitionTimeInMs, setTransitionTimeInMs] = useState(defaultTransition.timeInMs);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const activeLeftRef = useRef(activeLeft);
  const activeRightRef = useRef(activeRight);
  const transitioningRef = useRef(transitioning);
  const leftStackRef = useRef(leftStack);

  const setActiveLeft = (active: number) => {
    activeLeftRef.current = active
    _setActiveLeft(active);
  }

  const setActiveRight = (active: number) => {
    activeRightRef.current = active
    _setActiveRight(active);
  }

  const setTransitioning = (transitioning: boolean) => {
    transitioningRef.current = transitioning;
    _setTransitioning(transitioning);
  }

  const setLeftStack = (stack: React.ReactNode[]) => {
    leftStackRef.current = stack;
    _setLeftStack(stack);
  }

  const handleNextClick = () => {
    // setTransitioning(true)
    log('next clicked')
  }

  const leftSideChildren: Record<keyof ResumeConfiguration, (key?: string) => React.ReactNode> = useMemo(() => {
    return {
      name: (key?: string) => <NameAndTitleWithFlag name={name} key={key} />,
      title: (key?: string) => <NameAndTitleWithFlag name={name} title={title} key={key} />,
      country: (key?: string) => <NameAndTitleWithFlag name={name} title={title} country={country} key={key} />,
      introduction: (key?: string) => {
        return (
          <section className="Introduction" key={key}>
            <p>{introduction.full || introduction.short}</p>
          </section>
        )
      },
      education: (key?: string) => {
        return (
          <ResumeSection 
            title="education"
            introduction={education.introduction}
            key={key}
          >
            <EducationSection education={education.data} />
          </ResumeSection>
        )
      },
      experience: (key?: string) => {
        return (
          <ResumeSection title="experience" key={key}>
            <ExperienceSection experiences={experience.data} />
          </ResumeSection>
        )
      },
      skills: (key?: string) => {
        return (
          <ResumeSection
            title="tech stack"
            introduction={skills.introduction}
            key={key}
          >
            <TechStackSection skills={skills.data} windowWidth={windowWidth} />
          </ResumeSection>
        )
      },
      contact: (key?: string) => {
        return (
          <ResumeSection title="get in touch" key={key}>
            <ContactsSection contacts={contact.data} />
          </ResumeSection>
        )
      }
    }
  }, [windowWidth])

  const rightSideChildren: Record<keyof ResumeConfiguration, () => React.ReactNode> = {
    name: () => null,
    title: () => <h2 className="Right-title">i am a {title}</h2>,
    country: () => <h2 className="Right-country">i am from {country.name}</h2>,
    introduction: () => <h4 className="Right-intro">{introduction.short}</h4>,
    education: () => <h2 className="Right-education">i have a {education?.data.degree} degree from {education?.data.school}</h2>,
    experience: () => {
      return (
        <section className="Right-experience">
          <h2>i have professional experience building:</h2>
          <ul>
            {
              experience?.data
                .find(exp => exp.company === 'microsoft')
                ?.skills.map(skill => <li>{skill}</li>)
            }
          </ul>
        </section>
      )
    },
    skills: () => {
      return (
        <section className="Right-skills">
          <h2>my ever-evolving technical stack includes:</h2>
          <ul>
            {
              skills?.data.map((skill, i) => {
                if (i < 6) {
                  return (
                    <li>{skill.name}</li>
                  )
                }

                return null;
              })
            }
          </ul>
        </section>
      )
    },
    contact: () => {
      return (
        <section className="Right-contack">
          <h2>find me online and get in touch</h2>
          <ul>
            {
              contact?.data.map(c => {
                return (
                  <li>
                    <a href={c.link} key={c.type}>
                      <p>{c.handle}</p>
                      <img src={SocialLogos[c.type]} alt={`${c.type} logo`} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </section>
      )
    }
  }

  useEffect(() => {
    const getAndSetWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    }

    if (document.readyState === 'complete') {
      getAndSetWindowWidth();
    }

    window.addEventListener('resize', getAndSetWindowWidth);
    return () => {
      window.removeEventListener('resize', getAndSetWindowWidth);
    }
  })

  useEffect(() => {
    const updateTransition = (
      transitioning: boolean, 
      direction: TransitionDirection = defaultTransition.direction, 
      time: number = defaultTransition.timeInMs
    ) => {
      setTransitioning(transitioning);
      setTransitionDirection(direction);
      setTransitionTimeInMs(time);
  
      if (transitioning) {
        setTimeout(() => updateTransition(false), transitionTimeInMs+500);
      }
    }
  
    const updateActiveCount = (direction: TransitionDirection = transitionDirection) => {
      setTransitionDirection(direction);
  
      const l = sections.length;
      const activeLeftCurrent = activeLeftRef.current;
      const activeRightCurrent = activeRightRef.current;
      if (direction === 'forward' && activeRightCurrent < l && activeLeftCurrent < l) {
        const nextLeft = activeLeftCurrent+1;
        setActiveLeft(nextLeft);
        setActiveRight(activeRightCurrent+1);
        updateLeftStack(direction, nextLeft);
        return;
      }
  
      if (direction === 'backward' && activeLeftCurrent > -1 && activeRightCurrent > 0) {
        const prevLeft = activeLeftCurrent-1;
        setActiveLeft(prevLeft);
        setActiveRight(activeRightCurrent-1);
        updateLeftStack(direction, prevLeft);
        return;
      }
    }
  
    const updateLeftStack = (direction: TransitionDirection, active: number) => {
      const as = sections[active];
      if (active > -1 && active <= 2) {
        setLeftStack([leftSideChildren[as](as)]);
      } else {
        const newStack = direction === 'forward' ? 
          [...leftStackRef.current, leftSideChildren[as](as)] :
          leftStackRef.current.slice(0, -1)
        setLeftStack(newStack);
      }
    }

    const handleWheelRightSide = (event: WheelEvent) => {
      const currentRight = rightRef.current;
      if (currentRight && !transitioningRef.current) {
        const direction: TransitionDirection = event.deltaY > 0 ? 'forward' : 'backward';
        updateTransition(true);
        updateActiveCount(direction);
      }
    }

    const handleWheelLeftSide = (event: WheelEvent) => {
      const currentLeft = leftRef.current;
      if (currentLeft && activeLeftRef.current === -1 && event.deltaY > 0) {
        updateTransition(true);
        updateActiveCount('forward');
      }
    }

    const cleanUp = () => {
      if (windowWidth < 900) {
        rightRef.current?.removeEventListener('wheel', throttle(handleWheelRightSide, transitionTimeInMs));
        leftRef.current?.removeEventListener('wheel', throttle(handleWheelLeftSide, transitionTimeInMs));
      }
    }

    if (windowWidth >= 900) {
      rightRef.current?.addEventListener('wheel', throttle(handleWheelRightSide, transitionTimeInMs));
      leftRef.current?.addEventListener('wheel', throttle(handleWheelLeftSide, transitionTimeInMs));
    }

    window.addEventListener('resize', cleanUp);

    return () => {
      window.removeEventListener('resize', cleanUp);
    }
  });

  const _renderLeftSide = () => {
    if (windowWidth < 900) {
      return (
        <>
          {leftSideChildren.country()}
          {leftSideChildren.introduction()}
          {leftSideChildren.education()}
          {leftSideChildren.experience()}
          {leftSideChildren.skills()}
          {leftSideChildren.contact()}
        </>
      )
    }

    if (activeLeft === -1) {
      return (
        <>
          <NameAndTitleWithFlag name={`i am ${name}`} />
          <AnimatedScrollIcon delay={5000} onClick={handleNextClick}/>
        </>
      )
    }

    return (
      <>{leftStack}</>
    )
  }

  const _renderRightSide = () => {
    if (windowWidth >= 900 && activeRight > 0) {
      if (activeRight >= sections.length) {
        return null;
      }

      const currentSection = sections[activeRight];
      return rightSideChildren[currentSection]();
    }
  }

  return (
    <div className="App">
      <section 
        className="App-left"
        data-is-at-start={activeLeft === -1}
        ref={leftRef}
      >
        {_renderLeftSide()}
      </section>
      <AnimatedSlideContainer
        className='App-right'
        backgroundColor='#333'
        atStart={activeRight === 0}
        ref={rightRef}
      >
        {_renderRightSide()}
      </AnimatedSlideContainer>
    </div>
  );
}

export default App;
