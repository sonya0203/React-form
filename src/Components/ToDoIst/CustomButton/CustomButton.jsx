import { Button } from "@mui/material";
import React from "react";

export default function CustomButton({
  text,
  variant,
  handleClick = () => {},
  name,
  ...props
}) {
  return (
    <Button variant={variant} onClick={() => handleClick(name)}>
      {text}
    </Button>
  );
}
