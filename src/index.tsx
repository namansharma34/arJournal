import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const Index = () => (
  <React.Fragment>
    <App />
  </React.Fragment>
);
const root = ReactDOM.createRoot(
  document.getElementById("mountNode") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
