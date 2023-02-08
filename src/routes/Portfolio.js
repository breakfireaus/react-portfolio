import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgTwo from '../components/SecondHeroImg'

import Project from '../components/Project'

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <HeroImgTwo
        heading='PORTFOLIO'
        text='These are some of my more recent projects. Enjoy'
      />
      <Project />
      <Footer />
    </div>
  )
}

export default Portfolio
