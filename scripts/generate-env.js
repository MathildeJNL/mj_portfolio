/**
 * Génère src/environments/environment.prod.ts à partir des variables
 * d'environnement (Vercel ou .env local).
 *
 * Variables attendues :
 *   - EMAILJS_SERVICE_ID
 *   - EMAILJS_TEMPLATE_ID
 *   - EMAILJS_PUBLIC_KEY
 */
const fs = require('node:fs');
const path = require('node:path');

const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } = process.env;

if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  console.error(
    '\n[generate-env] Variables manquantes. Définir EMAILJS_SERVICE_ID, ' +
    'EMAILJS_TEMPLATE_ID et EMAILJS_PUBLIC_KEY dans Vercel > Settings > Environment Variables.\n'
  );
  process.exit(1);
}

const target = path.resolve(__dirname, '..', 'src', 'environments', 'environment.prod.ts');
const content = `// Fichier généré automatiquement par scripts/generate-env.js — NE PAS COMMITTER
export const environment = {
  production: true,
  emailjs: {
    serviceId: ${JSON.stringify(EMAILJS_SERVICE_ID)},
    templateId: ${JSON.stringify(EMAILJS_TEMPLATE_ID)},
    publicKey: ${JSON.stringify(EMAILJS_PUBLIC_KEY)},
  },
};
`;

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, content, 'utf8');
console.log(`[generate-env] ${target} écrit.`);
