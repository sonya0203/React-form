import React, { useEffect, useState } from 'react'
import './Results.scss'
import Carousel from '../Carousel/Carousel'
import { resultData } from '../Data/Data'
import ResultSlider from '../ResultSlider/ResultSlider'
function Results() {

  const [toggle, setToggle] = useState(1)

  const handleToggle = (id) => {
    

  
    setToggle(id)
  }
  useEffect(()=>{
  },[toggle])
  }
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


            {arr.map((item) => {
              return (
                <button onClick={() => handleToggle(item.id)}>
                  {item.name}
                </button>)
            })}
            <div>
              <img src="https://www.vedantu.com/cdn/images/new-home-page/B2/results-hero-image.webp" alt="" />
            </div>
          </div>

        </div>


        <div className={toggle === 1 ? "toggle" : "slider"}>
          <div>
            <Carousel>
              {resultData.map(item => (
                <ResultSlider data={item} key={item.id} />
              ))}
            </Carousel>
          </div>

        </div>
        <div className={toggle === 2 ? "toggle" : "slider"}>
          <div>
            <Carousel arrows={false}>
              {resultData.map(item => (
                <ResultSlider data={item} key={item.id} />
              ))}
            </Carousel>
          </div>

        </div>



        {/* <div className={toggle === 3 ? "toggle" : "slider"}>
          <div>
            <Carousel>
              {resultData.map((item) => {
                if (item.id === 3) {
                  return <ResultSlider data={item} key={item.id=3} />;
                }
                return null;
              })}
            </Carousel>
          </div>
        </div> */}

        {/* <div className={toggle=== 4 ? "toggle" : "slider"}>
          <div>
            <Carousel>
             {resultData.map((item)=>{
         
              <ResultSlider data={item} key={item.id}/>
      
             })}
            </Carousel>
          </div>

        </div>

         <div className={toggle=== 5 ? "toggle" : "slider"}>
          <div>
            <Carousel>
             {resultData.map((item)=>{
         
              <ResultSlider data={item} key={item.id}/>
      
             })}
            </Carousel>
          </div>

        </div> */}

      </div>
    </div>
  )
}

export default Results


const arr = [{ name: "All", id: 1 }, { name: "IIT JEE", id: 2 }, { name: "NEET", id: 3 }, { name: "OLYMPAID", id: 4 }, { name: "NTSE", id: 5 },
{ name: "12th Board", id: 6 }, { name: "10th Board", id: 7 }]