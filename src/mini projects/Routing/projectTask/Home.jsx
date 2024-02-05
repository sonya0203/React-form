import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Resister from './Resister'

function Home() {
  return (
   <>
  
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<Login/>}/>
    <Route path='/resister'element={<Resister/>}/>
   </Routes>
   
   </BrowserRouter>
   
   
   </>
  )
}

export default Home