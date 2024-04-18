import React from 'react'
import './BridgeCource.scss'
import FoundationCards from '../FoundationCards/FoundationCards'
import Offerings from '../Offerings/Offerings'
import Carousel from '../Carousel/Carousel'
import ThirdSlider from '../ThirdSlider/ThirdSlider'
import { thirdImg } from '../Data/Data'
function BridgeCource() {
    return (
        <div className="BridgeCourccContainer">
            <div className="top">
                <div className="left">
                    <h1>Bridge The Foundational Gap</h1>
                    <h1> with <span>Bridge Course </span> </h1>
                    <p>Build a Strong Foundation for Just Rs ₹99</p>
                </div>
                <div className="right">
                    <img src="https://vmkt.vedantu.com/vmkt/PROD/png/73efbd44-c074-410c-9f46-fc7478b89944-1711435421301-4102515828415223.png" alt="" />
                </div>
            </div>

     <FoundationCards />
     <h1 className='fire'>What’s 🔥 New on <span>Vedantu </span> </h1>

<div className="SliderContainer">
<Carousel dots={true}  arrows={true}slidesToShow={2}arrowsScroll={1}>
    {thirdImg.map(item=>(
        <ThirdSlider data={item} key={item.id} />
    ))}
</Carousel>

</div>
<Offerings/>







        </div>
    )
}

export default BridgeCource