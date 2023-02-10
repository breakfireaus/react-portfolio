import React from 'react'
import './ResumePageStyle.css'

export default function Resume() {
  return (
    <a
      href='./assets/Full-Stack-Developer-Matthew_Younger-Chudnovsky-Resume.pdf'
      download='MATTHEW_YOUNGER_CHUDNOVSKY_RESUME'
    >
      <button id='resume' className='btn'>
        <div className='content'>
          <div className='text'>
            <h2>Resume 📃</h2>
            <p>Click here to download my resume.</p>
          </div>
        </div>
      </button>
    </a>
  )
}
