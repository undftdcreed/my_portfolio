import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from "./App";
import "./index.css";

// Check if the user has a preference for dark mode, and set the initial mode accordingly
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialMode = localStorage.getItem("mode") || (prefersDarkMode ? "dark" : "light");

const rootElement = document.getElementById("root");
rootElement.classList.add(initialMode); // Set the initial class on the root element

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
