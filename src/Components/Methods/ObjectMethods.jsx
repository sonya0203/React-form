import React from 'react'

function ObjectMethods() {
    const obj={name:"sanjay",surname:"gawade",education:"diploma"}
    const WorkDetails={designation:"Web Developer"}
    const Info=Object.create(obj)
    console.log(Info.name)
    // Object.freeze(obj);
    // Object.seal(obj)
// const a=obj.name="ganya";
// const b=Object.assign(obj,WorkDetails)
// console.log(obj.hasOwnProperty("name"))
    // console.log(a)
/// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))


    return (
    <div>ObjectMethods</div>
    
  )
}
export default ObjectMethods