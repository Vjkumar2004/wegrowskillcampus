import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { PAGE_SEO } from "@/constants/seo";
import { COURSES } from "@/constants/courses";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import PageHero from "@/components/common/PageHero";
import CourseCatalog from "@/components/sections/CourseCatalog";

export const metadata: Metadata = {
  title: PAGE_SEO.programs.title,
  description: PAGE_SEO.programs.description,
};

export default function ProgramsPage() {
  return (
    <div className="bg-brand-bg pb-16 sm:pb-20">
      <PageHero
        eyebrow="Career Programs"
        title="Learn Today. Get Job-Ready Tomorrow."
        description="Explore industry-aligned courses in software development, data, cyber security, digital marketing, design, accounting, and office productivity. Training options and current availability can be confirmed with our campus team."
        image="/skillcampus-hero.png"
        imageAlt="Learners collaborating during a practical training session"
        imagePosition="object-center"
      />
      <Container>
        <div className="w-full">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-brand-orange">Find your learning path</span>
              <h2 className="mt-1 text-2xl font-extrabold text-brand-navy sm:text-3xl">Explore Our Courses</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-brand-textSecondary">Course content, batch availability, and learning mode can vary. Contact us to confirm the details for your preferred program.</p>
          </div>

          <CourseCatalog courses={COURSES} />

          <section className="mb-12 rounded-[28px] bg-brand-navy p-7 text-white shadow-card sm:p-10">
            <div className="mb-7 max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-orange-200">Why WeGrow</span>
              <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">More than course lessons</h2>
              <p className="mt-3 leading-7 text-white/80">WeGrow focuses on industry-oriented education, practical learning, personalised guidance, and career preparation to help learners work toward their goals.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Expert Training Approach", "Learn with trainers who bring practical knowledge and professional experience."],
                ["Practical Learning Focus", "Practise with projects, real-world scenarios, and industry-standard tools, as included in the course."],
                ["Personalized Guidance", "Get individual attention, doubt-clearing, and guidance suited to your learning pace."],
                ["Placement Support", "Career support can include resume building, mock interviews, and job-search assistance."],
                ["Career-Oriented Training", "Explore curriculum topics selected to build skills relevant to professional pathways."],
                ["Live Project Exposure", "Build project experience and a portfolio through activities available in your course."],
              ].map(([title, description], index) => (
                <article key={title} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                  <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange text-sm font-extrabold text-white">0{index + 1}</span>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">{description}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-xs leading-5 text-white/65">Placement support does not guarantee a job or salary. Outcomes depend on learner performance, qualifications, employer requirements, and market conditions.</p>
          </section>

          <div className="w-full rounded-[26px] border border-orange-100 bg-orange-50 p-7 text-center sm:p-9">
            <BookOpen className="mx-auto mb-3 h-8 w-8 text-brand-orange" aria-hidden="true" />
            <h2 className="text-xl font-extrabold text-brand-navy sm:text-2xl">Need help choosing a course?</h2>
            <p className="mx-auto mb-6 mt-2 max-w-2xl text-sm leading-6 text-brand-textSecondary">Talk with our team about your goals, course content, current batch schedule, and available training modes.</p>
            <Button href="/contact" variant="primary">Speak with a course advisor</Button>
            <p className="mt-5 text-xs leading-5 text-brand-textSecondary">*Indicative monthly pay references for comparable early-career roles in Tamil Nadu, checked 13 October 2026. Figures are rounded from public salary data; sources have different update dates and sample sizes, and some are not limited to freshers. Cybersecurity uses a Chennai vacancy estimate. Actual offers vary by skills, experience, employer, and location. Course completion does not guarantee a job or salary.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
