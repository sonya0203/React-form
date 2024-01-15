import React from "react";
import {useNavigate } from "react-router-dom";

function Home() {
const Navigate= useNavigate()
const HandleClick=()=>{
  Navigate("/about")
}
  return (
    <>

<div>I am in Home Page</div>


      <div>
       <button onClick={HandleClick}>Next</button>

      </div>

    </>
  );
}

export default Home;
