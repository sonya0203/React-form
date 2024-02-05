import React, { useState } from "react";
import { Link } from "react-router-dom";

function Resister() {
  const [UserInput, setUserInput] = useState({
    email: "",
    password: "",
    reentered: "",
  });
  const [newData, setnewData] = useState([]);
  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInput({ ...UserInput, [name]: value });
  };
  const StoreData = (e) => {
    e.preventDefault();
   setnewData([...newData, UserInput]);
   
    setUserInput({ email: "", password: "", reentered: "" });
  };
  return (
   
    <>
    <Link to ="/" >Home</Link>
      <form onSubmit={StoreData}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={UserInput.email}
          onChange={HandleInput}
        ></input>

        <label htmlFor="password">password</label>
        <input
          type="text"
          id="password"
          name="password"
          value={UserInput.password}
          onChange={HandleInput}
        ></input>

        <label htmlFor="Reentered">Reentered</label>
        <input
          type="text"
          id="reentered"
          name="reentered"
          value={UserInput.reentered}
          onChange={HandleInput}
        ></input>

        <button type="submit">Resister</button>
      </form>
      <div>
        {newData.map((value, index) => (
          <div key={index}>
            <p>Email:{value.email}</p>
            <p>Password:{value.password}</p>
            <p>ReEntered:{value.reentered}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Resister;
