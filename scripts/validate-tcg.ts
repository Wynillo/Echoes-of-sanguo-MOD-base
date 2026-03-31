// ============================================================
// Echoes of Sanguo MOD Base — TCG Archive Validator
// Validates tcg-src/ without writing a .tcg file
// Usage: npm run validate
// ============================================================

import { packTcgArchiveToBuffer } from '@wynillo/tcg-format';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = resolve(__dirname, '../tcg-src');

console.log(`Validating ${sourceDir} ...`);
try {
  await packTcgArchiveToBuffer(sourceDir);
  console.log('Validation passed.');
} catch (e) {
  console.error('Validation failed:', e instanceof Error ? e.message : e);
  process.exit(1);
}
