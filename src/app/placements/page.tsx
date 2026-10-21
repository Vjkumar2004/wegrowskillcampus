import type { Metadata } from "next";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import PageHero from "@/components/common/PageHero";
import PlacementPhotoGallery from "@/components/placements/PlacementPhotoGallery";

export const metadata: Metadata = {
  title: "Career Support & Placements | WeGrow Skill Campus",
  description: "Explore resume building, interview practice, career guidance, and campus placement drives at WeGrow Skill Campus.",
};

const services = [
  { title: "Resume Building", text: "Learn how to structure a professional resume, describe your skills, highlight relevant projects, and present your education and experience clearly." },
  { title: "Interview Preparation", text: "Practise answering common interview questions, explaining your projects, discussing your strengths, and communicating your career goals." },
  { title: "Communication Skills", text: "Improve professional writing, speaking, presentation, and interpersonal communication through relevant learning activities." },
  { title: "Professional Profile Development", text: "Understand how to present your qualifications, projects, achievements, and skills in a professional portfolio or online profile." },
  { title: "Job-Search Guidance", text: "Learn how to identify suitable vacancies, review job descriptions, tailor applications, and approach the application process systematically." },
  { title: "Career Planning", text: "Explore how your interests, abilities, education, and goals can inform your next steps." },
  { title: "Project Presentation", text: "Learn how to explain the problem you addressed, the approach you used, the tools involved, and the results you achieved." },
];

const steps = ["Discover: Identify your interests, existing skills, and career objectives.", "Develop: Strengthen relevant technical and professional capabilities.", "Demonstrate: Organise projects, assignments, and achievements into a clear portfolio.", "Prepare: Practise interviews, resume presentation, and professional communication.", "Progress: Continue applying, learning, receiving feedback, and refining your approach."];

const placementAreas = [
  ["Career direction", "Explore roles connected to your interests and learning, and compare their responsibilities and skill requirements."],
  ["Application readiness", "Practise tailoring your resume and application to the role, and presenting relevant skills with clear examples."],
  ["Interview practice", "Prepare to discuss your projects, decisions, challenges, and learning in a structured and confident way."],
  ["Opportunity awareness", "Build habits for finding and reviewing openings, checking eligibility, and keeping track of applications."],
];

export default function CareerSupportPage() {
  return (
    <div className="bg-brand-bg pb-16 sm:pb-20">
      <PageHero
        eyebrow="Career Preparation"
        title="Career Support & Placements"
        description="Build your skills, strengthen your profile, and prepare for what’s next with practical career guidance and campus placement opportunities."
        image="/difference/career-guidance.jpg"
        imageAlt="Learner preparing for a professional career"
        imagePosition="object-center"
      />
      <Container>
        <div className="w-full">
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-brand-textSecondary">
            Preparing for a career involves more than acquiring technical knowledge. It also requires the ability to present your strengths, communicate clearly, demonstrate your skills, and navigate the job-search process. WeGrow Skill Campus aims to support learners in developing these essential professional capabilities.
          </p>

          <div className="mb-6 border-b border-brand-border pb-4">
            <span className="text-sm font-bold uppercase tracking-[0.16em] text-brand-orange">Take your next step</span>
            <h2 className="mt-1 text-2xl font-extrabold text-brand-navy sm:text-3xl">Our Career Support Services</h2>
          </div>
          <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="group rounded-2xl border border-brand-border bg-white p-7 shadow-subtle transition hover:-translate-y-1 hover:border-brand-orange/50 hover:shadow-card">
                <span className="mb-5 block h-1 w-12 rounded-full bg-brand-orange transition-all group-hover:w-20" aria-hidden="true" />
                <h3 className="mb-2 text-lg font-bold text-brand-navy">{service.title}</h3>
                <p className="text-sm leading-relaxed text-brand-textSecondary">{service.text}</p>
              </article>
            ))}
          </div>

          {/* Real Campus Placement Drive Photos Streamed from ImageKit CDN */}
          <PlacementPhotoGallery />

          <section className="mb-12 rounded-2xl border border-brand-border bg-white p-7 shadow-card sm:p-9">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Our Career Readiness Framework</h2>
            <ol className="grid gap-3 text-brand-textSecondary sm:grid-cols-2">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-xl bg-brand-bg p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-extrabold text-brand-orange">{index + 1}</span>
                  <span className="leading-6">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-12">
            <div className="mb-6 border-b border-brand-border pb-4">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-brand-orange">From learning to opportunity</span>
              <h2 className="mt-1 text-2xl font-extrabold text-brand-navy sm:text-3xl">Placement Preparation, One Step at a Time</h2>
            </div>
            <p className="mb-6 max-w-4xl leading-7 text-brand-textSecondary">
              A thoughtful job search starts with understanding your strengths and continues with preparation, practice, and follow-through. Learners can use these areas to organise career preparation alongside technical development.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {placementAreas.map(([title, description], index) => (
                <article key={title} className="rounded-2xl border border-brand-border bg-white p-6 shadow-subtle">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 font-extrabold text-brand-orange">0{index + 1}</span>
                  <h3 className="mb-2 font-bold text-brand-navy">{title}</h3>
                  <p className="text-sm leading-6 text-brand-textSecondary">{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-12 grid gap-6 rounded-[26px] bg-brand-navy p-7 text-white sm:p-9 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-orange-200">Show what you can do</span>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Build a portfolio that tells your story</h2>
              <p className="mt-3 leading-7 text-white/80">
                A portfolio can help you organise coursework, practical projects, and personal work in one place. For each example, describe the goal, your contribution, tools used, challenges, and what you learned. Include only work you are comfortable sharing and clearly state your role.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Choose relevant examples", "Explain your contribution", "Show your process", "Reflect on what you learned"].map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-4">
                  <span className="font-extrabold text-orange-300">0{index + 1}</span>
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-amber-50 border border-amber-100 p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-brand-navy mb-3">Who Can Benefit?</h2>
            <p className="text-brand-textSecondary leading-relaxed mb-4">
              Career support may be useful for students preparing for internships, fresh graduates entering the job market, and working professionals considering new responsibilities or career transitions.
            </p>
            <h3 className="font-bold text-brand-navy mb-2">Our Commitment to Honest Career Guidance</h3>
            <p className="text-sm text-brand-textSecondary leading-relaxed">
              We aim to help learners prepare more effectively for career opportunities. Employment outcomes depend on individual skills, qualifications, experience, employer requirements, and market conditions. Career support does not automatically guarantee a job, internship, interview, or placement.
            </p>
          </section>

          <div className="relative flex flex-col items-start justify-between gap-5 overflow-hidden rounded-[26px] bg-brand-navy p-7 text-white shadow-card sm:flex-row sm:items-center sm:p-9">
            <p className="max-w-2xl text-lg font-bold">Ready to build confidence for your next career move?</p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button href="/programs" variant="primary">Explore Our Courses</Button>
              <Button href="/contact" variant="white">Contact Our Team</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
