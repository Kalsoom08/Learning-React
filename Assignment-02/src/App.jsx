import React from 'react'
import NavBar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import All from './Pages/All'
import FullStack from './Pages/FullStack'
import Security from './Pages/Security'
import Career from './Pages/Career'
import Footer from './Components/Footer'


const App = () => {
  return (
  <>
  <NavBar/>
<Routes>
  <Route path='/' element={<All/>}></Route>
  <Route path='/fullstack' element={<FullStack/>}></Route>
  <Route path='/security' element={<Security/>}></Route>
  <Route path='/career' element={<Career/>}></Route>
</Routes>
<Footer/>
  </>
  )
}

export default App