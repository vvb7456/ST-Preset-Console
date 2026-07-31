/**
 * Sync the version from package.json into manifest.json.
 *
 * Run automatically before `vite build` via the `prebuild` npm script.
 * This ensures manifest.json always reflects the single source of truth.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve as pathResolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = pathResolve(__dirname, '..');

const pkg = JSON.parse(readFileSync(pathResolve(root, 'package.json'), 'utf-8'));
const manifestPath = pathResolve(root, 'manifest.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));

if (manifest.version !== pkg.version) {
  manifest.version = pkg.version;
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 4) + '\n');
  console.log(`[sync-version] manifest.json updated to ${pkg.version}`);
} else {
  console.log(`[sync-version] manifest.json already at ${pkg.version}`);
}
