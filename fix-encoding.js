const fs = require('fs');

const filepath = 'src/app/shared/data/skills-enriched-data.ts';

// Read the file
let content = fs.readFileSync(filepath, 'utf8');

// Fix all double-encoded UTF-8 characters
const replacements = {
  'Ã©': 'é',
  'Ã¨': 'è',
  'Ã®': 'î',
  'Ã´': 'ô',
  'Ã§': 'ç',
  'Ã ': 'à',
  'Ã¢': 'â',
  'Ã»': 'û',
  'Ã¹': 'ù',
  'Ã«': 'ë',
  'Ã¯': 'ï',
  'Ãª': 'ê',
  'Ã‰': 'É',
};

for (const [bad, good] of Object.entries(replacements)) {
  const regex = new RegExp(bad, 'g');
  content = content.replace(regex, good);
}

// Write the fixed content back
fs.writeFileSync(filepath, content, 'utf8');

console.log(`Fixed encoding in ${filepath}`);
