import React from "react";
import Checkbox from "@mui/material/Checkbox";
function CustomChecked({ checked, id, setChecked, ...props }) {
  const handleChange = (event) => {
    setChecked(id);
  };
  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </div>
  );
}

export default CustomChecked;
