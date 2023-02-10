import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgTwo from '../components/SecondHeroImg'
import AboutContent from '../components/AboutContent'

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <HeroImgTwo heading='ABOUT' text='I am a Full Stack MERN Developer' />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default Portfolio
