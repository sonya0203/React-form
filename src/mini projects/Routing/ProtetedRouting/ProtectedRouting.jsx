import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Protect from './Protect'


function ProtectedRouting() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Protect Component={Home}/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/login' element={<Login/>}/>
 
   </Routes>
   </BrowserRouter>
    </>
  )
  
}

export default ProtectedRouting