import {
  StatItem,
  PartnerItem,
  EcosystemCardItem,
  CorePillarItem,
  TimelineStepItem,
  TestimonialItem,
} from "@/types";

export const HERO_CONTENT = {
  eyebrow: "SKILLS TODAY. OPPORTUNITIES TOMORROW.",
  heading: "Building Skills.\nCreating Careers.\nConnecting Industry.",
  supportingText:
    "WeGrow Skill Campus bridges the gap between education and industry through practical training, career guidance, real-world exposure and placement support.",
  primaryCta: {
    label: "Explore Programs",
    href: "/programs",
  },
  secondaryCta: {
    label: "Partner With Us",
    href: "/industry",
  },
  featureItems: [
    "Industry-Focused Training",
    "Career Guidance & Mentoring",
    "Real Project Exposure",
    "Placement Assistance",
    "Global Exposure & Partnerships",
  ],
};

// Clearly marked placeholders for statistics - no invented numbers
export const ABOUT_METRICS: StatItem[] = [
  {
    id: "metric-1",
    label: "Curriculum Pathways",
    value: "[Configurable]",
    description: "Industry-benchmarked practical tracks",
  },
  {
    id: "metric-2",
    label: "Project-Based Learning",
    value: "100%",
    description: "Real-world assignments and case studies",
  },
  {
    id: "metric-3",
    label: "Dedicated Mentorship",
    value: "1-on-1",
    description: "Personalized guidance and review",
  },
];

// Placeholder logo slots for industry partners - no invented partnerships
export const PARTNER_LOGOS: PartnerItem[] = [
  { id: "p1", name: "Corporate Partner 1", placeholderText: "Corporate Partner" },
  { id: "p2", name: "Tech Enterprise 2", placeholderText: "Technology Partner" },
  { id: "p3", name: "Industry Associate 3", placeholderText: "Industry Associate" },
  { id: "p4", name: "Global Enterprise 4", placeholderText: "Global Network" },
  { id: "p5", name: "Recruitment Partner 5", placeholderText: "Hiring Network" },
];

export const ECOSYSTEM_CARDS: EcosystemCardItem[] = [
  {
    id: "skill-campus",
    badge: "Technical Division",
    title: "WeGrow Skill Campus",
    subtitle: "Industry-focused technical education",
    description:
      "Bridging the skills gap through applied technical training, hands-on lab work, modern software stacks, and industry-oriented problem solving.",
    keyPoints: [
      "Modern full-stack and cloud foundations",
      "Real-world application development",
      "Rigorous technical code & architectural reviews",
    ],
    ctaText: "Explore Skill Campus",
    ctaHref: "/skill-campus",
  },
  {
    id: "industry-services",
    badge: "Enterprise Solutions",
    title: "Industry & Corporate Services",
    subtitle: "Training, consulting and talent solutions",
    description:
      "Collaborating with forward-looking enterprises for tailored talent incubation, workforce reskilling, and collaborative industry research initiatives.",
    keyPoints: [
      "Custom corporate talent pipelines",
      "Curriculum co-creation with companies",
      "Executive upskilling workshops",
    ],
    ctaText: "Explore Corporate Services",
    ctaHref: "/industry",
  },
];

export const CORE_PILLARS: CorePillarItem[] = [
  {
    id: "pillar-1",
    title: "Career Guidance",
    description:
      "Personalized mapping of student aspirations with real-world market demands to chart clear trajectories.",
    icon: "Compass",
  },
  {
    id: "pillar-2",
    title: "One-on-One Counselling",
    description:
      "Dedicated mentor sessions focused on identifying individual strengths, addressing blockers, and boosting confidence.",
    icon: "UserCheck",
  },
  {
    id: "pillar-3",
    title: "Industry-Focused Training",
    description:
      "Syllabi designed in tandem with active industry practitioners ensuring relevance from day one.",
    icon: "Award",
  },
  {
    id: "pillar-4",
    title: "Real Project Exposure",
    description:
      "Simulated production workflows, client-grade briefs, agile sprints, and robust code deployment experience.",
    icon: "Laptop",
  },
  {
    id: "pillar-5",
    title: "Placement Support",
    description:
      "Comprehensive interview readiness, profile building, mock technical drills, and corporate placement access.",
    icon: "Briefcase",
  },
  {
    id: "pillar-6",
    title: "Global Exposure",
    description:
      "Interaction with international frameworks, cross-border best practices, and global market standards.",
    icon: "Globe",
  },
];

export const PLACEMENT_JOURNEY: TimelineStepItem[] = [
  {
    step: "01",
    title: "Skill Development",
    description: "Foundational mastery of core technical and operational disciplines with rigorous hands-on practice.",
  },
  {
    step: "02",
    title: "Career Preparation",
    description: "Soft skills, professional etiquette, resume structuring, and personalized career roadmap alignment.",
  },
  {
    step: "03",
    title: "Industry Projects",
    description: "Live problem statements, sprint delivery, team collaboration, and code/project artifact review.",
  },
  {
    step: "04",
    title: "Interview Readiness",
    description: "Mock technical assessments, system design evaluations, HR rounds, and domain-specific drills.",
  },
  {
    step: "05",
    title: "Placement Support",
    description: "Direct campus recruitment drives, industry interview scheduling, and offer transition guidance.",
  },
];

export const SAMPLE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    quote:
      "The practical project orientation and personalized mentoring completely transformed my perspective on engineering problem solving.",
    author: "Candidate Perspective (Sample)",
    role: "Software Associate Track",
    batchOrTrack: "Technical Cohort",
    isPlaceholder: true,
  },
  {
    id: "t2",
    quote:
      "The bridge between academic theory and enterprise expectations was made effortless through realistic sprint workflows and continuous mentor feedback.",
    author: "Alumnus Perspective (Sample)",
    role: "Business Analyst Track",
    batchOrTrack: "Business Analysis Cohort",
    isPlaceholder: true,
  },
  {
    id: "t3",
    quote:
      "From technical drills to mock interview panels, the structured pathway gave me clarity and confidence during corporate assessments.",
    author: "Graduate Perspective (Sample)",
    role: "Cloud & DevOps Track",
    batchOrTrack: "Advanced Diploma",
    isPlaceholder: true,
  },
];
