import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import "./i18n";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import CookieConsent from "./components/CookieConsent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <CookieConsent />
  </React.StrictMode>
);
