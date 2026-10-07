export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  description?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  category?: string;
  placeholderText: string;
  logoUrl?: string;
}

export interface EcosystemCardItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  ctaText: string;
  ctaHref: string;
}

export interface CorePillarItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineStepItem {
  step: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  batchOrTrack: string;
  isPlaceholder: boolean;
}

export interface ProgramItem {
  id: string;
  title: string;
  category: "Technical" | "Business" | "Leadership" | "Industry Project";
  description: string;
  duration: string;
  mode: string;
}

export interface ContactDetails {
  companyName: string;
  addressPlaceholder: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  workingHours: string;
}
