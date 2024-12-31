import React from 'react'
import {Home} from "./Pages/Home";
import {ProductPage} from "./Pages/ProductPage";
import {ProductDetail} from "./Pages/ProductDetail";
import LoginPage from "./Pages/LoginPage";

import {SignUpPage} from "./Pages/SignUpPage";
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>

  <Route path='/' element={<Home/>}></Route>
  <Route path='/products' element={<ProductPage/>}></Route>
  <Route path='login' element={<LoginPage/>}></Route>
  <Route path='/signup' element={<SignUpPage/>}></Route>
  <Route path="/product-detail/:productId" element={<ProductDetail />}/></Routes>

    </>
  )
}

export default App