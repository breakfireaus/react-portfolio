import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [mouse, setMouse] = useState(false)

  const handleMouse = () => setMouse(!mouse)

  return (
    <div className='header'>
      <Link to={'/'}>
        <h1>Portfolio</h1>
      </Link>
      <ul className={mouse ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link to='/resume'>Resume</Link>
        </li>{' '}
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleMouse}>
        {mouse ? (
          <FaTimes size={25} style={{ color: 'white' }} />
        ) : (
          <FaBars size={25} style={{ color: 'white' }} />
        )}
      </div>
    </div>
  )
}

export default Navbar
