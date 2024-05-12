import React, { useState } from 'react'
import './DynamikTab.scss'
function DynamikTab() {
    const [tog, setTog] = useState(1)
    const Handle = (id) => {
        setTog(id)
    }
    return (<>
        <div className="container">
            <div className="tab">
            {btns.map((item)=>{
                return(
                <button  onClick={()=>{Handle(item.id) }}>{item.name}</button>
                )
            })}
            
            </div>
       
        <div className="dynamik">
                <div className={tog === 1 ? "tog" : "top"}>
                    <p>Sanjay</p>            </div>
                <div className={tog === 2 ? "tog" : "top"}>
                    <p>Fatu </p>

                </div>
                <div className={tog === 3 ? "tog" : "top"}>
                    <p>Gawade</p>

                </div>
            </div>
            </div>
    </>)
}

export default DynamikTab
const btns=[{name:"First" ,id:1},{name:"Middle",id:2},{name:"Surname" ,id:3}]