import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";

const distDir = resolve(process.cwd(), "dist");
const indexFile = resolve(distDir, "index.html");
const fallbackFile = resolve(distDir, "404.html");

try {
  await copyFile(indexFile, fallbackFile);
  console.log("Created dist/404.html SPA fallback for GitHub Pages.");
} catch (error) {
  console.error("Failed creating dist/404.html:", error);
  process.exitCode = 1;
}
