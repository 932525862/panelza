import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { buildHeadHtml } from "./src/i18n/seo.js";
import { LANGS, DEFAULT_LANG } from "./src/i18n/translations.js";

// Dev rejimida index.html dagi SEO blokini URL tiliga qarab to'ldiradi.
// Build rejimida bloklar o'zgarishsiz qoladi: scripts/prerender.mjs ularni
// har til uchun (/, /uz/, /en/) to'ldirib statik HTML yozadi.
function seoDevPlugin() {
  return {
    name: "panelza-seo-dev",
    transformIndexHtml(html, ctx) {
      if (!ctx.server) return html;
      const first = (ctx.originalUrl || "/").split("?")[0].split("/").filter(Boolean)[0];
      const lang = LANGS.includes(first) ? first : DEFAULT_LANG;
      return html
        .replace("<!--seo-head-->", buildHeadHtml(lang))
        .replace("%LANG%", lang);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoDevPlugin()],
});
