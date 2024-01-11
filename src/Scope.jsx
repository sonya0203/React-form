import React from "react";

function Scope() {
  const a = 2;
  if (a === 2) {
    var c = 5;
  
    console.log("inside", c);
  }
  console.log("outside", c);
}
export default Scope;
