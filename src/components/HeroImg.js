import './HeroImgStyle.css'
import IntroductionImage from '../assets/bg-image-intro.jpg'
import ProfilePic from '../assets/profilepic.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='facemask'>
        <img
          className='intro-img'
          src={IntroductionImage}
          alt='Introduction Image'
        />
      </div>
      <div className='content'>
        <img className='profile-img' src={ProfilePic} alt='profile Image' />
        <p>HI, I'M A FULL STACK</p>
        <h1> MERN DEVELOPER.</h1>
        <div>
          <Link to='/portfolio' className='btn'>
            Portfolio
          </Link>
          <Link to='/contact' className='btn btn-light'>
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
