// Auto-generated Event Data for WeGrow Skill Campus
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

export const EVENTS_DATA: EventItem[] = [
  {
    "id": "krishna-jayanthi",
    "slug": "krishna-jayanthi",
    "title": "Krishna Jayanthi Cultural Celebration",
    "category": "Cultural & Festivals",
    "description": "Vibrant cultural celebrations, traditional music, and joyful festivities embodying campus heritage and unity.",
    "coverImage": {
      "id": "krishna-jayanthi-1",
      "thumb": "/events/krishna-jayanthi/3v1a9696-thumb.webp",
      "full": "/events/krishna-jayanthi/3v1a9696-full.webp",
      "alt": "Krishna Jayanthi Cultural Celebration photo 1"
    },
    "photoCount": 2,
    "photos": [
      {
        "id": "krishna-jayanthi-1",
        "thumb": "/events/krishna-jayanthi/3v1a9696-thumb.webp",
        "full": "/events/krishna-jayanthi/3v1a9696-full.webp",
        "alt": "Krishna Jayanthi Cultural Celebration photo 1"
      },
      {
        "id": "krishna-jayanthi-2",
        "thumb": "/events/krishna-jayanthi/3v1a9733-thumb.webp",
        "full": "/events/krishna-jayanthi/3v1a9733-full.webp",
        "alt": "Krishna Jayanthi Cultural Celebration photo 2"
      }
    ]
  },
  {
    "id": "academic-conference",
    "slug": "academic-conference",
    "title": "National Academic & Research Conference",
    "category": "Conferences",
    "description": "Scholars, industry leaders, and educators deliberating on futuristic education, research methodologies, and technological transformation.",
    "coverImage": {
      "id": "academic-conference-1",
      "thumb": "/events/academic-conference/3v1a1206-thumb.webp",
      "full": "/events/academic-conference/3v1a1206-full.webp",
      "alt": "National Academic & Research Conference photo 1"
    },
    "photoCount": 3,
    "photos": [
      {
        "id": "academic-conference-1",
        "thumb": "/events/academic-conference/3v1a1206-thumb.webp",
        "full": "/events/academic-conference/3v1a1206-full.webp",
        "alt": "National Academic & Research Conference photo 1"
      },
      {
        "id": "academic-conference-2",
        "thumb": "/events/academic-conference/3v1a1225-thumb.webp",
        "full": "/events/academic-conference/3v1a1225-full.webp",
        "alt": "National Academic & Research Conference photo 2"
      },
      {
        "id": "academic-conference-3",
        "thumb": "/events/academic-conference/3v1a1226-thumb.webp",
        "full": "/events/academic-conference/3v1a1226-full.webp",
        "alt": "National Academic & Research Conference photo 3"
      }
    ]
  },
  {
    "id": "entrepreneurship-summit",
    "slug": "entrepreneurship-summit",
    "title": "Entrepreneurship & Startup Summit",
    "category": "Innovation & Startups",
    "description": "Budding entrepreneurs pitching ideas, networking with startup founders, and receiving mentorship on venture building.",
    "coverImage": {
      "id": "entrepreneurship-summit-1",
      "thumb": "/events/entrepreneurship-summit/3v1a2282-thumb.webp",
      "full": "/events/entrepreneurship-summit/3v1a2282-full.webp",
      "alt": "Entrepreneurship & Startup Summit photo 1"
    },
    "photoCount": 7,
    "photos": [
      {
        "id": "entrepreneurship-summit-1",
        "thumb": "/events/entrepreneurship-summit/3v1a2282-thumb.webp",
        "full": "/events/entrepreneurship-summit/3v1a2282-full.webp",
        "alt": "Entrepreneurship & Startup Summit photo 1"
      },
      {
        "id": "entrepreneurship-summit-2",
        "thumb": "/events/entrepreneurship-summit/3v1a2285-thumb.webp",
        "full": "/events/entrepreneurship-summit/3v1a2285-full.webp",
        "alt": "Entrepreneurship & Startup Summit photo 2"
      },
      {
        "id": "entrepreneurship-summit-3",
        "thumb": "/events/entrepreneurship-summit/3v1a2287-thumb.webp",
        "full": "/events/entrepreneurship-summit/3v1a2287-full.webp",
        "alt": "Entrepreneurship & Startup Summit photo 3"
      },
      {
        "id": "entrepreneurship-summit-4",
        "thumb": "/events/entrepreneurship-summit/3v1a2329-thumb.webp",
        "full": "/events/entrepreneurship-summit/3v1a2329-full.webp",
        "alt": "Entrepreneurship & Startup Summit photo 4"
      },
      {
        "id": "entrepreneurship-summit-5",
        "thumb": "/events/entrepreneurship-summit/3v1a2410-thumb.webp",
        "full": "/events/entrepreneurship-summit/3v1a2410-full.webp",
        "alt": "Entrepreneurship & Startup Summit photo 5"
      },
      {
        "id": "entrepreneurship-summit-6",
        "thumb": "/events/entrepreneurship-summit/3v1a2430-thumb.webp",
        "full": "/events/entrepreneurship-summit/3v1a2430-full.webp",
        "alt": "Entrepreneurship & Startup Summit photo 6"
      },
      {
        "id": "entrepreneurship-summit-7",
        "thumb": "/events/entrepreneurship-summit/3v1a2433-thumb.webp",
        "full": "/events/entrepreneurship-summit/3v1a2433-full.webp",
        "alt": "Entrepreneurship & Startup Summit photo 7"
      }
    ]
  },
  {
    "id": "women-entrepreneurship",
    "slug": "women-entrepreneurship",
    "title": "Women in Leadership & Entrepreneurship Conclave",
    "category": "Leadership & Conclaves",
    "description": "Empowering women changemakers, visionary entrepreneurs, and thought leaders through keynote addresses, panel debates, and felicitations.",
    "coverImage": {
      "id": "women-entrepreneurship-1",
      "thumb": "/events/women-entrepreneurship/3v1a0234-thumb.webp",
      "full": "/events/women-entrepreneurship/3v1a0234-full.webp",
      "alt": "Women in Leadership & Entrepreneurship Conclave photo 1"
    },
    "photoCount": 10,
    "photos": [
      {
        "id": "women-entrepreneurship-1",
        "thumb": "/events/women-entrepreneurship/3v1a0234-thumb.webp",
        "full": "/events/women-entrepreneurship/3v1a0234-full.webp",
        "alt": "Women in Leadership & Entrepreneurship Conclave photo 1"
      },
      {
        "id": "women-entrepreneurship-2",
        "thumb": "/events/women-entrepreneurship/3v1a0241-thumb.webp",
        "full": "/events/women-entrepreneurship/3v1a0241-full.webp",
        "alt": "Women in Leadership & Entrepreneurship Conclave photo 2"
      },
      {
        "id": "women-entrepreneurship-3",
        "thumb": "/events/women-entrepreneurship/3v1a0271-thumb.webp",
        "full": "/events/women-entrepreneurship/3v1a0271-full.webp",
        "alt": "Women in Leadership & Entrepreneurship Conclave photo 3"
      },
      {
        "id": "women-entrepreneurship-4",
        "thumb": "/events/women-entrepreneurship/3v1a0281-thumb.webp",
        "full": "/events/women-entrepreneurship/3v1a0281-full.webp",
        "alt": "Women in Leadership & Entrepreneurship Conclave photo 4"
      },
      {
        "id": "women-entrepreneurship-5",
        "thumb": "/events/women-entrepreneurship/3v1a0311-thumb.webp",
        "full": "/events/women-entrepreneurship/3v1a0311-full.webp",
        "alt": "Women in Leadership & Entrepreneurship Conclave photo 5"
      },
      {
        "id": "women-entrepreneurship-6",
        "thumb": "/events/women-entrepreneurship/3v1a0326-thumb.webp",
        "full": "/events/women-entrepreneurship/3v1a0326-full.webp",
        "alt": "Women in Leadership & Entrepreneurship Conclave photo 6"
      },
      {
        "id": "women-entrepreneurship-7",
        "thumb": "/events/women-entrepreneurship/3v1a0337-thumb.webp",
        "full": "/events/women-entrepreneurship/3v1a0337-full.webp",
        "alt": "Women in Leadership & Entrepreneurship Conclave photo 7"
      },
      {
        "id": "women-entrepreneurship-8",
        "thumb": "/events/women-entrepreneurship/3v1a9185-thumb.webp",
        "full": "/events/women-entrepreneurship/3v1a9185-full.webp",
        "alt": "Women in Leadership & Entrepreneurship Conclave photo 8"
      },
      {
        "id": "women-entrepreneurship-9",
        "thumb": "/events/women-entrepreneurship/3v1a9219-thumb.webp",
        "full": "/events/women-entrepreneurship/3v1a9219-full.webp",
        "alt": "Women in Leadership & Entrepreneurship Conclave photo 9"
      },
      {
        "id": "women-entrepreneurship-10",
        "thumb": "/events/women-entrepreneurship/3v1a9222-thumb.webp",
        "full": "/events/women-entrepreneurship/3v1a9222-full.webp",
        "alt": "Women in Leadership & Entrepreneurship Conclave photo 10"
      }
    ]
  },
  {
    "id": "technical-workshops",
    "slug": "technical-workshops",
    "title": "Hands-on Technical Workshops & Bootcamps",
    "category": "Workshops & Labs",
    "description": "Immersive practical lab sessions, technology demonstrations, and industry skill-building under expert faculty guidance.",
    "coverImage": {
      "id": "technical-workshops-1",
      "thumb": "/events/technical-workshops/3v1a2052-thumb.webp",
      "full": "/events/technical-workshops/3v1a2052-full.webp",
      "alt": "Hands-on Technical Workshops & Bootcamps photo 1"
    },
    "photoCount": 8,
    "photos": [
      {
        "id": "technical-workshops-1",
        "thumb": "/events/technical-workshops/3v1a2052-thumb.webp",
        "full": "/events/technical-workshops/3v1a2052-full.webp",
        "alt": "Hands-on Technical Workshops & Bootcamps photo 1"
      },
      {
        "id": "technical-workshops-2",
        "thumb": "/events/technical-workshops/3v1a2056-thumb.webp",
        "full": "/events/technical-workshops/3v1a2056-full.webp",
        "alt": "Hands-on Technical Workshops & Bootcamps photo 2"
      },
      {
        "id": "technical-workshops-3",
        "thumb": "/events/technical-workshops/3v1a2062-thumb.webp",
        "full": "/events/technical-workshops/3v1a2062-full.webp",
        "alt": "Hands-on Technical Workshops & Bootcamps photo 3"
      },
      {
        "id": "technical-workshops-4",
        "thumb": "/events/technical-workshops/3v1a2067-thumb.webp",
        "full": "/events/technical-workshops/3v1a2067-full.webp",
        "alt": "Hands-on Technical Workshops & Bootcamps photo 4"
      },
      {
        "id": "technical-workshops-5",
        "thumb": "/events/technical-workshops/3v1a2080-thumb.webp",
        "full": "/events/technical-workshops/3v1a2080-full.webp",
        "alt": "Hands-on Technical Workshops & Bootcamps photo 5"
      },
      {
        "id": "technical-workshops-6",
        "thumb": "/events/technical-workshops/3v1a2083-thumb.webp",
        "full": "/events/technical-workshops/3v1a2083-full.webp",
        "alt": "Hands-on Technical Workshops & Bootcamps photo 6"
      },
      {
        "id": "technical-workshops-7",
        "thumb": "/events/technical-workshops/3v1a2086-thumb.webp",
        "full": "/events/technical-workshops/3v1a2086-full.webp",
        "alt": "Hands-on Technical Workshops & Bootcamps photo 7"
      },
      {
        "id": "technical-workshops-8",
        "thumb": "/events/technical-workshops/3v1a2091-thumb.webp",
        "full": "/events/technical-workshops/3v1a2091-full.webp",
        "alt": "Hands-on Technical Workshops & Bootcamps photo 8"
      }
    ]
  },
  {
    "id": "placement-drives",
    "slug": "placement-drives",
    "title": "Campus Placement & Corporate Recruitment Drives",
    "category": "Placements & Careers",
    "description": "Recruitment drives connecting top-tier corporate employers with talented students, interview rounds, and career launchpad moments.",
    "coverImage": {
      "id": "placement-drives-1",
      "thumb": "/events/placement-drives/3v1a0170-thumb.webp",
      "full": "/events/placement-drives/3v1a0170-full.webp",
      "alt": "Campus Placement & Corporate Recruitment Drives photo 1"
    },
    "photoCount": 5,
    "photos": [
      {
        "id": "placement-drives-1",
        "thumb": "/events/placement-drives/3v1a0170-thumb.webp",
        "full": "/events/placement-drives/3v1a0170-full.webp",
        "alt": "Campus Placement & Corporate Recruitment Drives photo 1"
      },
      {
        "id": "placement-drives-2",
        "thumb": "/events/placement-drives/3v1a0173-thumb.webp",
        "full": "/events/placement-drives/3v1a0173-full.webp",
        "alt": "Campus Placement & Corporate Recruitment Drives photo 2"
      },
      {
        "id": "placement-drives-3",
        "thumb": "/events/placement-drives/3v1a0175-thumb.webp",
        "full": "/events/placement-drives/3v1a0175-full.webp",
        "alt": "Campus Placement & Corporate Recruitment Drives photo 3"
      },
      {
        "id": "placement-drives-4",
        "thumb": "/events/placement-drives/3v1a7335-thumb.webp",
        "full": "/events/placement-drives/3v1a7335-full.webp",
        "alt": "Campus Placement & Corporate Recruitment Drives photo 4"
      },
      {
        "id": "placement-drives-5",
        "thumb": "/events/placement-drives/3v1a7339-thumb.webp",
        "full": "/events/placement-drives/3v1a7339-full.webp",
        "alt": "Campus Placement & Corporate Recruitment Drives photo 5"
      }
    ]
  },
  {
    "id": "soft-skills-bootcamp",
    "slug": "soft-skills-bootcamp",
    "title": "Corporate Readiness & Soft Skills Bootcamp",
    "category": "Professional Training",
    "description": "Intensive communication mastery, professional etiquette, public speaking, and team leadership workshops.",
    "coverImage": {
      "id": "soft-skills-bootcamp-1",
      "thumb": "/events/soft-skills-bootcamp/3v1a4112-thumb.webp",
      "full": "/events/soft-skills-bootcamp/3v1a4112-full.webp",
      "alt": "Corporate Readiness & Soft Skills Bootcamp photo 1"
    },
    "photoCount": 4,
    "photos": [
      {
        "id": "soft-skills-bootcamp-1",
        "thumb": "/events/soft-skills-bootcamp/3v1a4112-thumb.webp",
        "full": "/events/soft-skills-bootcamp/3v1a4112-full.webp",
        "alt": "Corporate Readiness & Soft Skills Bootcamp photo 1"
      },
      {
        "id": "soft-skills-bootcamp-2",
        "thumb": "/events/soft-skills-bootcamp/3v1a4174-thumb.webp",
        "full": "/events/soft-skills-bootcamp/3v1a4174-full.webp",
        "alt": "Corporate Readiness & Soft Skills Bootcamp photo 2"
      },
      {
        "id": "soft-skills-bootcamp-3",
        "thumb": "/events/soft-skills-bootcamp/3v1a4176-thumb.webp",
        "full": "/events/soft-skills-bootcamp/3v1a4176-full.webp",
        "alt": "Corporate Readiness & Soft Skills Bootcamp photo 3"
      },
      {
        "id": "soft-skills-bootcamp-4",
        "thumb": "/events/soft-skills-bootcamp/3v1a4182-thumb.webp",
        "full": "/events/soft-skills-bootcamp/3v1a4182-full.webp",
        "alt": "Corporate Readiness & Soft Skills Bootcamp photo 4"
      }
    ]
  },
  {
    "id": "campus-celebrations",
    "slug": "campus-celebrations",
    "title": "Campus Life & Annual Celebrations",
    "category": "Campus Life",
    "description": "Vibrant student gatherings, college fest performances, and extracurricular showcases celebrating talent and campus spirit.",
    "coverImage": {
      "id": "campus-celebrations-1",
      "thumb": "/events/campus-celebrations/3v1a0006-thumb.webp",
      "full": "/events/campus-celebrations/3v1a0006-full.webp",
      "alt": "Campus Life & Annual Celebrations photo 1"
    },
    "photoCount": 6,
    "photos": [
      {
        "id": "campus-celebrations-1",
        "thumb": "/events/campus-celebrations/3v1a0006-thumb.webp",
        "full": "/events/campus-celebrations/3v1a0006-full.webp",
        "alt": "Campus Life & Annual Celebrations photo 1"
      },
      {
        "id": "campus-celebrations-2",
        "thumb": "/events/campus-celebrations/3v1a0007-thumb.webp",
        "full": "/events/campus-celebrations/3v1a0007-full.webp",
        "alt": "Campus Life & Annual Celebrations photo 2"
      },
      {
        "id": "campus-celebrations-3",
        "thumb": "/events/campus-celebrations/3v1a0023-thumb.webp",
        "full": "/events/campus-celebrations/3v1a0023-full.webp",
        "alt": "Campus Life & Annual Celebrations photo 3"
      },
      {
        "id": "campus-celebrations-4",
        "thumb": "/events/campus-celebrations/3v1a0024-thumb.webp",
        "full": "/events/campus-celebrations/3v1a0024-full.webp",
        "alt": "Campus Life & Annual Celebrations photo 4"
      },
      {
        "id": "campus-celebrations-5",
        "thumb": "/events/campus-celebrations/3v1a0077-thumb.webp",
        "full": "/events/campus-celebrations/3v1a0077-full.webp",
        "alt": "Campus Life & Annual Celebrations photo 5"
      },
      {
        "id": "campus-celebrations-6",
        "thumb": "/events/campus-celebrations/3v1a0085-thumb.webp",
        "full": "/events/campus-celebrations/3v1a0085-full.webp",
        "alt": "Campus Life & Annual Celebrations photo 6"
      }
    ]
  },
  {
    "id": "industrial-excursions",
    "slug": "industrial-excursions",
    "title": "Educational Tours & Industrial Excursions",
    "category": "Field Excursions",
    "description": "Experiential learning beyond classrooms with industrial exposure tours, educational visits, and collaborative team journeys.",
    "coverImage": {
      "id": "industrial-excursions-1",
      "thumb": "/events/industrial-excursions/img20261011081419-thumb.webp",
      "full": "/events/industrial-excursions/img20261011081419-full.webp",
      "alt": "Educational Tours & Industrial Excursions photo 1"
    },
    "photoCount": 6,
    "photos": [
      {
        "id": "industrial-excursions-1",
        "thumb": "/events/industrial-excursions/img20261011081419-thumb.webp",
        "full": "/events/industrial-excursions/img20261011081419-full.webp",
        "alt": "Educational Tours & Industrial Excursions photo 1"
      },
      {
        "id": "industrial-excursions-2",
        "thumb": "/events/industrial-excursions/img20261011081428-thumb.webp",
        "full": "/events/industrial-excursions/img20261011081428-full.webp",
        "alt": "Educational Tours & Industrial Excursions photo 2"
      },
      {
        "id": "industrial-excursions-3",
        "thumb": "/events/industrial-excursions/img20261011081855-thumb.webp",
        "full": "/events/industrial-excursions/img20261011081855-full.webp",
        "alt": "Educational Tours & Industrial Excursions photo 3"
      },
      {
        "id": "industrial-excursions-4",
        "thumb": "/events/industrial-excursions/img20261011083500-thumb.webp",
        "full": "/events/industrial-excursions/img20261011083500-full.webp",
        "alt": "Educational Tours & Industrial Excursions photo 4"
      },
      {
        "id": "industrial-excursions-5",
        "thumb": "/events/industrial-excursions/img20261011083535-thumb.webp",
        "full": "/events/industrial-excursions/img20261011083535-full.webp",
        "alt": "Educational Tours & Industrial Excursions photo 5"
      },
      {
        "id": "industrial-excursions-6",
        "thumb": "/events/industrial-excursions/img20261011105210-thumb.webp",
        "full": "/events/industrial-excursions/img20261011105210-full.webp",
        "alt": "Educational Tours & Industrial Excursions photo 6"
      }
    ]
  }
];
