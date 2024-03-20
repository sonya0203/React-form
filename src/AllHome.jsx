import React from 'react'
import { Link } from 'react-router-dom'
function WikiHome() {
  return (
    <>
      <div><Link to="/WikipediaProject">WikipediaProject</Link></div>
      <div> <Link to="/Form">Form</Link></div>
      <div> <Link to="/LocalStorage">LocalStorage</Link></div>
      <div> <Link to="/Fetch">Fetch</Link></div>
      <div> <Link to="/Props">Props</Link></div>
      <div> <Link to="/SetInterval">SetInterval</Link></div>
      <div> <Link to="/Project1">Project1</Link></div>
      <div> <Link to="/ArrayMethods">ArrayMethods</Link></div>
      <div> <Link to="/ObjectMethods">ObjectMethods</Link></div>
      <div> <Link to="/StringMethods">StringMethods</Link></div>
      <div> <Link to="/ReusableInput">ReusableInput</Link></div>
      <div> <Link to="/CustomHook">CustomHook</Link></div>
      <div> <Link to="/UseReducer">UseReducer</Link></div>
      <div> <Link to="/Redux">Redux</Link></div>

    </>
  )
}

export default WikiHome