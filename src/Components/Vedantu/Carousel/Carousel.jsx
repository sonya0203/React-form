import React from "react";

import Slider from "infinite-react-carousel";
import './Carousel.scss'
function Carousel({ children, dots,autoplay ,arrows,autoplaySpeed,slidesToShow,arrowsScroll}) {
    return (

        <div className="carousel">
            <div className="carouselContainer">

                <Slider dots={dots} autoplay={autoplay}  arrows={arrows} autoplaySpeed={autoplaySpeed} slidesToShow={slidesToShow}arrowsScroll={arrowsScroll}>
                    {
                        children
                    }
                </Slider>

            </div>
        </div>
    );
};

export default Carousel;
