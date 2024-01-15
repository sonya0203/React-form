import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'

import Users from './Users'

function DynamicRouting() {
  return (
  <>
    <div>DynamicRouting</div>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/users/:name' element={<Users/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default DynamicRouting