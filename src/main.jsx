import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1 className="text-3xl font-bold underline">Hello Vite!</h1>
  </div>
);
