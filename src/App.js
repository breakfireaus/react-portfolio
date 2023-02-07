import React from 'react'
import './index.css'
import Home from './routes/Home'
import Resume from './routes/Resume'
import Portfolio from './routes/Portfolio'
import Contact from './routes/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/porfolio' element={<Portfolio />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
