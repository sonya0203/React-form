import { context } from "./Context"
import React, { useContext } from 'react'

function ApplyContext() {
    const {name}=useContext(context)
  return (
    <div>
   <p>{name}</p>
  
   </div>
  )
}

export default ApplyContext