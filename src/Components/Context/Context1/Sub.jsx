import React, { useContext } from 'react'
import { abc} from './Create'
function Subtract() {
    const {Sub}=useContext(abc)
  return (<>
  
    <button onClick={Sub}>Sub</button>
    </>
  )
}

export default Subtract