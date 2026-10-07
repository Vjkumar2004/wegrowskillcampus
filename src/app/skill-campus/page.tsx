import type { Metadata } from "next";
import { PAGE_SEO } from "@/constants/seo";
import Container from "@/components/common/Container";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata: Metadata = {
  title: PAGE_SEO.skillCampus.title,
  description: PAGE_SEO.skillCampus.description,
};

export default function SkillCampusPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Badge variant="brand" className="mb-3">
            Technical Division
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight mb-6">
            WeGrow Skill Campus
          </h1>
          <p className="text-lg text-brand-textSecondary leading-relaxed mb-6">
            Industry-focused technical education designed to transition students and aspiring
            engineers into production-ready software developers, cloud specialists, and technology
            innovators.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-5 rounded border border-brand-border">
              <h3 className="font-bold text-brand-navy mb-2">Hands-On Labs</h3>
              <p className="text-sm text-brand-textSecondary">
                Daily immersion in coding, debugging, architecture design, and cloud deployments.
              </p>
            </div>
            <div className="bg-white p-5 rounded border border-brand-border">
              <h3 className="font-bold text-brand-navy mb-2">Continuous Code Reviews</h3>
              <p className="text-sm text-brand-textSecondary">
                Constructive feedback on code cleanliness, testing, and modern design patterns.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button href="/programs" variant="primary">View Technical Programs</Button>
            <Button href="/contact" variant="outline">Consult an Advisor</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
