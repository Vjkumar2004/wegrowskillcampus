import type { Metadata } from "next";
import { PAGE_SEO } from "@/constants/seo";
import Container from "@/components/common/Container";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata: Metadata = {
  title: PAGE_SEO.bSchool.title,
  description: PAGE_SEO.bSchool.description,
};

export default function BSchoolPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Badge variant="orange" className="mb-3">
            Management & Leadership Division
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight mb-6">
            WeGrow B School
          </h1>
          <p className="text-lg text-brand-textSecondary leading-relaxed mb-6">
            Business and leadership development tracks structured to build critical thinking,
            market intuition, operational excellence, and impactful executive presence.
          </p>

          <div className="bg-white p-6 rounded-lg border border-brand-border space-y-4 mb-8">
            <h2 className="text-lg font-bold text-brand-navy">Core Management Focus Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-brand-textPrimary">
              <div className="p-3 bg-slate-50 rounded">Strategic Business Case Studies</div>
              <div className="p-3 bg-slate-50 rounded">Managerial Communication & Negotiation</div>
              <div className="p-3 bg-slate-50 rounded">Data-Driven Decision Making</div>
              <div className="p-3 bg-slate-50 rounded">Operations & Product Management</div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button href="/programs" variant="primary">Explore Management Tracks</Button>
            <Button href="/contact" variant="outline">Admissions Enquiry</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
