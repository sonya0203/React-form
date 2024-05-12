import React, { useState } from "react";
import "./CustomeOption.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomButton from "../CustomButton/CustomButton";
import { Button } from "@mui/material";
function CustomeOption({ itemId, _handleTog = () => {}, tog, ...props }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <MoreVertIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              _handleTog(itemId);
            }}
          />
        </div>

        <div
          className={tog === itemId ? "show" : "hide"}
          style={{
         
            
            border: "1px solid lightGray",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          <Button>Edit</Button>
          <Button>Complete</Button>
          <Button>InComplete</Button> 
        </div>
      </div>
    </>
  );
}

export default CustomeOption;
