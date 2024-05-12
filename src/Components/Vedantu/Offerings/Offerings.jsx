import React, { useEffect, useState } from 'react'
import './Offerings.scss'
import Carousel from '../Carousel/Carousel'
import { offeringData, tenthData, twethData } from '../Data/Data'
import StudySlider from '../StudySlider/StudySlider'
function Offerings() {

  const [toggle, setToggle] = useState(1)
  const handleClik = (id) => {
    setToggle(id)
  }
  useEffect(() => {

  }, [toggle])
  return (
    <div className="offeringContainer">
      <h1>Explore all our <span> offerings</span></h1>
      <div className="standards"  >
        {list.map((item) => {
          return (
            <button  onClick={() => { handleClik(item.id) }}>{item.std}</button >
          )
        })}



      </div>
      <h2>Study Materials</h2>

      {/* <div className={toggle === 1 ? "toggle" : "offToggle"}> */}

        {toggle===1 &&(<div>
          <Carousel slidesToShow={5}>

            {tenthData.map(item => (
              <StudySlider data={item} key={item.id} />
            ))}
          </Carousel>
        </div>)}
      {/* </div> */}





     

       {toggle===2 &&( <div>
          <Carousel slidesToShow={5}>

            {twethData.map(item => (
              <StudySlider data={item} key={item.id} />
            ))}
          </Carousel>
        </div>)}
   



      
{toggle==3 &&(
        <div>
          <Carousel slidesToShow={5}>

            {tenthData.map(item => (
              <StudySlider data={item} key={item.id} />
            ))}
          </Carousel>
        </div>)}







     {toggle===4&&(   <div>
          <Carousel slidesToShow={5}>

            {twethData.map(item => (
              <StudySlider data={item} key={item.id} />
            ))}
          </Carousel>
        </div>)}
    

    

       {toggle===5 &&( <div>
          <Carousel slidesToShow={5}>

            {tenthData.map(item => (
              <StudySlider data={item} key={item.id} />
            ))}
          </Carousel>
        </div>
  )}





      

       {toggle===6 &&( <div>
          <Carousel slidesToShow={5}>

            {twethData.map(item => (
              <StudySlider data={item} key={item.id} />
            ))}
          </Carousel>
        </div>)}
    

    

       {toggle===7 &&( <div>
          <Carousel slidesToShow={5}>

            {tenthData.map(item => (
              <StudySlider data={item} key={item.id} />
            ))}
          </Carousel>
        </div>
   )}





    

   {toggle===8 &&(     <div>
          <Carousel slidesToShow={5}>

            {twethData.map(item => (
              <StudySlider data={item} key={item.id} />
            ))}
          </Carousel>
        </div>)}
    


   

       {toggle===9 &&( <div>
          <Carousel slidesToShow={5}>

            {tenthData.map(item => (
              <StudySlider data={item} key={item.id} />
            ))}
          </Carousel>
        </div>
      )}


    </div>

  )
}

export default Offerings


const list = [{ std: "class 12 pass", id: 1 },
{ std: "class 12", id: 2 },
{ std: "class 11", id: 3 },
{ std: "class 10", id: 4 },
{ std: "class 9", id: 5 },
{ std: "class 8", id: 6 },
{ std: "class 7", id: 7 },
{ std: "class 6", id: 8 },
{ std: "class 1-5", id: 9 }]