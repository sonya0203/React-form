import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function NestedRouting() {
  return (
    <>
    <div>NestedRouting</div>
    <BrowserRouter>
    <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about'  element={<About/>}/>

        <Route path='/contact'  element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default NestedRouting