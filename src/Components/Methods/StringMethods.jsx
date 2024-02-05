// import React from 'react'

// function StringMethods() {
//     var str="sanjay gawade"
//     // var Sname="gawade"
//     // console.log(str.charAt(2))
//     // console.log(str.length)
//     // console.log(str.toUpperCase())
//     // console.log(str.charAt(2))
//     // let b=str.replace("sanjay","deep")
// //    let a= str.repeat(4)
// // let a=str.at(2)
// // let a=str.slice(1,5)
// // let a=str.substring(0,3)
// let a=str.replaceAll("sanjay gawade","deep plav")

//     console.log(a)

//   return (
//     <div>StringMethods</div>
//   )
// }

// export default StringMethods
import React from 'react'

function StringMethods() {
  function stringToArray(string){
    const a=string.split("")
    return a
    }
    const str="Robin Singh"
    const result=stringToArray(str)
  return (
    <div>StringMethods</div>
  )
}

export default StringMethods