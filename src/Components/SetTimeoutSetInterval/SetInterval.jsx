import React, { useEffect, useState } from "react";

function SetTimeoutSetInterval() {
    const [val, setval] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setval((preNum) => preNum + 1);
    }, 2000);
  },[]);

  return (
    <>
      <div>value: {val}</div>
      <div>SetTimeoutSetInterval</div>
    </>
  );
}

export default SetTimeoutSetInterval;
