import './FooterStyle.css'
import { FaStackOverflow, FaGithub, FaLinkedin } from 'react-icons/fa'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='linkIcons'>
          <div className='socialmedia'>
            <Link to='https://stackoverflow.com/users/21187328/matthew-younger-chudnovsky'>
              <FaStackOverflow
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
