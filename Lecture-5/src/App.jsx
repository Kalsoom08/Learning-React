import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from '../src/Pages/About';
import Services from '../src/Pages/Services';
import Projects from '../src/Pages/Projects';
import Contact from '../src/Pages/Contact';
import Home from '../src/Pages/Home';
import ProjectDetail from '../src/Pages/ProjectDetail';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/projectDetail/:projectID' element={<ProjectDetail/>}></Route>
      </Routes>
  
    </div>
  )
}

export default App