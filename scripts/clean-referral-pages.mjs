import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

async function addCleanup(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await addCleanup(path);
    else if (entry.name.endsWith('.html')) {
      const html = await readFile(path, 'utf8');
      if (!html.includes('src="/clean-referral.js"')) {
        await writeFile(path, html.replace('</head>', '<script src="/clean-referral.js"></script></head>'));
      }
    }
  }
}
await addCleanup('dist');
