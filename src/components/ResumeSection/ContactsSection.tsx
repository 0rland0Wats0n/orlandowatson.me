import React from 'react';

import { ContactInformation } from "../../lib/models";
import { SocialLogos } from "../../lib/resume.data";

export default function ContactSection({contacts}: {contacts: ContactInformation[]}) {
  if (!contacts) {
    return null;
  }

  return (
    <section className="ContactsSection">
      {
        contacts.map(contact => {
          return (
            <a href={contact.link} className="Contact-link" key={contact.type}>
              <img 
                src={SocialLogos[contact.type]} 
                alt={`${contact.type} logo`} 
                className="Contact-link-logo" 
              />
              <p className="Contact-link-handle">{contact.handle}</p>
            </a>
          )
        })
      }
    </section>
  )
}