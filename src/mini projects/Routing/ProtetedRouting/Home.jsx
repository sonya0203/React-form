import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
  <>
<div>Home page</div>
<div>
<Link to="/">Home</Link></div>
<div><Link to ="/about">About</Link></div>
<div><Link to ='/login'>Login</Link></div>

    </>
  )
}

export default Home