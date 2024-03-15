import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Obj from "./components/objects/obj";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Obj />
  </React.StrictMode>
);
