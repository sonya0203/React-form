import React from 'react'
import './Scale.scss'
function Scale() {
    return (
        <div className="scaleContainer">
            <div className="scale">
                <div className="left">
                    <div className="topleft">
                        <img src="https://www.vedantu.com/cdn/images/new-home-page/icons/graph-chart-icon.svg" alt="" />
                        <h1>Impact. At <span>scale</span></h1>
                        <p>Making education affordable and accessible  across the globe</p>
                    </div>

                    <div className="measuring">
                        <div className="amount">
                            <h1>2.1+</h1>

                            <h1>crore</h1>
                            <p>hours of LIVE learning</p>
                        </div>

                        <div className="amount">
                            <h1>25+</h1>


                            <h1>lakh</h1>
                            <p>doubts resolved on the app</p>
                        </div>

                        <div className="amount">
                            <h1>10+</h1>

                            <h1>lakh</h1>
                            <p>monthly youtube views</p>
                        </div>


                        <div className="amount">
                            <h1>57+</h1>

                            <h1>countries
                            </h1>
                            <p>where students take LIVE classes</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src="https://www.vedantu.com/cdn/images/new-home-page/B2/stats-map.webp" alt="" />
                </div>
            </div>


        </div>
    )
}

export default Scale