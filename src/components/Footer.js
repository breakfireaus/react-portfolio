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
          <div className='located'>
            <FaHome
              size={25}
              style={{ color: 'white', marginRight: '1.8rem' }}
            />
            <div>
              <p>MELBOURNE, AUSTRALIA</p>
            </div>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk
                size={25}
                style={{ color: 'white', marginRight: '1.8rem' }}
              />
              myoungerc@hotmail.com
            </h4>
          </div>
        </div>

        <div className='rightside'>
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
