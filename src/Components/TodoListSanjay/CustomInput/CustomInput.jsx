import { Input, TextField } from '@mui/material'
import React from 'react'

export default function CustomInput({value="", name="",handleChange=()=>{},...props}) {
  return (
    <div>
        <TextField size='small' value={value} name={name} onChange={handleChange}></TextField>

    </div>
  )
}

