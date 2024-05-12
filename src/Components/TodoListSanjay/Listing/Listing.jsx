import React, { useEffect, useState } from "react";
import CustomChecked from "../CustomChecked/CustomChecked";
import CustomeOption from "../CustomeOption/CustomeOption";

function Listing({ list, _setSelected, ...props }) {
  const [selected, setSelected] = useState([]);

  const [tog, setTog] = useState(null);
  const handleSelected = (_id) => {
    var myArray = [...selected];

    var news = myArray.includes(_id)
      ? myArray.splice(myArray.indexOf(_id), 1)
      : myArray.push(_id);
    setSelected([...myArray]);
    _setSelected([...myArray]);
  };
  function handleTog(id) { 
    setTog(id);

  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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

            <CustomeOption itemId={item.id} tog={tog} _handleTog={handleTog} />
          </div>
        );
      })}
    </div>
  );
}

export default Listing;
