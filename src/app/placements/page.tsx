import type { Metadata } from "next";
import { PAGE_SEO } from "@/constants/seo";
import Container from "@/components/common/Container";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata: Metadata = {
  title: PAGE_SEO.placements.title,
  description: PAGE_SEO.placements.description,
};

export default function PlacementsPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Badge variant="brand" className="mb-3">
            Career Outcome Support
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight mb-6">
            Placements & Career Advancement
          </h1>
          <p className="text-lg text-brand-textSecondary leading-relaxed mb-6">
            We bridge our students directly to career opportunities through a rigorous preparation
            methodology covering portfolio building, mock technical interviews, aptitude
            strengthening, and dedicated company recruitment interactions.
          </p>

          <div className="bg-white p-6 rounded-lg border border-brand-border space-y-4 mb-8">
            <h2 className="text-lg font-bold text-brand-navy">Our Placement Framework</h2>
            <div className="space-y-3 text-sm text-brand-textPrimary">
              <div className="p-3 bg-slate-50 rounded">
                <strong>01. Portfolio & Resume Architecture:</strong> Real GitHub code repositories and live deployed projects that speak directly to hiring managers.
              </div>
              <div className="p-3 bg-slate-50 rounded">
                <strong>02. Technical Drill Sessions:</strong> Comprehensive system design, algorithm problem solving, and architecture reviews.
              </div>
              <div className="p-3 bg-slate-50 rounded">
                <strong>03. Mock Interview Panels:</strong> Simulated interviews conducted by seasoned industry specialists with actionable scorecards.
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button href="/programs" variant="primary">Explore Career Programs</Button>
            <Button href="/contact" variant="outline">Speak to Career Advisor</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
