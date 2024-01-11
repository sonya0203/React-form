import React, { useState } from "react";

function Home() {
  const [InputValue, setInputValue] = useState({
    username: "",
    phone: "",
    email: "",
  });
  const [record, setRecord] = useState([]);

  const HandleInput = (e) => {
    const name = e.target.name;  
    const value = e.target.value;
    console.log(value)
    setInputValue({ ...InputValue, [name]  : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...InputValue, id: new Date().getTime().toString() };
    console.log(newRecord);
    setRecord([...record,newRecord])
     setInputValue({ username: "", phone: "", email: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"autoComplete="off"
            value={InputValue.username}
            onChange={HandleInput}
            name="username"
            id="username"
            
          ></input>
        </div>
        <div>
          <label htmlFor="phone">PHONE NO.</label>
          <input
            type="text"autoComplete="off"
            value={InputValue.phone}
            onChange={HandleInput}
            name="phone"
            id="phone"
          ></input>
        </div>
        <div>
          <label htmlFor="email">EMAIL</label>
          <input
            type="text"autoComplete="off"
            value={InputValue.email}
            onChange={HandleInput}
            name="email"
            id="email"
          ></input>
        </div>
        <button type="submit">Register</button>
      </form>
      <div>
        {record.map((ele) => (
          <div key={ele.id}>
            <p>{ele.username}</p>
            <p>{ele.phone}</p>
            <p>{ele.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
