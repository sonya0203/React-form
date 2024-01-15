import React from 'react'
import {useNavigate } from 'react-router-dom'

function About() {
  const Navigate=useNavigate()
  const NextButton=()=>{
    Navigate("/contact")
  }
  const BackButtton=()=>{
    Navigate("/")
  } 
   return (
      <>
        <div>
        <div>I am in About Page</div>

       <button onClick={NextButton}>Next</button>
       <button onClick={BackButtton}>Back</button>
                
       </div>
                

      </>
    );
  }

export default About