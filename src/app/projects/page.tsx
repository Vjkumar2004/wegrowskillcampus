import type { Metadata } from "next";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import PageHero from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Projects & Practical Learning | WeGrow Skill Campus",
  description: "Explore project-based learning ideas and the skills learners can develop at WeGrow Skill Campus.",
};

const projectCategories = [
  { title: "Data Analytics and Visualization", overview: "Explore how data can be organised, analysed, and presented to support informed decisions.", tools: "Possible technologies: Python, SQL, Excel, Power BI, Tableau.", outcomes: "Data cleaning, exploratory analysis, reporting, visualization, and communicating insights." },
  { title: "Business Analysis", overview: "Explore business problems, gather requirements, document processes, and identify potential improvements.", tools: "Possible tools: Excel, flowcharts, process diagrams, documentation tools, and SQL where relevant.", outcomes: "Requirement gathering, process mapping, stakeholder communication, and structured problem-solving." },
  { title: "Web Development", overview: "Create web interfaces that organise information and support user interactions.", tools: "Possible technologies: HTML, CSS, JavaScript, React, and relevant backend technologies.", outcomes: "Interface design, responsive layouts, component development, and application structure." },
  { title: "Artificial Intelligence and Machine Learning", overview: "Explore how data-driven systems can recognise patterns, generate predictions, or support selected tasks.", tools: "Possible technologies: Python, pandas, scikit-learn, and other verified tools.", outcomes: "Data preparation, model evaluation, experimentation, and explaining results." },
  { title: "Digital Marketing", overview: "Explore how digital channels can support audience engagement and business objectives.", tools: "Possible tools: Analytics platforms, campaign-planning tools, and relevant advertising or content platforms.", outcomes: "Audience research, campaign planning, performance measurement, and reporting." },
  { title: "Business and Management", overview: "Explore business scenarios involving planning, operational analysis, market research, and decision-making.", tools: "Tools depend on the learning activity and curriculum.", outcomes: "Structured analysis, documentation, communication, and practical recommendations." },
];

export default function ProjectsPage() {
  return (
    <div className="bg-brand-bg pb-16 sm:pb-20">
      <PageHero
        eyebrow="Applied Learning"
        title="Projects and Practical Learning"
        description="Turn your knowledge into practical experience. Explore ways to apply concepts, test ideas, and demonstrate what you learn."
        image="/difference/project-exposure.jpg"
        imageAlt="Learners collaborating on a project at a laptop"
        imagePosition="object-center"
      />
      <Container>
        <div className="w-full">
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-brand-textSecondary">
            Projects provide an opportunity to apply what you learn, explore challenges, test ideas, and demonstrate your skills. Project activities can help learners connect concepts with practical scenarios.
          </p>

          <div className="mb-6 border-b border-brand-border pb-4"><span className="text-sm font-bold uppercase tracking-[0.16em] text-brand-orange">Ideas into practice</span><h2 className="mt-1 text-2xl font-extrabold text-brand-navy sm:text-3xl">Explore Project Categories</h2></div>
          <div className="mb-12 grid gap-5 md:grid-cols-2">
            {projectCategories.map((project) => (
              <article key={project.title} className="relative overflow-hidden rounded-2xl border border-brand-border bg-white p-7 shadow-subtle transition hover:-translate-y-1 hover:border-brand-orange/50 hover:shadow-card sm:p-8">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-amber-300" aria-hidden="true" />
                <h3 className="text-xl font-bold text-brand-navy mb-3">{project.title}</h3>
                <p className="text-sm text-brand-textSecondary leading-relaxed mb-3">{project.overview}</p>
                <p className="mb-3 rounded-xl bg-blue-50/80 p-4 text-sm leading-relaxed text-brand-textSecondary"><strong className="text-brand-navy">{project.tools}</strong></p>
                <p className="rounded-xl bg-orange-50 p-4 text-sm leading-relaxed text-brand-textSecondary"><strong className="text-brand-navy">Learning outcomes:</strong> {project.outcomes}</p>
              </article>
            ))}
          </div>

          <section className="bg-white rounded-lg border border-brand-border p-6 sm:p-8 shadow-subtle mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-3">Showcase Your Work</h2>
            <p className="text-brand-textSecondary leading-relaxed">A well-documented project can help learners explain their capabilities to educators, recruiters, and potential collaborators. Where appropriate, document the problem, your approach, the tools you used, the challenges you addressed, and the results.</p>
          </section>

          <section className="rounded-lg bg-blue-50 border border-blue-100 p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-brand-navy mb-2">Build Something Meaningful</h2>
            <p className="text-brand-textSecondary leading-relaxed">Learn new skills, experiment with ideas, and develop projects that reflect your interests and learning progress. Project examples and technologies depend on the course curriculum.</p>
          </section>

          <div className="flex flex-wrap gap-3">
            <Button href="/programs" variant="primary">Explore Courses</Button>
            <Button href="/contact" variant="outline">Enquire Now</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
