import type { Metadata } from "next";
import { PAGE_SEO } from "@/constants/seo";
import Container from "@/components/common/Container";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata: Metadata = {
  title: PAGE_SEO.globalExposure.title,
  description: PAGE_SEO.globalExposure.description,
};

export default function GlobalExposurePage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Badge variant="orange" className="mb-3">
            Worldwide Perspectives
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight mb-6">
            Global Exposure
          </h1>
          <p className="text-lg text-brand-textSecondary leading-relaxed mb-6">
            Preparing students for the international workforce by instilling global engineering
            benchmarks, cross-border best practices, and distributed teamwork protocols.
          </p>

          <div className="bg-white p-6 rounded-lg border border-brand-border space-y-4 mb-8">
            <h2 className="text-lg font-bold text-brand-navy">International Opportunities Architecture</h2>
            <div className="space-y-3 text-sm text-brand-textPrimary">
              <div className="p-3 bg-slate-50 rounded">
                <strong>Global Tech Stack Alignment:</strong> Syllabi aligned with leading standards adopted across North America, Europe, and Asia-Pacific.
              </div>
              <div className="p-3 bg-slate-50 rounded">
                <strong>Cross-Border Agile Standards:</strong> Asynchronous communication, documentation discipline, and remote sprint tools.
              </div>
              <div className="p-3 bg-slate-50 rounded">
                <strong>International Certifications:</strong> Targeted preparation for recognized cloud and engineering certifications.
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button href="/programs" variant="primary">Explore Aligned Programs</Button>
            <Button href="/contact" variant="outline">Enquire for Global Cohort</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
