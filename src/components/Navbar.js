import './NavbarStyle.css'

import React from 'react'

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='header'>
      <Link to={'/'}>
        <h1>Porfolio</h1>
      </Link>
    </div>
  )
}
