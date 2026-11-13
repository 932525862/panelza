// Bir martalik/qayta ishlatiladigan skript: src/assets dagi rasmlarni WebP ga
// aylantirib public/img ga yozadi va o'lchamlarini src/data/images.js ga saqlaydi.
// Ishga tushirish: node scripts/optimize-images.mjs
import sharp from "sharp";
import fs from "node:fs";

const A = "src/assets/";
const list = [
  ["hero", A + "new/new3.jpg", 1600],
  ["wall-mineral", A + "777.jpg", 700],
  ["roof-mineral", A + "88888.jpg", 700],
  ["wall-eps", A + "9999.jpg", 700],
  ["roof-eps", A + "DSC07859.jpg", 700],
  ["factory", A + "project1.jpg", 1400],
  ["technology", A + "project2.jpg", 1400],
  ["delivery", A + "yetkazib.jpg", 1400],
  ["gallery-1", A + "tashqi.jpg", 700],
  ["gallery-2", A + "fotos2.jpg", 700],
  ["gallery-3", A + "panelzaIm3.jpg", 700],
  ["gallery-4", A + "panelzamIm4.jpg", 700],
  ["gallery-5", A + "panelzaIm1.jpg", 700],
  ["gallery-6", A + "panelzaIm2.jpg", 700],
  ["gallery-7", A + "fotos7.jpg", 700],
  ["gallery-8", A + "fotos5.jpg", 700],
];
const out = {};
for (const [name, file, width] of list) {
  const info = await sharp(file)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 76 })
    .toFile(`public/img/${name}.webp`);
  out[name] = { src: `/img/${name}.webp`, width: info.width, height: info.height };
}
for (const [name, file] of [["logo", A + "logo.png"], ["logo-wide", A + "panelzalogo.png"]]) {
  const info = await sharp(file).resize({ width: 400, withoutEnlargement: true }).webp({ quality: 85 }).toFile(`public/img/${name}.webp`);
  out[name] = { src: `/img/${name}.webp`, width: info.width, height: info.height };
}
await sharp(A + "new/new3.jpg").resize(1200, 630, { fit: "cover" }).jpeg({ quality: 82 }).toFile("public/og-image.jpg");
await sharp("public/logopa.png").resize(192, 192, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile("public/icon-192.png");
fs.writeFileSync(
  "src/data/images.js",
  "// AVTOMATIK YARATILGAN: node scripts/optimize-images.mjs\nconst images = " + JSON.stringify(out, null, 2) + ";\nexport default images;\n"
);
console.log(out);
