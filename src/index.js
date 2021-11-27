import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

import styles from "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
