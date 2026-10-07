import { ContactDetails } from "@/types";

export const COMPANY_INFO: ContactDetails = {
  companyName: "WeGrow Skill Campus Pvt. Ltd.",
  addressPlaceholder: "[Corporate Campus Address, City, State, PIN - Placeholder]",
  phonePlaceholder: "[+91 XXXXX XXXXX - Placeholder]",
  emailPlaceholder: "[admissions@wegrowskillcampus.com - Placeholder]",
  workingHours: "Monday – Saturday: 9:00 AM – 6:00 PM IST",
};

export const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://linkedin.com", ariaLabel: "Visit WeGrow on LinkedIn" },
  { name: "Instagram", href: "https://instagram.com", ariaLabel: "Visit WeGrow on Instagram" },
  { name: "YouTube", href: "https://youtube.com", ariaLabel: "Visit WeGrow on YouTube" },
  { name: "Facebook", href: "https://facebook.com", ariaLabel: "Visit WeGrow on Facebook" },
];

export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skill Campus", href: "/skill-campus" },
  { label: "B School", href: "/b-school" },
  { label: "Industry", href: "/industry" },
  { label: "Placements", href: "/placements" },
  { label: "Global Exposure", href: "/global-exposure" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_PROGRAM_LINKS = [
  { label: "Technical Training", href: "/programs#technical" },
  { label: "Business & Leadership", href: "/programs#business" },
  { label: "Industry Projects", href: "/programs#projects" },
  { label: "Career Guidance", href: "/skill-campus#guidance" },
  { label: "Placement Support", href: "/placements#support" },
  { label: "Global Opportunities", href: "/global-exposure#opportunities" },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Sitemap", href: "/sitemap.xml" },
];
