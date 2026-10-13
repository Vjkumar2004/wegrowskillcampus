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
            Bridging the Gap Between Education and Career
          </h1>
          <p className="text-lg text-brand-textSecondary leading-relaxed mb-6">
            The biggest problem students face today isn&apos;t a lack of talent. It&apos;s the gap between
            education and career. You study hard, you get your degree... and then what? That&apos;s exactly
            the gap WeGrow Skill Campus was built to close.
          </p>
          <p className="text-lg text-brand-textSecondary leading-relaxed mb-6">
            At WeGrow, education is synchronized with actual market requirements. Our students do not
            merely memorize concepts—they build, analyze, optimize, and deploy under professional
            guidance, acquiring both technical mastery and career direction.
          </p>

          <div className="bg-white p-6 sm:p-8 rounded-lg border border-brand-border shadow-subtle space-y-4 mb-8">
            <h2 className="text-xl font-bold text-brand-navy">What We Focus On</h2>
            <ul className="space-y-3 text-sm text-brand-textPrimary">
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong>Industry-focused learning:</strong> Not theoretical—100% industry-focused.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong>Career guidance:</strong> Tailored 1-on-1 career guidance to help students make informed decisions.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span><strong>Global outlook:</strong> Global exposure via UK &amp; EU partners.</span>
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
