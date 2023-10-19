import React, { useRef } from 'react';

import { ContactInformation } from "../../lib/models";
import { SocialIcons } from "../../lib/resume.data";
import AnimatedElement from '../AnimatedElement';
import { useIsInViewport } from '../../lib/functions';

interface ContactsSectionProps {
  contacts: ContactInformation[];
  white?: boolean;
}

export default function ContactsSection({
  contacts,
  white
}: ContactsSectionProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIsInViewport(nodeRef, 0.5);

  return (
    <section className="Contacts" ref={nodeRef}>
      <AnimatedElement
        visibility={isInViewport ? 'visible' : 'hidden'}
        timeout={1250}
        enterActive='animate__fadeInLeft'
        exitActive='animate__fadeOutLeft'
        className='Contacts-title'
      >
        <h4>&gt; get in touch</h4>
      </AnimatedElement>
      <div className="Contacts-inner">
        {
          contacts.map(contact => {
            return (
              <AnimatedElement
                key={contact.type}
                visibility={isInViewport ? 'visible' : 'hidden'}
                timeout={1250}
                enterActive='animate__fadeIn'
                exitActive='animate__fadeOut'
                className="Contact-link"
              >
                <a 
                  href={contact.link} 
                  target="_blank" 
                  rel="noreferrer" 
                >
                  <p className="Contact-link-handle">{contact.handle}</p>
                  <img 
                    src={white ? SocialIcons[contact.type].white : SocialIcons[contact.type].default} 
                    alt={`${contact.type} logo`} 
                    className="Contact-link-logo" 
                  />
                </a>
              </AnimatedElement>
            )
          })
        }
      </div>
    </section>
  )
}