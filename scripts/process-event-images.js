const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const config = [
  {
    slug: 'krishna-jayanthi',
    title: 'Krishna Jayanthi Cultural Celebration',
    category: 'Cultural & Festivals',
    description: 'Vibrant cultural celebrations, traditional music, and joyful festivities embodying campus heritage and unity.',
    dir: 'C:\\Users\\Deepak\\OneDrive\\Desktop\\krishna jayanthi event',
    images: ['3V1A9696.JPG', '3V1A9733.JPG']
  },
  {
    slug: 'academic-conference',
    title: 'National Academic & Research Conference',
    category: 'Conferences',
    description: 'Scholars, industry leaders, and educators deliberating on futuristic education, research methodologies, and technological transformation.',
    dir: 'C:\\Users\\Deepak\\OneDrive\\Desktop\\conference',
    images: ['3V1A1206.JPG', '3V1A1225.JPG', '3V1A1226.JPG']
  },
  {
    slug: 'entrepreneurship-summit',
    title: 'Entrepreneurship & Startup Summit',
    category: 'Innovation & Startups',
    description: 'Budding entrepreneurs pitching ideas, networking with startup founders, and receiving mentorship on venture building.',
    dir: 'C:\\Users\\Deepak\\OneDrive\\Desktop\\Entrepreneur meeting',
    images: ['3V1A2282.JPG', '3V1A2285.JPG', '3V1A2287.JPG', '3V1A2329.JPG', '3V1A2410.JPG', '3V1A2430.JPG', '3V1A2433.JPG']
  },
  {
    slug: 'women-entrepreneurship',
    title: 'Women in Leadership & Entrepreneurship Conclave',
    category: 'Leadership & Conclaves',
    description: 'Empowering women changemakers, visionary entrepreneurs, and thought leaders through keynote addresses, panel debates, and felicitations.',
    dir: 'C:\\Users\\Deepak\\OneDrive\\Desktop\\Women entrepreneurship meeting',
    images: [
      '3V1A0234.JPG', '3V1A0241.JPG', '3V1A0271.JPG', '3V1A0281.JPG',
      '3V1A0311.JPG', '3V1A0326.JPG', '3V1A0337.JPG', '3V1A9185.JPG',
      '3V1A9219.JPG', '3V1A9222.JPG'
    ]
  },
  {
    slug: 'technical-workshops',
    title: 'Hands-on Technical Workshops & Bootcamps',
    category: 'Workshops & Labs',
    description: 'Immersive practical lab sessions, technology demonstrations, and industry skill-building under expert faculty guidance.',
    dir: 'C:\\Users\\Deepak\\OneDrive\\Desktop\\workshops',
    images: [
      '3V1A2052.JPG', '3V1A2056.JPG', '3V1A2062.JPG', '3V1A2067.JPG',
      '3V1A2080.JPG', '3V1A2083.JPG', '3V1A2086.JPG', '3V1A2091.JPG'
    ]
  },
  {
    slug: 'placement-drives',
    title: 'Campus Placement & Corporate Recruitment Drives',
    category: 'Placements & Careers',
    description: 'Recruitment drives connecting top-tier corporate employers with talented students, interview rounds, and career launchpad moments.',
    dir: 'C:\\Users\\Deepak\\OneDrive\\Desktop\\Placements',
    images: [
      '3V1A0170.JPG', '3V1A0173.JPG', '3V1A0175.JPG', '3V1A7335.JPG',
      '3V1A7339.JPG'
    ]
  },
  {
    slug: 'soft-skills-bootcamp',
    title: 'Corporate Readiness & Soft Skills Bootcamp',
    category: 'Professional Training',
    description: 'Intensive communication mastery, professional etiquette, public speaking, and team leadership workshops.',
    dir: 'C:\\Users\\Deepak\\OneDrive\\Desktop\\soft skill development',
    images: ['3V1A4112.JPG', '3V1A4174.JPG', '3V1A4176.JPG', '3V1A4182.JPG']
  },
  {
    slug: 'campus-celebrations',
    title: 'Campus Life & Annual Celebrations',
    category: 'Campus Life',
    description: 'Vibrant student gatherings, college fest performances, and extracurricular showcases celebrating talent and campus spirit.',
    dir: 'C:\\Users\\Deepak\\OneDrive\\Desktop\\Clg events',
    images: ['3V1A0006.JPG', '3V1A0007.JPG', '3V1A0023.JPG', '3V1A0024.JPG', '3V1A0077.JPG', '3V1A0085.JPG']
  },
  {
    slug: 'industrial-excursions',
    title: 'Educational Tours & Industrial Excursions',
    category: 'Field Excursions',
    description: 'Experiential learning beyond classrooms with industrial exposure tours, educational visits, and collaborative team journeys.',
    dir: 'C:\\Users\\Deepak\\OneDrive\\Desktop\\tour pics',
    images: [
      'IMG20261011081419.jpg', 'IMG20261011081428.jpg', 'IMG20261011081855.jpg',
      'IMG20261011083500.jpg', 'IMG20261011083535.jpg', 'IMG20261011105210.jpg'
    ]
  }
];

async function run() {
  const publicEventsDir = path.join(__dirname, '..', 'public', 'events');
  if (!fs.existsSync(publicEventsDir)) {
    fs.mkdirSync(publicEventsDir, { recursive: true });
  }

  const eventsData = [];
  let originalTotalBytes = 0;
  let compressedTotalBytes = 0;

  for (const item of config) {
    console.log(`Processing [${item.title}]...`);
    const categoryDir = path.join(publicEventsDir, item.slug);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    const photos = [];

    for (let i = 0; i < item.images.length; i++) {
      const imgFileName = item.images[i];
      const srcPath = path.join(item.dir, imgFileName);
      const baseName = path.parse(imgFileName).name.toLowerCase().replace(/[^a-z0-9_-]/g, '_');
      
      const thumbFile = `${baseName}-thumb.webp`;
      const fullFile = `${baseName}-full.webp`;
      
      const thumbDest = path.join(categoryDir, thumbFile);
      const fullDest = path.join(categoryDir, fullFile);

      const srcStat = fs.statSync(srcPath);
      originalTotalBytes += srcStat.size;

      // 1. Generate Full Version (1920px max width, quality 85 WebP)
      await sharp(srcPath)
        .rotate() // Auto-orient based on EXIF
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(fullDest);

      // 2. Generate Thumbnail Version (600px max width, quality 80 WebP)
      await sharp(srcPath)
        .rotate()
        .resize({ width: 600, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(thumbDest);

      const fullStat = fs.statSync(fullDest);
      const thumbStat = fs.statSync(thumbDest);
      compressedTotalBytes += fullStat.size + thumbStat.size;

      photos.push({
        id: `${item.slug}-${i + 1}`,
        thumb: `/events/${item.slug}/${thumbFile}`,
        full: `/events/${item.slug}/${fullFile}`,
        alt: `${item.title} photo ${i + 1}`
      });
    }

    eventsData.push({
      id: item.slug,
      slug: item.slug,
      title: item.title,
      category: item.category,
      description: item.description,
      coverImage: photos[0],
      photoCount: photos.length,
      photos
    });
  }

  // Write TypeScript data file
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const tsContent = `// Auto-generated Event Data for WeGrow Skill Campus
export interface EventPhoto {
  id: string;
  thumb: string;
  full: string;
  alt: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  coverImage: EventPhoto;
  photoCount: number;
  photos: EventPhoto[];
}

export const EVENT_CATEGORIES = [
  "All",
  "Conferences",
  "Cultural & Festivals",
  "Innovation & Startups",
  "Leadership & Conclaves",
  "Workshops & Labs",
  "Placements & Careers",
  "Professional Training",
  "Campus Life",
  "Field Excursions",
] as const;

export const EVENTS_DATA: EventItem[] = ${JSON.stringify(eventsData, null, 2)};
`;

  fs.writeFileSync(path.join(dataDir, 'eventsData.ts'), tsContent, 'utf-8');

  console.log('\n====================================');
  console.log('Processing Complete!');
  console.log(`Original Total: ${(originalTotalBytes / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Optimized Total (Full + Thumb): ${(compressedTotalBytes / (1024 * 1024)).toFixed(2)} MB`);
  const savings = ((1 - (compressedTotalBytes / originalTotalBytes)) * 100).toFixed(1);
  console.log(`Savings: ${savings}% bandwidth saved!`);
  console.log('Data written to src/data/eventsData.ts');
  console.log('====================================\n');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

