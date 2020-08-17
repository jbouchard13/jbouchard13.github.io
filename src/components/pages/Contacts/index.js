import React from 'react';
import ContactForm from '../../ContactForm';
import './style.css';

export default function Contacts() {
  return (
    <div className='background'>
      <div className='contacts-wrapper'>
        <h2 className='title'>How to reach me</h2>
        <p className='contact-text'>
          Feel free to leave me a message here. Whatever you leave goes to my
          email. If you'd prefer to reach out with other means, my phone number
          is 603-793-8457 or check out the links in the navbar.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
