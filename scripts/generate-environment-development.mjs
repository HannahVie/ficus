import fs from 'node:fs';
import path from 'node:path';

function parseDotEnv(contents) {
  const out = {};
  for (const rawLine of contents.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

// Prefer PWD to keep the logical path (important in some macOS setups with case-insensitive paths).
const repoRoot = process.env.PWD || process.cwd();
const envPath = path.join(repoRoot, '.env');
const outDir = path.join(repoRoot, 'src', 'environments');
const outPath = path.join(outDir, 'environment.development.ts');

let emailFormulario = '';
if (fs.existsSync(envPath)) {
  const env = parseDotEnv(fs.readFileSync(envPath, 'utf8'));
  emailFormulario = (env.EMAIL_FORMULARIO || '').trim();
}

fs.mkdirSync(outDir, { recursive: true });

const ts =
  `// Auto-generated from .env (local only).\n` +
  `// This file is ignored by git: src/environments/environment.development.ts\n` +
  `export const environment = {\n` +
  `  production: false,\n` +
  `  emailFormulario: ${JSON.stringify(emailFormulario)}\n` +
  `};\n`;

fs.writeFileSync(outPath, ts, 'utf8');
console.log(`Generated ${path.relative(repoRoot, outPath)}`);
