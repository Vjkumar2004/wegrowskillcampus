import type { Metadata } from "next";
import { PAGE_SEO } from "@/constants/seo";
import Container from "@/components/common/Container";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import { Code, Briefcase, Rocket, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.programs.title,
  description: PAGE_SEO.programs.description,
};

const PROGRAMS_LIST = [
  {
    id: "tech-fullstack",
    category: "Technical Training",
    icon: Code,
    title: "Full-Stack Enterprise Engineering",
    duration: "Full-Time / Immersion",
    mode: "Hands-on Campus & Lab",
    description:
      "Modern TypeScript, React, Next.js, robust Node.js backends, PostgreSQL, Docker, and CI/CD pipelines.",
  },
  {
    id: "business-analytics",
    category: "Business & Leadership",
    icon: Briefcase,
    title: "Applied Business & Product Management",
    duration: "Comprehensive Track",
    mode: "Hybrid / Case Study Driven",
    description:
      "Analytical decision making, sprint planning, product metric roadmaps, and executive presentation drills.",
  },
  {
    id: "industry-live-projects",
    category: "Industry Projects",
    icon: Rocket,
    title: "Enterprise Sprint Simulation Lab",
    duration: "Project Practicum",
    mode: "Live Client Briefs",
    description:
      "Work in simulated engineering squads delivering production software with real mentors and code reviews.",
  },
  {
    id: "placement-accelerator",
    category: "Career Guidance",
    icon: Sparkles,
    title: "Career & Interview Acceleration Track",
    duration: "Intensive Drills",
    mode: "1-on-1 Mentorship",
    description:
      "System design drills, data structures, resume polishing, and simulated interview panels with industry leads.",
  },
];

export default function ProgramsPage() {
  return (
    <div className="py-16 sm:py-20 bg-brand-bg">
      <Container>
        <div className="max-w-3xl mb-12">
          <Badge variant="brand" className="mb-3">
            Academic & Skill Pathways
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            Explore Programs
          </h1>
          <p className="text-lg text-brand-textSecondary leading-relaxed">
            Industry-benchmarked technical and leadership pathways crafted to equip learners with
            concrete competencies demanded by modern corporations.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {PROGRAMS_LIST.map((prog) => {
            const IconComponent = prog.icon;
            return (
              <div
                key={prog.id}
                className="bg-white border border-brand-border rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-card hover:shadow-elevated transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-50 text-brand-blue border border-blue-200 uppercase tracking-wider">
                      {prog.category}
                    </span>
                    <IconComponent className="w-5 h-5 text-brand-orange" aria-hidden="true" />
                  </div>

                  <h2 className="text-xl font-bold text-brand-navy mb-2">{prog.title}</h2>
                  <p className="text-sm text-brand-textSecondary mb-6 leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-100">
                    <div>
                      <span className="font-semibold text-slate-700">Duration: </span>
                      {prog.duration}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Format: </span>
                      {prog.mode}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Button href="/contact" variant="primary" size="sm">
                    Enquire for Cohort
                  </Button>
                  <Button href="/contact" variant="outline" size="sm">
                    Syllabus Overview
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advisory Callout */}
        <div className="bg-white p-8 rounded-lg border border-brand-border text-center max-w-2xl mx-auto shadow-subtle">
          <h3 className="text-lg font-bold text-brand-navy mb-2">Need Guidance Choosing a Pathway?</h3>
          <p className="text-sm text-brand-textSecondary mb-6">
            Our academic counselors are available to review your goals and suggest the ideal curriculum.
          </p>
          <Button href="/contact" variant="secondary">
            Schedule 1-on-1 Academic Counseling
          </Button>
        </div>
      </Container>
    </div>
  );
}
