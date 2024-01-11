import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'

       
function Router() {
  return (
    <>
    {/* <div>Router</div> */}
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router