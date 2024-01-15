import React from 'react'
import { Link } from 'react-router-dom'


function Login() {

  return (
    <>

<div><input type='text'></input></div>
<div><input type='text'></input></div>
<button type='login'>Login</button>
   
  <div>
    <Link to="/">Home</Link></div>
    <div><Link to ="/about">About</Link></div>
    </>
  )
}

export default Login