import React from 'react'

function LocalStorage() {
    var key=prompt("enter your name")
    var value=prompt("enter your surname")
    localStorage.setItem(key,value)
   
   console.log(`key is${key}value${localStorage.getItem(key)}`)
  return (
    <div>LocalStorage</div>
  )
}

export default LocalStorage