import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgTwo from '../components/SecondHeroImg'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImgTwo heading='CONTACT' text='Lets talk' />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
