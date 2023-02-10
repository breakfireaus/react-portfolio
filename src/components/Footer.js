import './FooterStyle.css'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='leftside'>
          <div className='socialmedia'>
            <Link to='https://www.facebook.com/money.maker.matty'>
              <FaFacebook
                size={35}
                style={{ color: 'white', marginRight: '1rem' }}
              />
            </Link>
            <Link to='https://github.com/breakfireaus'>
              <FaGithub
                size={35}
                style={{ color: 'white', marginRight: '1rem' }}
              />
            </Link>
            <Link to='https://www.linkedin.com/in/matthew-yc/'>
              <FaLinkedin
                size={35}
                style={{ color: 'white', marginRight: '1rem' }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
