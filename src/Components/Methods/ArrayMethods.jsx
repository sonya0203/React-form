import React from 'react'

function ArrayMethods() {
    let array1=[2, 33,4,65,7,77]
    // let array2=[1,6,8,88]
    let b=array1.toString()
   let remove= array1.pop()
   let add= array1.push(8)
   let startAdd= array1.unshift(1)
   let startrem= array1.shift()
   let joining=array1.join("-")
  // const con= array1.concat(array2)
   let del=delete array1[0]
   console.log(array1)
  return (
    <div>ArrayMethods</div>
  )
}

export default ArrayMethods