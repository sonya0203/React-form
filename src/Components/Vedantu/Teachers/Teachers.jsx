import React from 'react'
import './Teachers.scss'
import Carousel from '../Carousel/Carousel';
import { teachersData } from '../Data/Data';
import TeachersSlider from '../TeachersSlider/TeachersSlider';
import { usePopup } from '../Popup/usePopup';
import PopupContent from '../Popup/PopupContent'
function Teachers() {
const [open ,setOpen]=usePopup();
    return (
        <div className="teachersContainer">
            <div className="teachers">

                <h1>All teachers teach. Greatest <span> teachers </span>inspire</h1>
                <div className="teachersTop">

                    <div className='content'>
                        <img src="https://www.vedantu.com/cdn/images/new-home-page/icons/graduation-cap-icon.svg" alt="" />
                        <p>From Top-tier colleges with many years of experience</p>
                    </div>
                    <div className='content'>
                        <img src="https://www.vedantu.com/cdn/images/new-home-page/icons/book-apple-icon.svg" alt="" />
                        <p>Specially-trained teachers to bring out the best in every student.</p>
                    </div>
                    <div className='content'>
                        <img src="https://www.vedantu.com/cdn/images/new-home-page/icons/hourglass-icon.svg" alt="" />
                        <p>Teaching experience of over 4.5 crore hours to 10 lakh students in 1000+ cities in 57 countries.</p>
                    </div>


                </div>

                <div className="slider">
                    <Carousel slidesToShow={4}>
                        {teachersData.map(item => (
                            <TeachersSlider data={item} key={item.key} />
                        ))}

                    </Carousel>





                </div>

                <PopupContent open={open} setOpen={setOpen}/>               
                 <p className='para'>Achieve more with Vedantu, get  <span> Free</span>   online counselling now</p>
                <div className="learnBtn">

                    <button className='btn1'onClick={()=>{setOpen(!open)}} >Book a demo

                    </button>
                    <button className='btn2' >Learn Live</button>
                </div>
            </div>
        </div>
    )
}

export default Teachers