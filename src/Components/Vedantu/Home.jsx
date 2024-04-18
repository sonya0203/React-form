import React, { useState } from 'react'
import Cards from './Cards/Cards'
import CourceCards from './CourceCards/CourceCards'
import Kids from './Kids/Kids'
import Session from './Session/Session'
import BridgeCource from './BridgeCource/BridgeCource'
import Results from './Results/Results'
import Teachers from './Teachers/Teachers'
import Inspires from './Inspires/Inspires'
import Scale from './Scale/Scale'
import Platforms from './Platforms/Platforms'
import Study from './Study/Study'
import './Home.scss'
import Carousel from './Carousel/Carousel'
import { data } from './Data/Data'
import CoursesSlider from './CoursesSlider/CoursesSlider'

function Home
  () {




  return (
    <>
      <div className="home">
        <div className="offline">

          <img src="https://vmkt.vedantu.com/vmkt/PROD/svg%2Bxml/fb29cef1-5867-4885-9ef3-28248de039cd-1707741955315-4102418410874681.svg%2Bxml" alt="" />
          <div className="para">
            <p>Explore Offline </p>
            <br />
            <p>Centers</p>
          </div>
        </div>
        <div className="communication">
          <img src="https://clipart.info/images/ccovers/1499955335whatsapp-icon-logo-png.png" alt="" />
          <img src="https://tse4.mm.bing.net/th?id=OIP.nimbs5JCiBLP-9ra-ScrFQAAAA&pid=Api&P=0&h=180" alt="" />
        </div>
      </div>
      <div className="sliderWithCard">
      <div className="topSlider">
        <Carousel dots={true} arrows={false} autoplay={true} autoplaySpeed={3000}>
          {data.map(item => (
            <CoursesSlider data={item} key={item.id} />
          ))}

        </Carousel>
      </div>



      <Cards />
      </div>
      <CourceCards />
      <Kids />
      <Session />
      <section>
        <BridgeCource />
      </section>
      <section>
        <Results />
      </section>
      <section>
        <Teachers />
      </section>
      <section><Inspires />
      </section>
      <section>
        <Scale />
      </section>
      <section>
        <Platforms />
      </section>
      <section>
        <Study />
      </section>
    </>
  )
}

export default Home
