import React from 'react';
import './style.css';
export default function ContactForm() {
  return (
    <form action='https://formspree.io/xvowdyvo' method='POST'>
      <div className='form-group'>
        <label for='_replyto'>Your Email:</label>
        <input
          className='email'
          name='_replyto'
          type='text'
          placeholder='YourEmailHere@email.com'
        />
        <label for='message'>Your Message:</label>
        <textarea
          className='message-box'
          name='message'
          placeholder='Your message here!'
        ></textarea>
        <div className='center'>
          <button className='btn submit-btn' type='submit'>
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
