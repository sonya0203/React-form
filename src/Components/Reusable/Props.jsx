import React from 'react'
 import Data from "./Data"
function Props() {
    const MyName ="Sanjay Gawade";
    const Names=["sanjay","sandesh","sagar","shubham"]
  return (
    <Data name={Names.filter((name)=>name==="sanjay" )} fullname={MyName}/>
  )
}

export default Props