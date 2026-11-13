// Build dan keyin ishlaydi: har til uchun to'liq renderlangan statik HTML yozadi.
//   dist/index.html      -> ru  (https://panelza.uz/)
//   dist/uz/index.html   -> uz  (https://panelza.uz/uz/)
//   dist/en/index.html   -> en  (https://panelza.uz/en/)
// Shuningdek sitemap.xml (hreflang bilan) ni yangilaydi.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const { buildHeadHtml, sitemapXml } = await import(pathToFileURL(path.join(root, "src/i18n/seo.js")).href);
const { LANGS, default: translations } = await import(pathToFileURL(path.join(root, "src/i18n/translations.js")).href);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
for (const marker of ["<!--seo-head-->", "<!--app-html-->", "%LANG%"]) {
  if (!template.includes(marker)) throw new Error(`index.html shablonida ${marker} topilmadi`);
}

for (const lang of LANGS) {
  const html = template
    .replace("%LANG%", translations[lang].htmlLang)
    .replace("<!--seo-head-->", () => buildHeadHtml(lang))
    .replace("<!--app-html-->", () => render(lang));
  const outDir = lang === "ru" ? dist : path.join(dist, lang);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  console.log(`prerender: ${lang} -> ${path.relative(root, path.join(outDir, "index.html"))} (${(html.length / 1024).toFixed(0)} KB)`);
}

fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemapXml());
fs.writeFileSync(path.join(root, "public/sitemap.xml"), sitemapXml());
fs.rmSync(ssrDir, { recursive: true, force: true });
