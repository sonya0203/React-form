import React from 'react'
import './InspireSlider.scss'
function InspireSlider({ data }) {
    return (
        <div className="inspireSlider">
            <div className="container">
                <div className="top">
                    <p>{data.para}</p>
                </div>
                <div className="bottom">
                    <img src={data.img} alt="" />
                    <div className="middle">
                        <span>{data.name}</span>
                        <p>{data.perc}</p>
                    </div>
                    <button>{data.button}</button>
                </div>
            </div>
        </div>
    )
}

export default InspireSlider