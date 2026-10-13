import type { Metadata } from "next";
import { PAGE_SEO } from "@/constants/seo";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import PageHero from "@/components/common/PageHero";

const learningPillars = [
  ["Concepts before complexity", "Build understanding of fundamentals before moving into more involved tools, workflows, and scenarios."],
  ["Practice with feedback", "Use guided exercises to try techniques, find mistakes, and improve through constructive feedback."],
  ["Projects with purpose", "Where included in a program, bring multiple skills together in projects that help you practise planning and delivery."],
  ["Professional habits", "Develop documentation, communication, collaboration, and problem-solving habits alongside technical learning."],
];

const learningCycle = ["Understand the goal", "Learn a concept", "Try it in practice", "Review and improve"];

export const metadata: Metadata = {
  title: PAGE_SEO.skillCampus.title,
  description: PAGE_SEO.skillCampus.description,
};

export default function SkillCampusPage() {
  return (
    <div className="bg-brand-bg pb-16 sm:pb-20">
      <PageHero
        eyebrow="Technical Learning"
        title="WeGrow Skill Campus"
        description="Explore technical learning pathways designed to develop practical knowledge, problem-solving skills, and confidence with modern tools."
        image="/difference/industry-training.jpg"
        imageAlt="Learner practicing technical skills on a laptop"
      />
      <Container>
        <div className="w-full">
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed text-brand-textSecondary">
            Industry-focused technical education designed to transition students and aspiring
            engineers into production-ready software developers, cloud specialists, and technology
            innovators.
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-8">
            <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-subtle sm:p-7">
              <h3 className="font-bold text-brand-navy mb-2">Hands-On Labs</h3>
              <p className="text-sm text-brand-textSecondary">
                Daily immersion in coding, debugging, architecture design, and cloud deployments.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-subtle sm:p-7">
              <h3 className="font-bold text-brand-navy mb-2">Continuous Code Reviews</h3>
              <p className="text-sm text-brand-textSecondary">
                Constructive feedback on code cleanliness, testing, and modern design patterns.
              </p>
            </div>
          </div>

          <section className="mb-12 rounded-[28px] bg-brand-navy p-7 text-white shadow-card sm:p-10">
            <div className="max-w-3xl"><span className="text-sm font-bold uppercase tracking-[0.16em] text-orange-200">How learning works</span><h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Build knowledge by putting it to use</h2><p className="mt-4 leading-7 text-white/80">Technical confidence grows through repeated practice. A learner encounters a concept, applies it to a task, reviews the result, and uses that experience to take on the next challenge. Program activities and project work depend on the selected course.</p></div>
            <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{learningCycle.map((step, index) => <li key={step} className="rounded-2xl border border-white/15 bg-white/10 p-5"><span className="mb-3 block text-2xl font-extrabold text-orange-300">0{index + 1}</span><span className="font-bold">{step}</span></li>)}</ol>
          </section>

          <section className="mb-12">
            <div className="mb-6 border-b border-brand-border pb-4"><span className="text-sm font-bold uppercase tracking-[0.16em] text-brand-orange">A strong foundation</span><h2 className="mt-1 text-2xl font-extrabold text-brand-navy sm:text-3xl">The WeGrow Learning Approach</h2></div>
            <div className="grid gap-5 sm:grid-cols-2">{learningPillars.map(([title, description], index) => <article key={title} className="flex gap-4 rounded-2xl border border-brand-border bg-white p-6 shadow-subtle"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 font-extrabold text-brand-orange">0{index + 1}</span><div><h3 className="mb-2 font-bold text-brand-navy">{title}</h3><p className="text-sm leading-6 text-brand-textSecondary">{description}</p></div></article>)}</div>
          </section>

          <section className="mb-12 grid gap-6 rounded-[26px] border border-brand-border bg-white p-7 shadow-card sm:p-9 lg:grid-cols-2">
            <div><h2 className="text-2xl font-extrabold text-brand-navy">Choose a pathway that fits your goals</h2><p className="mt-3 leading-7 text-brand-textSecondary">Different learners may be exploring a first technical skill, strengthening an existing foundation, or preparing for a change in direction. Reviewing the syllabus, prerequisites, learning format, and time commitment can help you decide whether a course suits your needs.</p></div>
            <div className="rounded-2xl bg-brand-bg p-6"><h3 className="font-bold text-brand-navy">Before you enrol, consider:</h3><ul className="mt-3 space-y-3 text-sm leading-6 text-brand-textSecondary">{["What do I want to learn or be able to do?", "What experience or prerequisites does this program require?", "How much time can I set aside for classes and practice?", "What learning support and project work are included?"].map((item) => <li key={item} className="flex gap-3"><span className="font-bold text-brand-orange">✓</span><span>{item}</span></li>)}</ul></div>
          </section>

          <div className="flex flex-wrap gap-4">
            <Button href="/programs" variant="primary">View Technical Programs</Button>
            <Button href="/contact" variant="outline">Consult an Advisor</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
