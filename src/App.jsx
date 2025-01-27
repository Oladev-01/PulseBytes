import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './Components/LandingPage'
import { About } from './Components/About'
import { Services } from './Components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </Router>
  )
}

export default App
