#!/usr/bin/env node
// Render every carousel slide to PNG (out/carousel/slide-NN.png) with one bundle.
// Then build the PDF: python3 -I scripts/carousel-pdf.py
import { bundle } from "@remotion/bundler";
import { renderStill, selectComposition } from "@remotion/renderer";
import { mkdirSync, readFileSync } from "node:fs";
import path from "node:path";

const outDir = "out/carousel";
mkdirSync(outDir, { recursive: true });
const { slides } = JSON.parse(readFileSync("src/data/carousel.json", "utf8"));
const serveUrl = await bundle({ entryPoint: path.resolve("src/index.ts") });
for (let i = 0; i < slides.length; i++) {
  const id = `carousel-${String(i + 1).padStart(2, "0")}`;
  const composition = await selectComposition({ serveUrl, id, inputProps: { index: i } });
  const output = path.join(outDir, `slide-${String(i + 1).padStart(2, "0")}.png`);
  await renderStill({ serveUrl, composition, output, inputProps: { index: i } });
  console.log(`✓ ${output}`);
}
