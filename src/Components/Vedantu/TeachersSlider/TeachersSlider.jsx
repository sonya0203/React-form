import React from 'react'
import './TeachersSlider.scss'
function TeachersSlider({ data }) {
    return (
        <div className="teachersSlider">
            <div className="teacherContainer">
                <img src={data.img} alt="" />
                <div className="info">
                    <span>{data.exp}</span>
                    <h3>{data.name}</h3>
                    <p>{data.master}</p>
                    <h3>{data.location}</h3>
                </div>
            </div>
        </div>
    )
}

export default TeachersSlider