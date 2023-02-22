import React from 'react';
import './ResumePageStyle.css';
import Resume2 from '../assets/Full-Stack-Developer-Matthew_Younger-Chudnovsky-Resume.pdf';
import mern from '../assets/Mernstack.jpg';

export default function Resume() {
  return (
    <div className='form-container'>
      <a href={Resume2} download='MATTHEW_YOUNGER_CHUDNOVSKY_RESUME'>
        <button id='resume' className='btn'>
          <div className='content'>
            <div className='text'>
              <h2>Resume 📃</h2>
              <p>Click here to download my resume.</p>
            </div>
          </div>
        </button>
      </a>
      <div>
        <h1 className='techskills'>Technical Skills</h1>
        <img classname='mernstack' alt='mern stack' src={mern} />
        <h4 className='techskills h4'>Front End</h4>
        <p className='techskills h4'>
          HTML5, CSS3, Bootstrap, Tailwind, JavaScript, ReactJS
        </p>
        <h4 className='techskills h4'>Back End</h4>
        <p className='techskills h4'>
          Node.js, Express.js, MongoDB, MySQL, Sequelize ORM
        </p>
      </div>
    </div>
  );
}
