import type { Metadata } from "next";
import { PAGE_SEO } from "@/constants/seo";
import Container from "@/components/common/Container";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export const metadata: Metadata = {
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <Badge variant="brand" className="mb-3">
            About WeGrow Skill Campus
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight mb-6">
            Where Education Meets Industry
          </h1>
          <p className="text-lg text-brand-textSecondary leading-relaxed mb-6">
            WeGrow Skill Campus is committed to engineering a future where academic learning is
            seamlessly synchronized with enterprise workforce requirements. Our pedagogy focuses
            on experiential learning, mentoring by working professionals, and project simulation.
          </p>

          <div className="bg-white p-6 sm:p-8 rounded-lg border border-brand-border shadow-subtle space-y-4 mb-8">
            <h2 className="text-xl font-bold text-brand-navy">Institutional Pillars</h2>
            <ul className="space-y-3 text-sm text-brand-textPrimary">
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong>Industry Co-Creation:</strong> Syllabus crafted alongside leading engineering and corporate leaders.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong>Holistic Development:</strong> Equal emphasis on technical mastery, communication skills, and critical problem solving.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong>Career Continuity:</strong> Structured placement training, interview assessments, and corporate partner integration.</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Button href="/programs" variant="primary">Explore Programs</Button>
            <Button href="/contact" variant="outline">Get In Touch</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
