import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import './App.css';

const rootDiv = document.querySelector("#root");
const root = createRoot(rootDiv);

root.render(
  <App />
);