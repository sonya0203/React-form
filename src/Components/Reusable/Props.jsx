import React, { useEffect, useState } from 'react'
import Data from "./Data"
function Props() {
  const [bgcolor,setbgcolor]=useState('white')
  function ChangeBack(color){
setbgcolor(color)
  }
  useEffect(() => {
    document.body.style.backgroundColor = bgcolor;
});
  return (<>
<Data ChangeBack={ChangeBack}/>
    </>
  )
}

export default Props