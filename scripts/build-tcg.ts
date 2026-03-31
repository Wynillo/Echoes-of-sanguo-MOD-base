// ============================================================
// Echoes of Sanguo MOD Base — TCG Archive Builder
// Packs tcg-src/ into dist/base.tcg using @wynillo/tcg-format
// Usage: npm run build:tcg
// ============================================================

import { packTcgArchive } from '@wynillo/tcg-format';
import { resolve, dirname } from 'node:path';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = resolve(__dirname, '../tcg-src');
const outputDir = resolve(__dirname, '../dist');
const outputPath = resolve(outputDir, 'base.tcg');

await mkdir(outputDir, { recursive: true });

console.log(`Packing ${sourceDir} → ${outputPath} ...`);
await packTcgArchive(sourceDir, outputPath);
console.log('Done. Output: dist/base.tcg');
