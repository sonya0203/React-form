import React from 'react'
import './ThirdSlider.scss'
function ThirdSlider({data}) {
    return (<>

        <div className="thirdSlider">
            <div className="thirdImgContainer">
                <img src={data.img} alt="" />

            </div>
        </div>
        </> )
}

export default ThirdSlider