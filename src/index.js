import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import storeReduxToolkit from "./Components/ReduxToolkit/Store";

function FavoriteColor() {
  return (
    <Provider store={storeReduxToolkit}>
      <App />
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
