import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eveniet
          aut quam voluptatum dolorum, libero provident aliquam recusandae
          tempora odit pariatur beatae voluptatem harum perferendis? Doloremque
          ab modi distinctio minus!
        </p>
      </div>
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}

export default About;
