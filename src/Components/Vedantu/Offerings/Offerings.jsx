import React, { useState } from 'react'
import './Offerings.scss'
import Carousel from '../Carousel/Carousel'
import { offeringData, tenthData, twethData } from '../Data/Data'
import StudySlider from '../StudySlider/StudySlider'
function Offerings() {
  
  const [open, setOpen] = useState(true)
  const [tweth, setTweth] = useState(false)
  return (
    <div className="offeringContainer">
      <h1>Explore all our <span> offerings</span></h1>
      <div className="standards"  >
        <button onClick={() => { setOpen(true); setTweth(false) }}>class 12 pass</button>
        <button onClick={() => { setOpen(false); setTweth(true); }}>class 12</button>
        <button>class 11</button>
        <button onClick={() => { setOpen(true); setTweth(false) }}>class 10</button>
        <button>class 9</button>
        <button>class 8</button>
        <button>class 7</button>
        <button>class 6</button>
        <button>class 1 - 5</button>
        <button>class LKG-UKG</button>
      </div>
      <h2>Study Materials</h2>
      <div className="slider">

  { open &&(      <div>
        <Carousel slidesToShow={5}>

          {tenthData.map(item => (
            <StudySlider data={item} key={item.id} />
          ))}
        </Carousel>
        </div>)}






    {tweth &&(    <div>   <Carousel slidesToShow={5}>

          {twethData.map(item => (
            <StudySlider data={item} key={item.id} />
          ))

          }
        </Carousel>
        </div>)}

      </div>
    </div>
  )
}

export default Offerings