import React, { PropsWithChildren, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Visibility } from '../lib/models';

interface AnimatedElementProps extends PropsWithChildren {
  timeout: number;
  visibility: Visibility;
  enterActive: string;
  exitActive: string;
  className?: string;
}

const AnimatedElement = ({ 
  visibility,
  timeout,
  enterActive,
  exitActive,
  className = '',
  children 
}: AnimatedElementProps) => {
  const [visible, setVisible] = useState(false);
  const [nameClasses, setNameClasses] = useState('v-hidden');

  const transitionClassNames = {
    enterActive, 
    exitActive
  }

  const show = () => {
    setNameClasses('v-visible');
  }
  const hide = () => setNameClasses('v-hidden');

  useEffect(() => {
    setVisible(visibility === 'visible' ? true : false);
  }, [visibility]);

  return (
    <CSSTransition
      in={visible}
      timeout={timeout}
      classNames={transitionClassNames}
      onEnter={show}
      onExited={hide}
      className={`animate__animated ${nameClasses} ${className}`}
    >
      {children}
    </CSSTransition>
  )
}

export default AnimatedElement;
