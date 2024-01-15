import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div>About page</div>
    <div><Link to="/" >Home</Link></div>
    <div><Link to="/users/sanjay" >Sanjay</Link></div>
    <div><Link to="/users/ganya" >Ganya</Link></div>
    <div><Link to="/users/sam" >Sam</Link></div>
    <div><Link to="/users/nikita" >Nikita</Link></div>
    <div><Link to="/users/kalika" >Kalika</Link></div>

    </>
  )
}

export default About