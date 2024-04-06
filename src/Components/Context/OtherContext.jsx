import React, { useContext } from 'react'
import { context } from './Context'

function OtherContext() {
    const user=useContext(context)
  return (
    <>
   <div> hey {user} How are you</div>
    </>
  )
}

export default OtherContext