import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Users() {
    const params= useParams()
    const{name}=params
  return (
    <>
    <p>My name is {name}</p>
    <Link to="/about" >about</Link>

    </>
  )
}

export default Users