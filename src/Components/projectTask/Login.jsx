import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [InputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [Record, setRecord] = useState([]);
  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    console.log(value);

    setInputValue({ ...InputValue, [name]: value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    setRecord([...Record, InputValue]);
    setInputValue({ email: "", password: "" });
  };
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <label htmlFor="Email Address">Email Address</label>
        <input
          type="text"
          id="email"
          value={InputValue.email}
          onChange={HandleInput}
          name="email"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={InputValue.password}
          onChange={HandleInput}
          name="password"
        ></input>
        <Button type="submit">submit</Button>
      </form>
      {/* <div>
  {Record.map((index,value)=>(
<div key={index}>
    <p>email:{value.email}</p>
    <p>email:{value.email}</p>
    </div>
  ))}
   </div> */}
      <p>i dont have acc.</p>
      <Link to="/resister"> Resister</Link>
    </>
  );
}

export default Login;
