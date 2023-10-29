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
    <AnimatedElement
      className="SocialButton"
      timeout={2000}
      visibility={isInView ? 'visible' : 'hidden'}
      enterActive='animate__bounceInn'
      exitActive='animate__bounceOut'
    >
      <div ref={buttonRef} onClick={_handleButtonClick}>
        <img src={SocialIcons[contact.type]} alt="contact icon" />
        <span className="Divider" />
        <Text size='small'>{contact.handle}</Text>
      </div>
    </AnimatedElement>
  )
}

export default SocialButton;