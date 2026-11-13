import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { LANGS, DEFAULT_LANG } from "./i18n/translations";

// Til URL dan olinadi: /uz/ -> uz, /en/ -> en, qolgani -> ru
const first = window.location.pathname.split("/").filter(Boolean)[0];
const lang = LANGS.includes(first) ? first : DEFAULT_LANG;

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App lang={lang} />
  </React.StrictMode>
);

// Build paytida sahifa oldindan renderlangan (prerender) bo'ladi: hydrate qilamiz.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
