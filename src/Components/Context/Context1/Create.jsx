import React, { createContext, useState } from 'react'
const abc=createContext()
function Create({children}) {
   

    const[count,setCount]=useState(0)
    const Add=()=>{
        setCount(count+1)
    }
    const Sub=()=>{
      setCount(count-1)
    }
  return (
    <abc.Provider value={{count ,Add,Sub}}>
        {children}
    </abc.Provider>
  )
}


export {abc,Create}