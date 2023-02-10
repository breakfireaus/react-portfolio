import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgTwo from '../components/SecondHeroImg'
import Resume from '../components/ResumePage'

const Resumefile = () => {
  return (
    <div>
      <Navbar />
      <HeroImgTwo heading='Resume' text='Below is a copy of my resume' />
      <Resume />
      <Footer />
    </div>
  )
}

export default Resumefile
