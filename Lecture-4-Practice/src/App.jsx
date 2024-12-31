import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from '../src/Pages/About';
import Services from '../src/Pages/Services';
import Projects from '../src/Pages/Projects';
import Contact from '../src/Pages/Contact';
import Home from '../src/Pages/Home';
import NavBar from './Component/NavBar';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
  
    </div>
  )
}

export default App