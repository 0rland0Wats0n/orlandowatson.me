import React, { useRef } from 'react';
import { ContactInformation } from '../lib/models';
import { useIsInViewport } from '../lib/functions';
import AnimatedElement from './AnimatedElement';
import Text from './Text';
import SocialIcons from '../lib/SocialIcons';

interface SocialButtonProps {
  contact: ContactInformation;
}

const SocialButton = ({ contact }: SocialButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInViewport(buttonRef, 0.15);

  const _handleButtonClick = () => {
    window.open(contact.link, '_blank');
  }

  return (
      <div ref={buttonRef} className="SocialButton" onClick={_handleButtonClick}>
        <AnimatedElement
          timeout={2000}
          visibility={isInView ? 'visible' : 'hidden'}
          enterActive='animate__fadeInDown'
          exitActive='animate__fadeOut'
        >
          <img src={SocialIcons[contact.type]} alt="contact icon" />
        </AnimatedElement>
        <span className="Divider" />
        <AnimatedElement
          timeout={2000}
          visibility={isInView ? 'visible' : 'hidden'}
          enterActive='animate__fadeInUp'
          exitActive='animate__fadeOut'
        >
          <Text size='small'>{contact.handle}</Text>
        </AnimatedElement>
      </div>
  )
}

export default SocialButton;