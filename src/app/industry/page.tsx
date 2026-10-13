import type { Metadata } from "next";
import { PAGE_SEO } from "@/constants/seo";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import PageHero from "@/components/common/PageHero";

const collaborationBenefits = [
  ["Understand skill needs", "Discuss the roles, tasks, and capabilities your team or organisation wants learning to address."],
  ["Shape relevant learning", "Explore suitable topics, learning formats, and practical activities based on the needs identified."],
  ["Review and refine", "Agree how to gather feedback and review learning objectives after a proposed engagement."],
];

export const metadata: Metadata = {
  title: PAGE_SEO.industry.title,
  description: PAGE_SEO.industry.description,
};

export default function IndustryPage() {
  return (
    <div className="bg-brand-bg pb-16 sm:pb-20">
      <PageHero
        eyebrow="For Organisations"
        title="Industry & Corporate Services"
        description="Connect with WeGrow Skill Campus to discuss workforce learning, curriculum needs, and potential collaboration."
        image="/ecosystem/corporate-services.jpg"
        imageAlt="Professionals discussing a learning and development plan"
      />
      <Container>
        <div className="w-full">
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-brand-textSecondary">
            Partnering with high-growth enterprises to deliver tailored talent incubation,
            workforce reskilling, custom technical training, and corporate recruiting solutions.
          </p>

          <div className="mb-8 rounded-[26px] border border-brand-border bg-white p-6 shadow-card sm:p-9">
            <div className="mb-6"><span className="text-sm font-bold uppercase tracking-[0.16em] text-brand-orange">Work together</span><h2 className="mt-1 text-2xl font-extrabold text-brand-navy">Engagement Models</h2></div>
            <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
              <div className="rounded-2xl border border-brand-border bg-brand-bg p-5">
                <h3 className="font-bold text-brand-navy mb-1">Campus Hiring Drives</h3>
                <p className="text-brand-textSecondary text-xs">
                  Direct recruitment from thoroughly assessed, project-ready talent batches.
                </p>
              </div>
              <div className="rounded-2xl border border-brand-border bg-orange-50/70 p-5">
                <h3 className="font-bold text-brand-navy mb-1">Curriculum Co-Creation</h3>
                <p className="text-brand-textSecondary text-xs">
                  Design specialized skill tracks matched to your upcoming tech stack needs.
                </p>
              </div>
              <div className="rounded-2xl border border-brand-border bg-orange-50/70 p-5">
                <h3 className="font-bold text-brand-navy mb-1">Corporate Upskilling</h3>
                <p className="text-brand-textSecondary text-xs">
                  Intensive modern engineering workshops for your existing engineering teams.
                </p>
              </div>
              <div className="rounded-2xl border border-brand-border bg-brand-bg p-5">
                <h3 className="font-bold text-brand-navy mb-1">Live Project Collaboration</h3>
                <p className="text-brand-textSecondary text-xs">
                  Sponsor problem statements and evaluate candidates on real sprint executions.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <div className="mb-6 border-b border-brand-border pb-4"><span className="text-sm font-bold uppercase tracking-[0.16em] text-brand-orange">A practical partnership</span><h2 className="mt-1 text-2xl font-extrabold text-brand-navy sm:text-3xl">Start With the Learning Need</h2></div>
            <p className="mb-6 max-w-4xl leading-7 text-brand-textSecondary">Every organisation has different priorities. A conversation about the audience, current capabilities, desired outcomes, and practical constraints can help identify whether a learning collaboration is appropriate.</p>
            <div className="grid gap-5 md:grid-cols-3">{collaborationBenefits.map(([title, description], index) => <article key={title} className="rounded-2xl border border-brand-border bg-white p-6 shadow-subtle"><span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 font-extrabold text-brand-orange">0{index + 1}</span><h3 className="mb-2 font-bold text-brand-navy">{title}</h3><p className="text-sm leading-6 text-brand-textSecondary">{description}</p></article>)}</div>
          </section>

          <section className="mb-8 grid gap-6 rounded-[26px] bg-orange-50 p-7 sm:p-9 lg:grid-cols-2">
            <div><h2 className="text-2xl font-extrabold text-brand-navy">Who can get in touch?</h2><p className="mt-3 leading-7 text-brand-textSecondary">Organisations, employers, academic institutions, and community groups can contact WeGrow to discuss a potential learning initiative or share a skills-development requirement.</p></div>
            <div className="rounded-2xl border border-orange-100 bg-white p-6"><h3 className="font-bold text-brand-navy">Helpful details to include</h3><ul className="mt-3 grid gap-2 text-sm leading-6 text-brand-textSecondary">{["Your organisation and point of contact", "The learners or teams you want to support", "Skills or topics you have in mind", "Preferred format and possible timeframe"].map((item) => <li key={item} className="flex gap-3"><span className="font-bold text-brand-orange">→</span><span>{item}</span></li>)}</ul></div>
          </section>

          <p className="mb-8 text-sm leading-6 text-brand-textSecondary">Engagements are subject to discussion, feasibility, and written confirmation. Specific hiring drives, recruitment services, custom training, delivery schedules, and outcomes are available only when agreed by both parties.</p>

          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">Discuss Corporate Partnership</Button>
            <Button href="/programs" variant="outline">Browse Talent Curriculum</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
