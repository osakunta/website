import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/Index.page";

const root = document.getElementById("root");

if (root === null) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Index></Index>
  </React.StrictMode>
);
