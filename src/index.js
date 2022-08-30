import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Custome hook
import Provider from "./useContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
