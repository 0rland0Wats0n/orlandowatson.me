import React, { useContext, useRef } from 'react';
import { useIsInViewport } from '../lib/functions';
import AnimatedElement from '../components/AnimatedElement';
import Text from '../components/Text';
import SocialButton from '../components/SocialButton';
import ResumeFile from '../lib/download/resume_orlandowatson.pdf';
import ResumeContext from '../lib/ResumeContext';

const Contacts = () => {
  const { contacts } = useContext(ResumeContext);
  const contactsRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInViewport(contactsRef, 0.25);

  return (
    <section className="Contacts" ref={contactsRef}>
      <AnimatedElement
        timeout={2000}
        visibility={isInView ? 'visible' : 'hidden'}
        enterActive='animate__fadeInUp'
        exitActive='animate__fadeOut'
        className='Heading'
      >
        <Text size='large'>find me online</Text>
      </AnimatedElement>
      <section className="ContactItems">
        {
          contacts.map(contact => {
            return <SocialButton key={contact.type} contact={contact} />
          })
        }
      </section>
      <section className="Download">
        <a 
          target="_blank"
          rel="noreferrer"
          href={ResumeFile}
          download
        >
          get resumé
        </a>
      </section>
    </section>
  )
}

export default Contacts;