import './FooterStyle.css'
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
} from 'react-icons/fa'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='leftside'>
          <div className='socialmedia'>
            <FaFacebook
              size={35}
              style={{ color: 'white', marginRight: '1rem' }}
            />
            <FaGithub
              size={35}
              style={{ color: 'white', marginRight: '1rem' }}
            />
            <FaLinkedin
              size={35}
              style={{ color: 'white', marginRight: '1rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
