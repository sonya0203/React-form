import { TextField } from '@mui/material'
import React from 'react'

export default function CustomInput({value="",name="",handleChange=()=>{},...props}) {
  return (
        <TextField onChange={handleChange} size='small' name={name} value={value}/>
  )
}
