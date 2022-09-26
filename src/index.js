import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import IdProvider from "./context/IdProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IdProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IdProvider>
);
