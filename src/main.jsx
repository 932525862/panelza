import React from "react";
import ReactDOM from "react-dom/client"; // ❗ React 18 dan boshlab bu modul kerak
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css"; // <-- TAILWIND STYLE BU YERDA KIRITILISHI KERAK


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
