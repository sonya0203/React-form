import React, { useState } from 'react'
import './DynamikTab.scss'
function DynamikTab() {
    const[tog,setTog]=useState(1)
    const Handle=(id)=>{
        setTog(id)
    }
    return (<>
        <button onClick={()=>{Handle(1)}}>top</button>
        <button onClick={()=>{Handle(2)}}>bottom</button>
        <div className="dynamik">
            <div className={tog===1? "tog":"top"}>   
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eaque deserunt culpa cumque similique repellat dolorem neque deleniti nisi tempore!</p>
            </div>
            <div className={tog===2? "tog":"top"}>  
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eaque deserunt culpa cumque similique repellat dolorem neque deleniti nisi tempore!</p>

            </div>
        </div>
        </>)
}

export default DynamikTab