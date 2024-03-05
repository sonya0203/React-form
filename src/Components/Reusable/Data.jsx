import React from 'react'

function data(props) {
  return (<>
<div><button onClick={()=>props.ChangeBack("black")}>black</button></div>
<div><button onClick={()=>props.ChangeBack("blue")}>blue</button></div>
<div><button onClick={()=>props.ChangeBack("pink")}>pink</button></div>
<div><button onClick={()=>props.ChangeBack("orange")}>orange</button></div>

    </>
  )
}

export default data