/**
 * ImageKit Uploader Script
 * 
 * To sync all event photos to your ImageKit CDN:
 * 1. Add your ImageKit credentials in .env.local:
 *    IMAGEKIT_PUBLIC_KEY=your_public_key
 *    IMAGEKIT_PRIVATE_KEY=your_private_key
 *    IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id
 * 2. Run: node scripts/upload-to-imagekit.js
 */

const fs = require('fs');
const path = require('path');

// Check if imagekit npm package is available
let ImageKit;
try {
  ImageKit = require('imagekit');
} catch (e) {
  console.log('To run this script, please run: npm install imagekit');
  process.exit(0);
}

// Read .env.local if present
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      process.env[match[1]] = (match[2] || '').trim();
    }
  });
}

const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT || process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

if (!publicKey || !privateKey || !urlEndpoint) {
  console.log('\n======================================================');
  console.log('ImageKit credentials missing in .env.local:');
  console.log('IMAGEKIT_PUBLIC_KEY=...');
  console.log('IMAGEKIT_PRIVATE_KEY=...');
  console.log('IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id');
  console.log('Once added, re-run: node scripts/upload-to-imagekit.js');
  console.log('======================================================\n');
  process.exit(0);
}

const imagekit = new ImageKit({
  publicKey,
  privateKey,
  urlEndpoint,
});

async function uploadAll() {
  const publicEventsDir = path.join(__dirname, '..', 'public', 'events');
  if (!fs.existsSync(publicEventsDir)) {
    console.error('Events directory not found.');
    return;
  }

  const categories = fs.readdirSync(publicEventsDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  console.log(`Starting upload to ImageKit folder: /events/ ...`);

  for (const cat of categories) {
    const catDir = path.join(publicEventsDir, cat);
    const files = fs.readdirSync(catDir).filter(f => f.endsWith('.webp'));

    console.log(`Uploading ${files.length} photos for ${cat}...`);
    for (const file of files) {
      const filePath = path.join(catDir, file);
      const fileBuffer = fs.readFileSync(filePath);

      try {
        await imagekit.upload({
          file: fileBuffer,
          fileName: file,
          folder: `/events/${cat}`,
          useUniqueFileName: false,
        });
        console.log(`  ✓ Uploaded ${cat}/${file}`);
      } catch (err) {
        console.error(`  ✗ Failed to upload ${cat}/${file}:`, err.message);
      }
    }
  }

  console.log('\nAll photos successfully synced to ImageKit CDN!');
}

uploadAll();

