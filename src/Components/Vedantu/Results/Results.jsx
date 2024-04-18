import React, { useState } from 'react'
import './Results.scss'
import Carousel from '../Carousel/Carousel'
import { resultData } from '../Data/Data'
import ResultSlider from '../ResultSlider/ResultSlider'
function Results() {
  // const [open, setOpen] = useState(true)
  // const [jee, setJee] = useState(false)
  // const [neet, setNeet] = useState(false)

  return (
    <div className="resultContainer">
      <div className="result">

        <div className="resultTop">
          <h1>Inspired students. Inspired <span>results</span> </h1>
          <p>Our results reflect the passion, hardwork and efforts of our students and teachers.</p>
          <div className="resultBtn">
            <button>Explore Cources</button>
            <button>View Our Results</button>

          </div>
        </div>
        <div className="middle">
          <div className="btns">

            {/* <button onClick={() => { setOpen(true); setJee(false); setNeet(false) }}>All</button>
            <button onClick={() => { setJee(true); setOpen(false); setNeet(false) }}>IIT JEE</button>
            <button onClick={() => { setNeet(true); setJee(false); setOpen(false) }}>NEET</button>
            <button>Olympaid</button> */}
            {/* <button>12th Board</button>
            <button>10th Board</button> */}
            {/* <button>NTSE</button> */}
            {arr.map((item)=>{
              return (
                <button>{item.name}</button>
              )
            })}
            <div>
              <img src="https://www.vedantu.com/cdn/images/new-home-page/B2/results-hero-image.webp" alt="" />
            </div>
          </div>

        </div>
        <div className="slider">
        <div>
            <Carousel>
              {resultData.map(item => (
                <ResultSlider data={item} key={item.id} />
              ))}
            </Carousel>
          </div>
    

        

        </div>
      </div>
    </div>
  )
}

export default Results


const arr=[{name:"All",id:1},{name:"IIT JEE",id:2},{name:"NEET",id:3},{name:"OLYMPAID",id:4},{name:"NTSE",id:5},
{name:"12th Board",id:6},{name:"10th Board",id:7}]