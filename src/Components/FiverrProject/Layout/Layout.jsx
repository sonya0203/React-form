import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <div className='app'>
          <NavBar />
          <Outlet />
          <Footer />
        </div>
  )
}

export default Layout