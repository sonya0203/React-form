import { Checkbox } from "@mui/material";
import React from "react";

export default function CustomChecked({ checked, id, setChecked, ...props }) {
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
