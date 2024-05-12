    import { Button } from '@mui/material'
import React from 'react'
    
    export default function CustomButton({text,variant,handleClick,name,...props}){
      return (
        <div>
 <Button variant={variant} onClick={()=>handleClick(name)}>{text}</Button>      
   </div>
      )
    }
    