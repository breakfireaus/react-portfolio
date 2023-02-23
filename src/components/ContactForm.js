import './ContactFormStyle.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin } from 'react-icons/fa';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_iyrwp7q',
        'template_7tv5043',
        form.current,
        'zTV4Z9vdPIucGF4nR'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' name='user_name' required />
        <label>Email</label>
        <input type='email' name='user_email' required />
        <label>Message</label>
        <textarea name='message' />
        <input className='btn' type='submit' value='Send' />
        <div>
          <a
            className='btn-custom'
            href='https://www.linkedin.com/in/matthew-yc/'
            target='_blank'
          >
            <FaLinkedin size={20} style={{ color: 'black' }} />
            linkedin
          </a>
          <a
            className='btn-custom'
            href='mailto:myoungerc@hotmail.com'
            target='_blank'
          >
            Email me
          </a>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
