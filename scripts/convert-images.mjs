import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const imagesDir = resolve(__dirname, '../public/images');

async function convertToWebP(filePath, quality = 75) {
  const ext = extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const inputStat = await stat(filePath);
  const inputKB = (inputStat.size / 1024).toFixed(1);

  try {
    await sharp(filePath).webp({ quality }).toFile(outputPath);
    const outputStat = await stat(outputPath);
    const outputKB = (outputStat.size / 1024).toFixed(1);
    const savings = (100 - (outputStat.size / inputStat.size) * 100).toFixed(1);
    console.log(`✅ ${basename(filePath)} (${inputKB}KB) → ${basename(outputPath)} (${outputKB}KB) saved ${savings}%`);
  } catch (err) {
    console.error(`❌ Failed: ${filePath}`, err.message);
  }
}

async function processDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDir(fullPath);
    } else {
      await convertToWebP(fullPath, 75);
    }
  }
}

console.log('Converting images to WebP...\n');
await processDir(imagesDir);
console.log('\nDone!');
