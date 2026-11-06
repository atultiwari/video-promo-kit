#!/usr/bin/env node
/**
 * Create a promo project (thumbnails + carousel) from this skill's template.
 *
 *   node <skill>/scripts/install.mjs <folder> [--no-install] [--force]
 *
 * Usually <folder> is "<video-project>/promo": a separate small Remotion project, so it never
 * collides with the video's own code (whiteboard or motion-explainer alike).
 * The template opens with the fridge-hack thumbnails and carousel as working examples:
 * edit src/data/promo.json and src/data/carousel.json for the new video.
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SKILL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const target = args.find((a) => !a.startsWith("--"));
if (!target || args.includes("--help")) {
  console.log("Usage: node install.mjs <folder> [--no-install] [--force]");
  process.exit(target ? 0 : 2);
}
const dest = path.resolve(target);
if (fs.existsSync(dest) && fs.readdirSync(dest).filter((f) => f !== ".DS_Store").length > 0 && !args.includes("--force")) {
  console.error(`install: ${dest} is not empty. Use an empty folder, or --force.`);
  process.exit(1);
}
fs.mkdirSync(dest, { recursive: true });
fs.cpSync(path.join(SKILL, "template"), dest, { recursive: true });
fs.renameSync(path.join(dest, "gitignore"), path.join(dest, ".gitignore"));
console.log(`✓ promo template copied to ${dest}`);
if (!args.includes("--no-install")) execSync("npm install --no-audit --no-fund", { cwd: dest, stdio: "inherit" });
console.log(`
Next:
  cd ${dest}
  edit src/data/promo.json (thumbnails) and src/data/carousel.json (slides, "format": "square" | "portrait")
  npm run thumbs      -> out/thumbnails/*.png   (then: npm run phone-check -- out/thumbnails/<id>.png)
  npm run carousel    -> out/carousel/slide-NN.png + PDF
See ${path.join(SKILL, "SKILL.md")}.`);
