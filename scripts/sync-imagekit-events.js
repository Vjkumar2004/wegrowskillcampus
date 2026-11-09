const fs = require('fs');
const path = require('path');
const ImageKit = require('imagekit');

// Load environment variables from .env.local
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
const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT || process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/Deepak2004';

if (!publicKey || !privateKey) {
  console.error('Error: IMAGEKIT_PUBLIC_KEY and IMAGEKIT_PRIVATE_KEY must be set in .env.local');
  process.exit(1);
}

const ik = new ImageKit({
  publicKey,
  privateKey,
  urlEndpoint
});

const KNOWN_FOLDERS = {
  "WeGrow3.0": {
    title: "WeGrow 3.0 Grand Conclave & Startup Summit",
    category: "Innovation & Startups",
    description: "Inspiring student breakthroughs, visionary keynote addresses, and celebrating entrepreneurial milestones at the flagship WeGrow 3.0 campus edition.",
    priority: 1
  },
  "Digital_marketing_workshop": {
    title: "Digital Marketing & AI Tech Bootcamps",
    category: "Workshops & Labs",
    description: "Specialized industry training bootcamps in Artificial Intelligence, Digital Marketing strategies, and Full-Stack development technologies.",
    priority: 2
  },
  "krishna_jayanthi_event": {
    title: "Krishna Jayanthi Cultural Celebration",
    category: "Cultural & Festivals",
    description: "Vibrant cultural celebrations, traditional music, and joyful festivities embodying campus heritage and unity.",
    priority: 3
  },
  "conference": {
    title: "National Academic & Research Conference",
    category: "Conferences",
    description: "Scholars, industry leaders, and educators deliberating on futuristic education, research methodologies, and technological transformation.",
    priority: 4
  },
  "Entrepreneur_meeting": {
    title: "Entrepreneurship & Startup Summit",
    category: "Innovation & Startups",
    description: "Budding entrepreneurs pitching ideas, networking with startup founders, and receiving mentorship on venture building.",
    priority: 5
  },
  "Women_entrepreneurship_meeting": {
    title: "Women in Leadership & Entrepreneurship Conclave",
    category: "Leadership & Conclaves",
    description: "Empowering women changemakers, visionary entrepreneurs, and thought leaders through keynote addresses, panel debates, and felicitations.",
    priority: 6
  },
  "workshops": {
    title: "Hands-on Technical Workshops & Bootcamps",
    category: "Workshops & Labs",
    description: "Immersive practical lab sessions, technology demonstrations, and industry skill-building under expert faculty guidance.",
    priority: 7
  },
  "Placements": {
    title: "Campus Placement & Corporate Recruitment Drives",
    category: "Placements & Careers",
    description: "Recruitment drives connecting top-tier corporate employers with talented students, interview rounds, and career launchpad moments.",
    priority: 8
  },
  "soft_skill_development": {
    title: "Corporate Readiness & Soft Skills Bootcamp",
    category: "Professional Training",
    description: "Intensive communication mastery, professional etiquette, public speaking, and team leadership workshops.",
    priority: 9
  },
  "Clg_events": {
    title: "Campus Life & Guest Lectures",
    category: "Campus Life",
    description: "Distinguished guest sessions, industry expert interactions, and academic discourse providing practical knowledge and real-world perspectives.",
    priority: 10
  },
  "tour_pics": {
    title: "Educational Tours & Field Journeys",
    category: "Field Excursions",
    description: "Experiential learning beyond classrooms with educational visits, industrial immersion tours, and collaborative student group journeys.",
    priority: 11
  },
  "Industrial_Visit": {
    title: "Industrial Immersion & Factory Visits",
    category: "Field Excursions",
    description: "On-site industrial exposure, manufacturing facility tours, and interacting with technical teams at leading corporate plants.",
    priority: 12
  }
};

function formatSlug(folderName) {
  return folderName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function formatTitle(folderName) {
  return folderName
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}

function detectCategory(folderName) {
  const lower = folderName.toLowerCase();
  if (lower.includes('hackathon') || lower.includes('workshop') || lower.includes('bootcamp') || lower.includes('lab')) return 'Workshops & Labs';
  if (lower.includes('summit') || lower.includes('startup') || lower.includes('innovation') || lower.includes('conclave')) return 'Innovation & Startups';
  if (lower.includes('conference') || lower.includes('symposia') || lower.includes('seminar')) return 'Conferences';
  if (lower.includes('fest') || lower.includes('cultural') || lower.includes('celebration')) return 'Cultural & Festivals';
  if (lower.includes('placement') || lower.includes('interview') || lower.includes('career')) return 'Placements & Careers';
  if (lower.includes('tour') || lower.includes('visit') || lower.includes('trip')) return 'Field Excursions';
  return 'Campus Life';
}

async function syncAll() {
  console.log('Fetching all files from ImageKit API...');
  const allFiles = [];
  let skip = 0;
  while (true) {
    const list = await ik.listFiles({ skip, limit: 100 });
    if (!list || list.length === 0) break;
    allFiles.push(...list);
    if (list.length < 100) break;
    skip += list.length;
  }

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
  const eventFiles = allFiles.filter(f => {
    const p = (f.filePath || '').toLowerCase();
    return p.startsWith('/events/') && imageExtensions.some(ext => p.endsWith(ext));
  });

  const byFolder = {};
  eventFiles.forEach(f => {
    const parts = f.filePath.split('/');
    if (parts.length >= 3) {
      const folder = parts[2];
      if (!byFolder[folder]) byFolder[folder] = [];
      byFolder[folder].push(f);
    }
  });

  const events = [];
  for (const folder of Object.keys(byFolder)) {
    const files = byFolder[folder];
    if (!files || files.length === 0) continue;

    const meta = KNOWN_FOLDERS[folder] || {
      title: formatTitle(folder),
      category: detectCategory(folder),
      description: `Campus highlights and photo archives from ${formatTitle(folder)}.`,
      priority: 99
    };

    const slug = formatSlug(folder);
    const photos = files.map((file, idx) => ({
      id: `${slug}-${idx + 1}`,
      thumb: `${file.filePath}?tr=w-600,q-80`,
      full: `${file.filePath}?tr=w-1600,q-85`,
      alt: `${meta.title} photo ${idx + 1} (${file.name})`
    }));

    events.push({
      id: slug,
      slug,
      title: meta.title,
      category: meta.category,
      description: meta.description,
      coverImage: photos[0],
      photoCount: photos.length,
      photos
    });
  }

  // Sort events by priority
  events.sort((a, b) => {
    const pA = Object.entries(KNOWN_FOLDERS).find(([k]) => formatSlug(k) === a.slug)?.[1]?.priority ?? 99;
    const pB = Object.entries(KNOWN_FOLDERS).find(([k]) => formatSlug(k) === b.slug)?.[1]?.priority ?? 99;
    return pA - pB;
  });

  const targetPath = path.join(__dirname, '..', 'src', 'data', 'eventsData.ts');
  const fileContent = `// Auto-generated Event Data for WeGrow Skill Campus
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

export const EVENTS_DATA: EventItem[] = ${JSON.stringify(events, null, 2)};
`;

  fs.writeFileSync(targetPath, fileContent, 'utf-8');
  console.log(`\nSuccessfully synced ${events.length} events (${events.reduce((s, e) => s + e.photoCount, 0)} photos) from ImageKit directly into src/data/eventsData.ts!`);
  events.forEach(e => console.log(`  - [${e.category}] ${e.title}: ${e.photoCount} photos`));
}

syncAll().catch(err => {
  console.error('Sync failed:', err);
  process.exit(1);
});

