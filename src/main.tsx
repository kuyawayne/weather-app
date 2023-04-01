import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Application from "./Application";
import "./root.css";

const rootDiv = document.querySelector("#root") as HTMLElement;

const root = ReactDOM.createRoot(rootDiv);

root.render(<StrictMode><Application /></StrictMode>);
