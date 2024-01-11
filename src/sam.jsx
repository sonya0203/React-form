import React, { useState } from "react";

function Home() {
  const [InputValue, setInputValue] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const[record,setrecord]=useState([])
  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value, name);
    setInputValue({ ...InputValue, [name]: value });
  };


const handleSubmit=(e)=>{
  e.preventDefault();
  const newRecord={...InputValue,id:new Date().getTime().toString()}
  console.log(record)
  setrecord([...record,setrecord])
  console.log(record)
  setInputValue({name: "",phone: "",email: "",});
}



  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            value={InputValue.username}
            onChange={HandleInput}
            name="username"
            id="username"
          ></input>
        </div>
        <div>
          <label htmlFor="phone">PHONE NO.</label>
          <input
            type="text"
            value={InputValue.phone}
            onChange={HandleInput}
            name="phone"
            id="phone"
          ></input>
        </div>
        <div>
          <label htmlFor="email">EMAIL</label>
          <input
            type="text"
            value={InputValue.email}
            onChange={HandleInput}
            name="email"
            id="email"
          ></input>
        </div>
        <button type="submit">Resiter</button>
      </form>
      <div>
        {
          record.map((ele)=>{
            return(
            <div className="ShowData">
              <p> {ele.username}</p>
              <p> {ele.phone}</p>
              <p> {ele.email}</p>


               </div>
            )
          })
        }
      </div>
    </>
  );
}

export default Home;
