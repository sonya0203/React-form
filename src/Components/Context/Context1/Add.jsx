import React, { useContext } from 'react'
import {abc} from './Create'
function Add() {
    const {count,Add}=useContext(abc)

  return (<>
    <p>{count}</p>
    <button onClick={Add}>Add</button>
    </>
  )
}

export default Add