import React from 'react'
import Add from './Add'
import { Create } from './Create'
import Subtract from './Sub'

function Main() {
    return (
        <Create>
         <Add />
         <Subtract/>
        </Create>
    )
}

export default Main