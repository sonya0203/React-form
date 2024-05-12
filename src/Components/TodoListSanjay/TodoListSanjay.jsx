import React, { useState } from "react";
import CustomButton from "./CustomButton/CustomButton";
import CustomInput from "./CustomInput/CustomInput";
import Listing from "./Listing/Listing";
import CusomDelete from "./CusomDelete/CusomDelete";

export default function TodoListSanjay() {
  const [input, setInput] = useState({ search: "", add: "" });
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleClick = (_type) => {
    if (_type === "add") {
      const newList = [...list];
      newList.push({ title: input.add, id: newList.length + 1 });
      setList(newList);
      
      setInput({ search: "", add: "" });
    }
  };
  const handleList = (_list) => {
    let filteredArray = list.filter((obj) => !selected.includes(obj.id));
    setList(filteredArray);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <CustomInput
          value={input.search}
          name="search"
          handleChange={handleChange}
        />
        <CustomButton
          name="search"
          text="search"
          variant="outlined"
          handleClick={handleClick}
        />
        <CustomInput value={input.add} name="add" handleChange={handleChange} />
        <CustomButton
          name="add"
          text="add"
          variant="outlined"
          handleClick={handleClick}
        />
      </div>
      <CusomDelete handleList={handleList} />
      <Listing list={list} _setSelected={setSelected}></Listing>
    </div>
  );
}
