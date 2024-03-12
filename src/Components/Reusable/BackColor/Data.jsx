import React from 'react'

function data(props) {
  return (<>
<div><button onClick={()=>props.ChangeBack("black")}>Black</button></div>
<div><button onClick={()=>props.ChangeBack("purple")}>Purple</button></div>
<div><button onClick={()=>props.ChangeBack("pink")}>Pink</button></div>
<div><button onClick={()=>props.ChangeBack("orange")}>Orange</button></div>
<div><button onClick={()=>props.ChangeBack("yellow")}>Yellow</button></div>
<div><button onClick={()=>props.ChangeBack("white")}>white</button></div>

    </>
  )
}

export default data