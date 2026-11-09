import ImageKit from "imagekit";
import { EVENTS_DATA, EventItem, EventPhoto } from "@/data/eventsData";

export interface FolderMeta {
  title: string;
  category: string;
  description: string;
  priority: number;
}

export interface ImageKitFileItem {
  fileId?: string;
  name: string;
  filePath: string;
  url?: string;
  fileType?: string;
}

export const KNOWN_FOLDERS: Record<string, FolderMeta> = {
  "WeGrow3.0": {
    title: "WeGrow 3.0 Grand Conclave & Startup Summit",
    category: "Innovation & Startups",
    description: "Inspiring student breakthroughs, visionary keynote addresses, and celebrating entrepreneurial milestones at the flagship WeGrow 3.0 campus edition.",
    priority: 1,
  },
  "Digital_marketing_workshop": {
    title: "Digital Marketing & AI Tech Bootcamps",
    category: "Workshops & Labs",
    description: "Specialized industry training bootcamps in Artificial Intelligence, Digital Marketing strategies, and Full-Stack development technologies.",
    priority: 2,
  },
  "krishna_jayanthi_event": {
    title: "Krishna Jayanthi Cultural Celebration",
    category: "Cultural & Festivals",
    description: "Vibrant cultural celebrations, traditional music, and joyful festivities embodying campus heritage and unity.",
    priority: 3,
  },
  "conference": {
    title: "National Academic & Research Conference",
    category: "Conferences",
    description: "Scholars, industry leaders, and educators deliberating on futuristic education, research methodologies, and technological transformation.",
    priority: 4,
  },
  "Entrepreneur_meeting": {
    title: "Entrepreneurship & Startup Summit",
    category: "Innovation & Startups",
    description: "Budding entrepreneurs pitching ideas, networking with startup founders, and receiving mentorship on venture building.",
    priority: 5,
  },
  "Women_entrepreneurship_meeting": {
    title: "Women in Leadership & Entrepreneurship Conclave",
    category: "Leadership & Conclaves",
    description: "Empowering women changemakers, visionary entrepreneurs, and thought leaders through keynote addresses, panel debates, and felicitations.",
    priority: 6,
  },
  "workshops": {
    title: "Hands-on Technical Workshops & Bootcamps",
    category: "Workshops & Labs",
    description: "Immersive practical lab sessions, technology demonstrations, and industry skill-building under expert faculty guidance.",
    priority: 7,
  },
  "Placements": {
    title: "Campus Placement & Corporate Recruitment Drives",
    category: "Placements & Careers",
    description: "Recruitment drives connecting top-tier corporate employers with talented students, interview rounds, and career launchpad moments.",
    priority: 8,
  },
  "soft_skill_development": {
    title: "Corporate Readiness & Soft Skills Bootcamp",
    category: "Professional Training",
    description: "Intensive communication mastery, professional etiquette, public speaking, and team leadership workshops.",
    priority: 9,
  },
  "Clg_events": {
    title: "Campus Life & Guest Lectures",
    category: "Campus Life",
    description: "Distinguished guest sessions, industry expert interactions, and academic discourse providing practical knowledge and real-world perspectives.",
    priority: 10,
  },
  "tour_pics": {
    title: "Educational Tours & Field Journeys",
    category: "Field Excursions",
    description: "Experiential learning beyond classrooms with educational visits, industrial immersion tours, and collaborative student group journeys.",
    priority: 11,
  },
  "Industrial_Visit": {
    title: "Industrial Immersion & Factory Visits",
    category: "Field Excursions",
    description: "On-site industrial exposure, manufacturing facility tours, and interacting with technical teams at leading corporate plants.",
    priority: 12,
  },
};

function formatSlug(folderName: string): string {
  return folderName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatTitle(folderName: string): string {
  return folderName
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function detectCategory(folderName: string): string {
  const lower = folderName.toLowerCase();
  if (lower.includes("hackathon") || lower.includes("workshop") || lower.includes("bootcamp") || lower.includes("lab")) {
    return "Workshops & Labs";
  }
  if (lower.includes("summit") || lower.includes("startup") || lower.includes("innovation") || lower.includes("conclave")) {
    return "Innovation & Startups";
  }
  if (lower.includes("conference") || lower.includes("symposia") || lower.includes("seminar")) {
    return "Conferences";
  }
  if (lower.includes("fest") || lower.includes("cultural") || lower.includes("celebration") || lower.includes("diwali") || lower.includes("pongal")) {
    return "Cultural & Festivals";
  }
  if (lower.includes("placement") || lower.includes("interview") || lower.includes("drive") || lower.includes("career")) {
    return "Placements & Careers";
  }
  if (lower.includes("tour") || lower.includes("visit") || lower.includes("trip") || lower.includes("excursion")) {
    return "Field Excursions";
  }
  return "Campus Life";
}

// In-memory cache for fast repeated requests
let cachedEvents: EventItem[] | null = null;
let lastCacheTime = 0;
const CACHE_TTL_MS = 60 * 1000; // 60 seconds

export async function getLiveImageKitEvents(forceRefresh = false): Promise<{ events: EventItem[]; source: "live" | "cache" | "fallback" }> {
  const now = Date.now();
  if (!forceRefresh && cachedEvents && now - lastCacheTime < CACHE_TTL_MS) {
    return { events: cachedEvents, source: "cache" };
  }

  const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT || process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/Deepak2004";

  if (!publicKey || !privateKey) {
    return { events: EVENTS_DATA, source: "fallback" };
  }

  try {
    const ik = new ImageKit({
      publicKey,
      privateKey,
      urlEndpoint,
    });

    const allFiles: ImageKitFileItem[] = [];
    let skip = 0;
    while (true) {
      const list = (await ik.listFiles({ skip, limit: 100 })) as ImageKitFileItem[];
      if (!list || list.length === 0) break;
      allFiles.push(...list);
      if (list.length < 100) break;
      skip += list.length;
    }

    const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
    const eventFiles = allFiles.filter((f) => {
      const p = (f.filePath || "").toLowerCase();
      return p.startsWith("/events/") && imageExtensions.some((ext) => p.endsWith(ext));
    });

    // Group files by folder under /events/
    const byFolder: Record<string, ImageKitFileItem[]> = {};
    eventFiles.forEach((f) => {
      const parts = f.filePath.split("/");
      if (parts.length >= 3) {
        const folder = parts[2];
        if (!byFolder[folder]) byFolder[folder] = [];
        byFolder[folder].push(f);
      }
    });

    const events: EventItem[] = [];
    const folderKeys = Object.keys(byFolder);

    for (const folder of folderKeys) {
      const files = byFolder[folder];
      if (!files || files.length === 0) continue;

      const meta = KNOWN_FOLDERS[folder] || {
        title: formatTitle(folder),
        category: detectCategory(folder),
        description: `Campus highlights, key activities, and photo archives from ${formatTitle(folder)}.`,
        priority: 99,
      };

      const slug = formatSlug(folder);

      const photos: EventPhoto[] = files.map((file, idx) => {
        const baseFilePath = file.filePath;
        return {
          id: `${slug}-${idx + 1}`,
          thumb: `${baseFilePath}?tr=w-600,q-80`,
          full: `${baseFilePath}?tr=w-1600,q-85`,
          alt: `${meta.title} photo ${idx + 1} (${file.name})`,
        };
      });

      events.push({
        id: slug,
        slug,
        title: meta.title,
        category: meta.category,
        description: meta.description,
        coverImage: photos[0],
        photoCount: photos.length,
        photos,
      });
    }

    // Sort events by priority: known folders in priority order, then newest
    events.sort((a, b) => {
      const pA = Object.entries(KNOWN_FOLDERS).find(([k]) => formatSlug(k) === a.slug)?.[1]?.priority ?? 99;
      const pB = Object.entries(KNOWN_FOLDERS).find(([k]) => formatSlug(k) === b.slug)?.[1]?.priority ?? 99;
      return pA - pB;
    });

    cachedEvents = events;
    lastCacheTime = now;

    return { events, source: "live" };
  } catch (error) {
    console.error("[ImageKit Service] Failed to fetch live files from ImageKit:", error);
    return { events: cachedEvents || EVENTS_DATA, source: "fallback" };
  }
}
