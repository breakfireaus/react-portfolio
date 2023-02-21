import './FooterStyle.css';
import { FaStackOverflow, FaGithub, FaLinkedin } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='linkIcons'>
          <div className='socialmedia'>
            <a
              href='https://stackoverflow.com/users/21187328/matthew-younger-chudnovsky'
              target='_blank'
            >
              <FaStackOverflow
                size={35}
                style={{ color: 'white', marginRight: '1rem' }}
              />
            </a>
            <a href='https://github.com/breakfireaus' target='_blank'>
              <FaGithub
                size={35}
                style={{ color: 'white', marginRight: '1rem' }}
              />
            </a>
            <a href='https://www.linkedin.com/in/matthew-yc/' target='_blank'>
              <FaLinkedin
                size={35}
                style={{ color: 'white', marginRight: '1rem' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
