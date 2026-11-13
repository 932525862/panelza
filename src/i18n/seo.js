import translations, { LANGS, PHONE, EMAIL } from "./translations.js";
import images from "../data/images.js";

export const SITE = "https://panelza.uz";
export const abs = (p) => (p.startsWith("http") ? p : SITE + p);
export const urlFor = (lang) => SITE + translations[lang].path;

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function buildJsonLd(lang) {
  const t = translations[lang];
  const orgId = SITE + "/#business";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Organization"],
        "@id": orgId,
        name: "Panelza",
        alternateName: "Panelza.uz",
        url: urlFor(lang),
        logo: abs("/logopa.png"),
        image: abs("/og-image.jpg"),
        description: t.schema.orgDescription,
        telephone: PHONE,
        email: EMAIL,
        foundingDate: "2016",
        areaServed: ["UZ", "KZ", "KG"],
        address: {
          "@type": "PostalAddress",
          streetAddress: t.schema.streetAddress,
          addressLocality: t.schema.city,
          addressCountry: "UZ",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: PHONE,
          contactType: "sales",
          availableLanguage: ["ru", "uz", "en"],
        },
      },
      {
        "@type": "WebSite",
        "@id": SITE + "/#website",
        url: SITE + "/",
        name: "Panelza",
        inLanguage: t.htmlLang,
        publisher: { "@id": orgId },
      },
      ...t.products.items.map((p) => ({
        "@type": "Product",
        name: p.title,
        description: p.description,
        image: abs(images[p.key].src),
        category: t.schema.category,
        brand: { "@type": "Brand", name: "Panelza" },
        manufacturer: { "@id": orgId },
        additionalProperty: p.specs.map(([name, value]) => ({
          "@type": "PropertyValue",
          name,
          value,
        })),
      })),
      {
        "@type": "FAQPage",
        mainEntity: t.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

// <head> ichidagi SEO bloki (statik HTML sifatida yoziladi).
export function buildHeadHtml(lang) {
  const t = translations[lang];
  const url = urlFor(lang);
  const alt = LANGS.map(
    (l) => `<link rel="alternate" hreflang="${translations[l].htmlLang}" href="${urlFor(l)}" />`
  ).join("\n    ");
  const ogAlt = LANGS.filter((l) => l !== lang)
    .map((l) => `<meta property="og:locale:alternate" content="${translations[l].ogLocale}" />`)
    .join("\n    ");
  return `<title>${esc(t.seo.title)}</title>
    <meta name="description" content="${esc(t.seo.description)}" />
    <meta name="keywords" content="${esc(t.seo.keywords)}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <link rel="canonical" href="${url}" />
    ${alt}
    <link rel="alternate" hreflang="x-default" href="${SITE}/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Panelza" />
    <meta property="og:title" content="${esc(t.seo.title)}" />
    <meta property="og:description" content="${esc(t.seo.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${SITE}/og-image.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${esc(t.home.heroAlt)}" />
    <meta property="og:locale" content="${t.ogLocale}" />
    ${ogAlt}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(t.seo.title)}" />
    <meta name="twitter:description" content="${esc(t.seo.description)}" />
    <meta name="twitter:image" content="${SITE}/og-image.jpg" />
    <script type="application/ld+json">${JSON.stringify(buildJsonLd(lang)).replace(/</g, "\\u003c")}</script>`;
}

export function sitemapXml() {
  const links = LANGS.map(
    (l) => `    <xhtml:link rel="alternate" hreflang="${translations[l].htmlLang}" href="${urlFor(l)}" />`
  ).join("\n");
  const today = new Date().toISOString().slice(0, 10);
  const urls = LANGS.map(
    (l) => `  <url>
    <loc>${urlFor(l)}</loc>
${links}
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/" />
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${l === "ru" ? "1.0" : "0.9"}</priority>
  </url>`
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}
