import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
const Navigate=useNavigate()
const NextButton=()=>{
  Navigate("/")
}
const BackButtton=()=>{
  Navigate("/about")
} 
 return (
    <>
         <div>I am in Contact Page</div>

      <div>
     <button onClick={NextButton}>Next</button>
     <button onClick={BackButtton}>Back</button>
     </div>
    </>
  );
}

export default Contact;
