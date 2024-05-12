import React, { useState } from "react";
import CustomChecked from "../CustomChecked/CustomChecked";

export default function Listing({ list, _setSelected, ...props }) {
  const [selected, setSelected] = useState([]);
  const handleSelected = (_id) => {
    var myArray = [...selected];

    var news = myArray.includes(_id)
      ? myArray.splice(myArray.indexOf(_id), 1)
      : myArray.push(_id);

    setSelected([...myArray]);
    _setSelected([...myArray]);
  };

  console.log(selected, "selected");
  return (
    <div>
      {list.map((item, id) => {
        const checked = selected.includes(item.id);
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <CustomChecked
              checked={checked}
              setChecked={handleSelected}
              id={item.id}
            />
            {item.title}
          </div>
        );
      })}
    </div>
  );
}
