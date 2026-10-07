export interface SeoConfig {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: string;
  ogImage: string;
}

export const SITE_METADATA = {
  siteName: "WeGrow Skill Campus",
  defaultTitle: "WeGrow Skill Campus | Skills, Careers & Industry-Focused Training",
  defaultDescription:
    "Industry-focused training, practical learning, career guidance, real-world exposure and placement support through WeGrow Skill Campus.",
  siteUrl: "https://www.wegrowskillcampus.example", // Placeholder domain until confirmed
  ogImage: "/images/og-image.jpg",
  twitterHandle: "@wegrowcampus",
};

export const PAGE_SEO: Record<string, SeoConfig> = {
  home: {
    title: "WeGrow Skill Campus | Skills, Careers & Industry-Focused Training",
    description:
      "Industry-focused training, practical learning, career guidance, real-world exposure and placement support through WeGrow Skill Campus.",
    canonicalUrl: "/",
    ogType: "website",
    ogImage: "/images/og-image.jpg",
  },
  about: {
    title: "About Us | WeGrow Skill Campus",
    description:
      "Learn about WeGrow Skill Campus, our vision to bridge academic education and industry expectations, and our holistic learning methodology.",
    canonicalUrl: "/about",
    ogType: "website",
    ogImage: "/images/og-image.jpg",
  },
  skillCampus: {
    title: "Skill Campus | Technical Education & Hands-On Labs",
    description:
      "Practical technical training programs designed with modern software stacks, real project builds, and mentor-led code reviews.",
    canonicalUrl: "/skill-campus",
    ogType: "website",
    ogImage: "/images/og-image.jpg",
  },
  bSchool: {
    title: "B School | Business Leadership & Executive Skills",
    description:
      "Management education focusing on business acumen, managerial problem solving, executive presentation, and industry case studies.",
    canonicalUrl: "/b-school",
    ogType: "website",
    ogImage: "/images/og-image.jpg",
  },
  industry: {
    title: "Industry & Corporate Services | Talent & Training Solutions",
    description:
      "Collaborative corporate talent solutions, enterprise upskilling, curriculum co-creation, and campus recruitment partnerships.",
    canonicalUrl: "/industry",
    ogType: "website",
    ogImage: "/images/og-image.jpg",
  },
  placements: {
    title: "Placements & Career Success | WeGrow Skill Campus",
    description:
      "Structured career roadmap from interview preparation and mock assessments to recruitment drives and placement support.",
    canonicalUrl: "/placements",
    ogType: "website",
    ogImage: "/images/og-image.jpg",
  },
  globalExposure: {
    title: "Global Exposure | International Opportunities & Standards",
    description:
      "Connected to the world of work through international curriculum standards, cross-border best practices, and global exposure programs.",
    canonicalUrl: "/global-exposure",
    ogType: "website",
    ogImage: "/images/og-image.jpg",
  },
  programs: {
    title: "Explore Programs | WeGrow Skill Campus",
    description:
      "Browse our industry-focused technical and management programs tailored to jumpstart enterprise careers.",
    canonicalUrl: "/programs",
    ogType: "website",
    ogImage: "/images/og-image.jpg",
  },
  contact: {
    title: "Contact Us | WeGrow Skill Campus",
    description:
      "Get in touch with admissions, corporate partnerships, and campus counselling at WeGrow Skill Campus.",
    canonicalUrl: "/contact",
    ogType: "website",
    ogImage: "/images/og-image.jpg",
  },
};
