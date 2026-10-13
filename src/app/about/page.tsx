import type { Metadata } from "next";
import Image from "next/image";
import { PAGE_SEO } from "@/constants/seo";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import PageHero from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
};

const coreValues = [
  ["Growth", "We believe learning is a continuous journey of improvement and discovery."],
  ["Practical Excellence", "We encourage learners to apply knowledge, evaluate outcomes, and refine their abilities."],
  ["Innovation", "We welcome new ideas, emerging technologies, and creative approaches to problem-solving."],
  ["Integrity", "We value honest communication, responsible practices, and transparent learner support."],
  ["Inclusivity", "We aim to create a respectful learning environment for people from different educational and professional backgrounds."],
  ["Career Readiness", "We focus on helping learners build capabilities they can demonstrate in academic, professional, and practical settings."],
];

const learningApproach = [
  ["Learn", "Understand core concepts through structured instruction and guided learning activities."],
  ["Practice", "Strengthen your understanding through exercises, demonstrations, assignments, and tool-based activities."],
  ["Apply", "Work on projects and practical scenarios that encourage independent thinking and problem-solving."],
  ["Prepare", "Develop professional communication, presentation, resume, and interview skills."],
  ["Progress", "Review your development, identify areas for improvement, and continue building your capabilities."],
];

const learnerGroups = [
  ["Students", "Develop additional skills alongside your academic education."],
  ["Graduates", "Strengthen your profile and prepare for career opportunities."],
  ["Working professionals", "Explore new tools, update existing knowledge, and support your growth."],
  ["Career explorers", "Investigate new fields and identify paths that fit your interests."],
];

const learnerBenefits = [
  ["A clear starting point", "Review your interests and current experience so you can choose a learning direction with purpose."],
  ["Skills you can demonstrate", "Practise explaining what you learned and showing your work through assignments or projects included in your program."],
  ["Support as you progress", "Ask questions, work through challenges, and use feedback to identify what to practise next."],
];

export default function AboutPage() {
  return (
    <div className="bg-brand-bg pb-16 sm:pb-20">
      <PageHero
        eyebrow="About WeGrow"
        title="About WeGrow Skill Campus"
        description="WeGrow Skill Campus helps students develop technical skills and prepare for career opportunities through practical learning, industry-relevant knowledge, and personal development."
        image="/about-section.png"
        imageAlt="WeGrow Skill Campus learning centre"
        imagePosition="object-center"
      />
      <Container>
        <div className="w-full">
          <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-8 text-brand-textSecondary sm:text-lg">
            We aim to create a learning environment where education goes beyond theory through
            structured programs, practical exercises, projects, and professional development
            activities. Our programs are for students, graduates, and working professionals who
            want to strengthen existing abilities, learn new skills, or explore career pathways.
          </p>

          <div className="mb-16 grid gap-6 lg:grid-cols-2">
            <section className="relative overflow-hidden rounded-2xl border border-brand-border bg-white p-7 shadow-card sm:p-9">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#F7820E]" aria-hidden="true" />
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF1E3] text-lg font-extrabold text-[#F7820E]">01</span>
              <h2 className="mb-3 text-2xl font-bold text-[#0B3B8F]">Our Vision</h2>
              <p className="leading-7 text-[#3B4A66]">
                To become a trusted learning destination that empowers individuals with relevant
                skills, practical knowledge, and the confidence to thrive in a technology-driven,
                interconnected world.
              </p>
            </section>

            <section className="relative overflow-hidden rounded-2xl border border-brand-border bg-white p-7 shadow-card sm:p-9">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#0B3B8F]" aria-hidden="true" />
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF1FC] text-lg font-extrabold text-[#0B3B8F]">02</span>
              <h2 className="mb-3 text-2xl font-bold text-[#0B3B8F]">Our Mission</h2>
              <p className="mb-4 leading-7 text-[#3B4A66]">To provide quality training, practical experience, and career guidance through accessible, structured, career-oriented learning.</p>
              <ul className="grid gap-2 text-sm leading-6 text-[#3B4A66] sm:grid-cols-2">
                <li>Connect concepts with practical applications.</li>
                <li>Encourage innovation, creativity, and problem-solving.</li>
                <li>Build communication and workplace readiness.</li>
                <li>Promote continuous learning and technology awareness.</li>
                <li className="sm:col-span-2">Guide learners as they work toward individual career goals.</li>
              </ul>
            </section>
          </div>

          <section className="mb-16">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#F7820E]">What Guides Us</span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#0B3B8F] sm:text-4xl">Our Core Values</h2>
              <p className="mt-3 leading-7 text-[#3B4A66]">The principles that shape how we teach, support, and learn together.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map(([title, description], index) => (
                <article key={title} className="group rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-[0_8px_24px_rgba(11,59,143,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-[#F7820E]/50 hover:shadow-[0_16px_34px_rgba(11,59,143,0.12)]">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF1E3] text-sm font-extrabold text-[#F7820E]">0{index + 1}</span>
                  <h3 className="mb-2 text-lg font-bold text-[#0B3B8F]">{title}</h3>
                  <p className="text-sm leading-6 text-[#3B4A66]">{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-16 rounded-[28px] bg-[#EAF1FC] p-6 sm:p-9 lg:p-10">
            <div className="mb-8 text-center">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#F7820E]">How We Learn</span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#0B3B8F]">Learning that moves step by step</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {learningApproach.map(([title, description], index) => (
                <article key={title} className="rounded-2xl border border-white bg-white p-5 shadow-sm">
                  <span className="mb-3 block text-2xl font-extrabold text-[#F7820E]">0{index + 1}</span>
                  <h3 className="mb-2 font-bold text-[#0B3B8F]">{title}</h3>
                  <p className="text-sm leading-6 text-[#3B4A66]">{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-16 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative min-h-[300px] overflow-hidden rounded-[24px] shadow-card sm:min-h-[380px]">
              <Image src="/ecosystem/skill-campus.jpg" alt="Learners working together on a practical exercise" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3B8F]/70 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-lg font-bold text-white sm:bottom-7 sm:left-7">A learning space for every stage of your journey</p>
            </div>
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#F7820E]">Who We Welcome</span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#0B3B8F] sm:text-4xl">Who can learn with us?</h2>
              <p className="mt-3 leading-7 text-[#3B4A66]">Explore a learning path that matches your experience, interests, and goals.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {learnerGroups.map(([title, description]) => (
                  <div key={title} className="rounded-xl border border-[#E3E8F0] bg-white p-4 shadow-sm">
                    <h3 className="font-bold text-[#0B3B8F]">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#3B4A66]">{description}</p>
                  </div>
                ))}
              </div>
            </div>
            </section>

          <section className="mb-16 grid gap-8 rounded-[28px] border border-brand-border bg-white p-7 shadow-card sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-12">
            <div><span className="text-sm font-bold uppercase tracking-[0.18em] text-[#F7820E]">Learning with purpose</span><h2 className="mt-2 text-3xl font-extrabold text-[#0B3B8F] sm:text-4xl">What learners can expect</h2><p className="mt-4 leading-7 text-[#3B4A66]">Every learner brings a different starting point. Our aim is to make the next step easier to understand, with structured learning, practice, and guidance that supports steady progress.</p></div>
            <div className="grid gap-4 sm:grid-cols-3">{learnerBenefits.map(([title, description], index) => <article key={title} className="rounded-2xl bg-brand-bg p-5"><span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1E3] font-extrabold text-[#F7820E]">0{index + 1}</span><h3 className="mb-2 font-bold text-[#0B3B8F]">{title}</h3><p className="text-sm leading-6 text-[#3B4A66]">{description}</p></article>)}</div>
          </section>

          <section className="flex flex-col items-start justify-between gap-6 rounded-[24px] bg-[#0B3B8F] p-7 text-white shadow-card sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange-200">Our Commitment</span>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Your progress matters to us.</h2>
              <p className="mt-3 leading-7 text-white/85">We aim to support every learner with a clear learning direction, practical development opportunities, and guidance appropriate to their goals.</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button href="/programs" variant="primary">Explore Programs</Button>
              <Button href="/contact" variant="white">Get In Touch</Button>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
