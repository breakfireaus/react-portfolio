import './AboutContentStyle.css'
import React from 'react'
import { Link } from 'react-router-dom'
import reactimage2 from '../assets/reactimage2.jpg'

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='leftside'>
        <h1> Who Am I?</h1>
        <p>
          I am a Full Stack developer leveraging a background in
          Entrepreneurship, Arts and Sales to provide unique perspectives on how
          end-users interact with websites and software platforms. Earned a
          certificate in Full Stack full stack development from Monash
          University Coding Boot Camp. Innovative problem-solver who is
          passionate about developing apps with a focus on responsive design and
          development. Strengths in creativity, teamwork, and building projects
          from ideation to execution.
        </p>
      </div>
      <Link to='/contact'>
        <button className='btn'>Contact Me</button>
      </Link>

      <div className='rightside'>
        <div className='image-container'>
          <div className='image-stack bottom'>
            <img src={reactimage2} className='image' alt='react imagery 2' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
