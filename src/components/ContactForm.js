import './ContactFormStyle.css'

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default ContactForm = () => {
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
      <input type='text' name='user_name' />
      <label>Email</label>
      <input type='email' name='user_email' />
      <label>Message</label>
      <textarea name='message' />
      <input type='submit' value='Send' />
    </form>
  )
}
