import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgTwo from '../components/SecondHeroImg'

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <HeroImgTwo
        heading='PORTFOLIO'
        text='These are some of my more recent projects. Enjoy'
      />
      <Footer />
    </div>
  )
}

export default Portfolio
