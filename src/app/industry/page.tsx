import type { Metadata } from "next";
import { PAGE_SEO } from "@/constants/seo";
import Container from "@/components/common/Container";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata: Metadata = {
  title: PAGE_SEO.industry.title,
  description: PAGE_SEO.industry.description,
};

export default function IndustryPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Badge variant="brand" className="mb-3">
            Corporate Solutions
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight mb-6">
            Industry & Corporate Services
          </h1>
          <p className="text-lg text-brand-textSecondary leading-relaxed mb-6">
            Partnering with high-growth enterprises to deliver tailored talent incubation,
            workforce reskilling, custom technical training, and corporate recruiting solutions.
          </p>

          <div className="bg-white p-6 rounded-lg border border-brand-border space-y-4 mb-8">
            <h2 className="text-lg font-bold text-brand-navy">Engagement Models</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="border border-slate-200 p-4 rounded">
                <h3 className="font-bold text-brand-navy mb-1">Campus Hiring Drives</h3>
                <p className="text-brand-textSecondary text-xs">
                  Direct recruitment from thoroughly assessed, project-ready talent batches.
                </p>
              </div>
              <div className="border border-slate-200 p-4 rounded">
                <h3 className="font-bold text-brand-navy mb-1">Curriculum Co-Creation</h3>
                <p className="text-brand-textSecondary text-xs">
                  Design specialized skill tracks matched to your upcoming tech stack needs.
                </p>
              </div>
              <div className="border border-slate-200 p-4 rounded">
                <h3 className="font-bold text-brand-navy mb-1">Corporate Upskilling</h3>
                <p className="text-brand-textSecondary text-xs">
                  Intensive modern engineering workshops for your existing engineering teams.
                </p>
              </div>
              <div className="border border-slate-200 p-4 rounded">
                <h3 className="font-bold text-brand-navy mb-1">Live Project Collaboration</h3>
                <p className="text-brand-textSecondary text-xs">
                  Sponsor problem statements and evaluate candidates on real sprint executions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button href="/contact" variant="primary">Discuss Corporate Partnership</Button>
            <Button href="/programs" variant="outline">Browse Talent Curriculum</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
