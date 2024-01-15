import React, { useEffect, useState } from "react";
import CustomDialog from "./Components/CustomDialog/CustomDialog";


function Fetch() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    name: "",
    phone: null,
    id: null,
    email: "",
  });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  const handleClick = (_userObject) => {
    const { name, email, phone, id } = _userObject;
    setUser({
      name,
      phone,
      id,
      email,
    });
    setOpen(true);
  };
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index} onClick={() => handleClick(item)}>
            <p>{item.name}</p>
          </div>
        );
      })}
      <CustomDialog propsUser={user} _open={open} _setOpen={setOpen} />
    </div>
  );
}

export default Fetch;
