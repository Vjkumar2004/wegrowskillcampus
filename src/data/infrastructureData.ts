export interface InfrastructureItem {
  id: string;
  title: string;
  category: "classroom" | "boardroom" | "counseling" | "creative";
  categoryLabel: string;
  image: string;
  description: string;
  features: string[];
}

export const INFRASTRUCTURE_DATA: InfrastructureItem[] = [
  {
    id: "infra-reception",
    title: "Grand Campus Entrance & Reception Lobby",
    category: "counseling",
    categoryLabel: "Counseling Hub",
    image: "/images/infrastructure/campus-reception.jpg",
    description: "Welcoming reception featuring WeGrow's illuminated emblem, modern slatted wood paneling, visitor lounge, and admissions desk.",
    features: ["Illuminated Emblem", "Student Helpdesk", "Waiting Lounge", "Modern Interior"],
  },
  {
    id: "infra-1",
    title: "Smart Air-Conditioned Training Hall",
    category: "classroom",
    categoryLabel: "Smart Classrooms",
    image: "/images/infrastructure/infra-1.jpg",
    description: "Fully air-conditioned interactive classroom equipped with ergonomic seating, smart displays, and modern acoustic finishing.",
    features: ["Ergonomic Seating", "High-Def Smart Panel", "Dual AC System", "High-Speed Wi-Fi"],
  },
  {
    id: "infra-5",
    title: "Seminar & Interactive Workshop Lab",
    category: "classroom",
    categoryLabel: "Smart Classrooms",
    image: "/images/infrastructure/infra-5.jpg",
    description: "State-of-the-art interactive hall featuring WeGrow's signature biophilic living wall and presentation display.",
    features: ["Biophilic Design", "Presenter Station", "Surround Audio", "Individual Workdesks"],
  },
  {
    id: "infra-9",
    title: "Digital Smartboard & Presentation Suite",
    category: "classroom",
    categoryLabel: "Smart Classrooms",
    image: "/images/infrastructure/infra-9.jpg",
    description: "Ultra-HD interactive flat panel for live coding walkthroughs, architecture diagrams, and instructor code demos.",
    features: ["Interactive 4K Display", "Live Screen Casting", "Instructor Stage", "Modern Lighting"],
  },
  {
    id: "infra-8",
    title: "Practical Code & Project Workspace",
    category: "classroom",
    categoryLabel: "Smart Classrooms",
    image: "/images/infrastructure/infra-8.jpg",
    description: "Spacious layout arranged for distraction-free coding, hackathons, and pair-programming sessions.",
    features: ["Spacious Spacing", "Dedicated Power Outlets", "Climate Control", "Natural Lighting"],
  },
  {
    id: "infra-7",
    title: "Corporate Boardroom & Placement Suite",
    category: "boardroom",
    categoryLabel: "Executive Boardroom",
    image: "/images/infrastructure/infra-7.jpg",
    description: "Executive conference suite designed for corporate recruiter meetings, campus placement interviews, and student project pitches.",
    features: ["12-Seater Table", "Integrated Cable Ports", "Acoustic Wall Panels", "Executive Swivel Chairs"],
  },
  {
    id: "infra-12",
    title: "Collaborative Innovation Boardroom",
    category: "boardroom",
    categoryLabel: "Executive Boardroom",
    image: "/images/infrastructure/infra-12.jpg",
    description: "Multi-functional conference space flanked by motivational creative murals and whiteboard collaboration zones.",
    features: ["Glass Whiteboard", "Modular Conference Setup", "High-Lumen Soft Lights", "Executive Ambience"],
  },
  {
    id: "infra-11",
    title: "Inspirational 'Focus, Lead, Shine' Mural Lounge",
    category: "creative",
    categoryLabel: "Campus Culture",
    image: "/images/infrastructure/infra-11.jpg",
    description: "Handcrafted campus wall mural inspiring students to build career focus, lead innovation, and shine in the global tech space.",
    features: ["Custom Campus Art", "Vibrant Atmosphere", "Creative Thinking Zone", "Student Hangout"],
  },
  {
    id: "infra-2",
    title: "Personal Career Counseling & Mentorship Suite",
    category: "counseling",
    categoryLabel: "Counseling Hub",
    image: "/images/infrastructure/infra-2.jpg",
    description: "Private 1-on-1 counseling cabin where students receive personalized career guidance, course roadmaps, and interview debriefs.",
    features: ["Private 1-on-1 Guidance", "Course Counseling Desk", "Calm Ambience", "Direct Mentor Access"],
  },
  {
    id: "infra-4",
    title: "Executive Director & Academic Leadership Suite",
    category: "counseling",
    categoryLabel: "Counseling Hub",
    image: "/images/infrastructure/infra-4.jpg",
    description: "Executive office featuring cultural art and welcoming atmosphere for corporate tie-ups and academic excellence reviews.",
    features: ["Executive Consultation", "Corporate Partner Desk", "Premium Interiors", "Heritage Art Wall"],
  },
  {
    id: "infra-10",
    title: "Interactive Classroom & Live Demonstration Area",
    category: "classroom",
    categoryLabel: "Smart Classrooms",
    image: "/images/infrastructure/infra-10.jpg",
    description: "Optimized for hands-on technical bootcamps with quick transition between lectures and live practical implementation.",
    features: ["Frontal Display Focus", "Ergonomic Orange Chairs", "Clear Sightlines", "Clean Minimalist Finish"],
  },
  {
    id: "infra-3",
    title: "Student Admissions & Information Center",
    category: "counseling",
    categoryLabel: "Counseling Hub",
    image: "/images/infrastructure/infra-3.jpg",
    description: "Welcoming reception and admissions helpdesk to assist aspiring students and parents with course details and campus tours.",
    features: ["Admissions Helpdesk", "Brochures & Material", "Parent Guidance", "Visitor Lounge"],
  },
  {
    id: "infra-6",
    title: "Smart Lab Discussion & Review Zone",
    category: "classroom",
    categoryLabel: "Smart Classrooms",
    image: "/images/infrastructure/infra-6.jpg",
    description: "Flexible room setup for group discussions, sprint planning, peer code reviews, and mock interview practice.",
    features: ["Sprint Review Setup", "Group Collaboration", "Flexible Seating", "High-Speed Access"],
  },
];
