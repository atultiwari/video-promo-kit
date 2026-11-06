#!/usr/bin/env node
// Render every thumbnail option in src/data/promo.json to out/thumbnails/<id>.png (one bundle),
// plus a contact sheet input list. Usage: node scripts/render-thumbnails.mjs [idFilter]
import { bundle } from "@remotion/bundler";
import { renderStill, selectComposition } from "@remotion/renderer";
import { mkdirSync, readFileSync } from "node:fs";
import path from "node:path";

const filter = process.argv[2] ?? "";
const outDir = "out/thumbnails";
mkdirSync(outDir, { recursive: true });
const { thumbnails } = JSON.parse(readFileSync("src/data/promo.json", "utf8"));
const serveUrl = await bundle({ entryPoint: path.resolve("src/index.ts") });
for (const t of thumbnails) {
  if (filter && !t.id.includes(filter)) continue;
  const composition = await selectComposition({ serveUrl, id: t.id, inputProps: { thumbId: t.id } });
  const output = path.join(outDir, `${t.id}.png`);
  await renderStill({ serveUrl, composition, output, inputProps: { thumbId: t.id } });
  console.log(`✓ ${output}`);
}
