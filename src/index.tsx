import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const baseURL = process.env.REACT_APP_API_ENDPOINT;
axios.defaults.baseURL = baseURL;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
