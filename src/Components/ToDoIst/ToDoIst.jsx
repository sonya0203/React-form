import React, { useState } from "react";
import CustomInput from "./CustomInput/CustomInput";
import CustomButton from "./CustomButton/CustomButton";
import Listing from "./Listing/Listing";
import CustomDelete from "./CustomDelete/CustomDelete";

export default function ToDoIst() {
  const [input, setInput] = useState({ search: "", add: "" });
  const [toDoList, setToDoList] = useState([]);
  const [selected, setSelected] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleClick = (_type) => {
    if (_type === "add") {
      const myList = [...toDoList];
      myList.push({ title: input.add, id: myList.length + 1 });
      console.log(myList, "listing");
      setToDoList(myList);
      setInput({ search: "", add: "" });
    }
  };
  const handleList = (_list) => {
    let filteredArray = toDoList.filter((obj) => !selected.includes(obj.id));
    setToDoList(filteredArray);
  };
  return (
    <div>
      <CustomInput
        name="search"
        value={input.search}
        handleChange={handleChange}
      />
      <CustomButton
        text="Search"
        name="search"
        variant="outlined"
        handleClick={handleClick}
      />
      <CustomInput value={input.add} name="add" handleChange={handleChange} />
      <CustomButton
        text="Add"
        name="add"
        variant="outlined"
        handleClick={handleClick}
      />
      <CustomDelete handleList={handleList} />
      <Listing list={toDoList} _setSelected={setSelected} />
    </div>
  );
}
