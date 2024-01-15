import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import ProtectedRouting from "./mini projects/Routing/ProtetedRouting/ProtectedRouting";





function FavoriteColor() {

  return (
  <ProtectedRouting />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
