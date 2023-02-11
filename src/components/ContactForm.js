import './ContactFormStyle.css'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_iyrwp7q',
        'template_7tv5043',
        form.current,
        'zTV4Z9vdPIucGF4nR'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type='text' name='user_name' required />
      <label>Email</label>
      <input type='email' name='user_email' required />
      <label>Message</label>
      <textarea name='message' />
      <input className='btn' type='submit' value='Send' />
    </form>
  )
}

export default ContactForm
