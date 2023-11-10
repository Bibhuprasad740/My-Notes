import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import GroupProvider from "./store/GroupProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GroupProvider>
      <App />
    </GroupProvider>
  </React.StrictMode>
);
