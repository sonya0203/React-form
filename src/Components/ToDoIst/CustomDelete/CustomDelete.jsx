import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
export default function CustomDelete({ handleList, ...props }) {
  return (
    <div>
      {" "}
      <div
        style={{
          color: "red",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          display: "inline-block",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        <DeleteIcon color="inherit" onClick={handleList} />
      </div>
    </div>
  );
}
