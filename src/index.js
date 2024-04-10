import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Form from "./Form";
import "./index.css";

import ReactAnimatedWeather from "react-animated-weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="container whole">
      <div className="card p-2 c-backround">
        <Form />

        <h2 className="mt-1">Tue 09 Apr '24</h2>
      </div>
    </div>
  </StrictMode>,
);
