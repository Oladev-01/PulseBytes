import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import { About } from './Components/About'
import { Services } from './Components/Services'
import Contact from './Components/contact';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
