import React, { useEffect, useState } from 'react'
import './Inspires.scss'
import { inspireData } from '../Data/Data';
import InspireSlider from '../InspireSlider/InspireSlider';
import Carousel from '../Carousel/Carousel';
function Inspires() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [show]);
    return (
        <div className="inspireContainer">
            <div className="inspires">
                <div className="top">
                    <img src="https://www.vedantu.com/cdn/images/new-home-page/icons/hand-with-mic.svg" alt="" />
                    <h1>Stories that <span> inspire </span></h1>
                </div>
                <div className="example">
                    <div className="Images">
                        <img className='Sabharwal' src="https://www.vedantu.com/cdn/images/new-home-page/B2/video-cover.webp" alt="" />
                        <img className='playButton' onClick={() => { setShow(!show) }} src="https://tse3.mm.bing.net/th?id=OIP.BzeY2MdehHyoZYFiTi98qgHaHa&pid=Api&P=0&h=180" alt="" >

                        </img>

                    </div>

                    <div className="desc">
                        <img className='comma' src="https://www.vedantu.com/cdn/images/new-home-page/icons/icons.svg#quote" alt="" />
                        <p className='p1'>After I joined the Eklavya batch at Vedantu, I cracked KVPY and WBJEE and discovered my true potential.</p>
                        <div className="name">
                            <p className='p2'>
                                Rhythm Sabharwal</p>
                            <p className='p3'>AIR 2973| NEET 2021</p>
                        </div>

                    </div>

                </div>

                {(show && <div className="video" >

                    <video src="https://www.vedantu.com/cdn/videos/new-home-page/Rhythm_Haryana_Parents_testimonial.mp4" controls disablePictureInPicture   ></video>


                    <img className='cross' src="https://tse1.mm.bing.net/th?id=OIP.8YLRTFnuC68ds5wS_l_ndAHaHa&pid=Api&P=0&h=180" alt="" onClick={() => { setShow(!show) }} />

                </div>)}

                <div className="slider">

                    <Carousel slidesToShow={3} arrowsScroll={1} dots={true}>
                        {inspireData.map(item => (
                            <InspireSlider data={item} key={item.id} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Inspires