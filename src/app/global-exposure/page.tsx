import type { Metadata } from "next";
import { PAGE_SEO } from "@/constants/seo";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import PageHero from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: PAGE_SEO.globalExposure.title,
  description: PAGE_SEO.globalExposure.description,
};

const perspectives = [
  { title: "International Industry Awareness", text: "Explore developments in technology, business, digital innovation, and other relevant industries around the world." },
  { title: "Global Workplace Perspectives", text: "Understand professional communication, teamwork, collaboration, and workplace expectations across different environments." },
  { title: "Emerging Technology Insights", text: "Learn about evolving tools, digital transformation, automation, artificial intelligence, and developments relevant to your field." },
  { title: "Cross-Cultural Understanding", text: "Recognise the importance of cultural awareness, clear communication, and respectful collaboration in an interconnected professional world." },
  { title: "Global Career Awareness", text: "Explore how skills, qualifications, portfolios, and professional experience may relate to opportunities in different markets." },
  { title: "International Learning Opportunities", text: "Where officially available, discover verified webinars, expert sessions, industry interactions, and international learning initiatives." },
];

const globalSkills = [
  ["Communicate with clarity", "Share ideas, ask questions, and adapt your message for different audiences and professional settings."],
  ["Collaborate across differences", "Listen carefully, respect different perspectives, and work constructively with people whose experiences may differ from yours."],
  ["Stay curious and adaptable", "Follow relevant changes in your field and keep building the habit of learning as tools and expectations evolve."],
  ["Evaluate information", "Compare sources, consider context, and think critically before applying new ideas or trends to your work."],
];

export default function GlobalExposurePage() {
  return (
    <div className="bg-brand-bg pb-16 sm:pb-20">
      <PageHero
        eyebrow="Wider Perspectives"
        title="Global Exposure"
        description="Think globally, learn continuously, and grow professionally. Explore how international industries, workplace practices, and emerging technologies can broaden your perspective."
        image="/difference/global-exposure.jpg"
        imageAlt="Learner exploring a university campus environment"
        imagePosition="object-center"
      />
      <Container>
        <div className="w-full">
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-brand-textSecondary">
            The modern workplace connects people, businesses, technologies, and ideas across borders. Understanding this wider environment can help learners approach their careers with greater awareness and adaptability.
          </p>

          <div className="mb-6 border-b border-brand-border pb-4"><span className="text-sm font-bold uppercase tracking-[0.16em] text-brand-orange">Broaden your perspective</span><h2 className="mt-1 text-2xl font-extrabold text-brand-navy sm:text-3xl">Learning Beyond Local Boundaries</h2></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {perspectives.map((item) => (
              <article key={item.title} className="group relative overflow-hidden rounded-2xl border border-brand-border bg-white p-7 shadow-subtle transition hover:-translate-y-1 hover:shadow-card">
                <span className="mb-5 block h-1 w-12 rounded-full bg-brand-orange transition-all group-hover:w-20" aria-hidden="true" />
                <h3 className="mb-2 text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-textSecondary">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mb-8 rounded-2xl border border-brand-border bg-white p-7 shadow-card sm:p-9">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Why Global Exposure Matters</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-brand-textSecondary">
              {["Encourages a broader understanding of industries and markets.", "Builds awareness of international professional practices.", "Helps learners recognise emerging skill requirements.", "Supports curiosity, adaptability, and continuous learning.", "Encourages informed exploration of different career pathways."].map((item) => <li key={item} className="flex gap-3"><span className="text-brand-orange">•</span>{item}</li>)}
            </ul>
          </div>

          <section className="mb-12">
            <div className="mb-6 border-b border-brand-border pb-4"><span className="text-sm font-bold uppercase tracking-[0.16em] text-brand-orange">Skills for an interconnected world</span><h2 className="mt-1 text-2xl font-extrabold text-brand-navy sm:text-3xl">Turn Awareness Into Everyday Skills</h2></div>
            <p className="mb-6 max-w-4xl leading-7 text-brand-textSecondary">Global awareness is useful when it informs how we learn, communicate, and solve problems. These capabilities can help learners engage thoughtfully with new ideas and diverse professional environments.</p>
            <div className="grid gap-5 sm:grid-cols-2">{globalSkills.map(([title, description], index) => <article key={title} className="flex gap-4 rounded-2xl border border-brand-border bg-white p-6 shadow-subtle"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 font-extrabold text-brand-orange">0{index + 1}</span><div><h3 className="mb-2 font-bold text-brand-navy">{title}</h3><p className="text-sm leading-6 text-brand-textSecondary">{description}</p></div></article>)}</div>
          </section>

          <section className="mb-12 grid gap-8 rounded-[28px] border border-brand-border bg-white p-7 shadow-card sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div><span className="text-sm font-bold uppercase tracking-[0.16em] text-brand-orange">Explore thoughtfully</span><h2 className="mt-2 text-2xl font-extrabold text-brand-navy sm:text-3xl">Make global learning part of your routine</h2><p className="mt-3 leading-7 text-brand-textSecondary">You can broaden your perspective through regular learning, not only through travel. Follow credible sources in your field, attend relevant public learning events, practise communicating with different audiences, and reflect on how new perspectives relate to your goals.</p></div>
            <div className="rounded-2xl bg-brand-bg p-6"><h3 className="font-bold text-brand-navy">A simple learning routine</h3><ol className="mt-4 space-y-3">{["Choose a field or topic to follow", "Read or watch from reliable sources", "Note a new idea or skill requirement", "Connect it to your learning plan"].map((item, index) => <li key={item} className="flex gap-3 text-sm leading-6 text-brand-textSecondary"><span className="font-extrabold text-brand-orange">0{index + 1}</span><span>{item}</span></li>)}</ol></div>
          </section>

          <div className="rounded-lg bg-blue-50 border border-blue-100 p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-brand-navy mb-2">Our Approach</h2>
            <p className="text-brand-textSecondary leading-relaxed">
              We aim to introduce learners to global perspectives through relevant learning resources, industry information, and verified activities appropriate to their programs. Specific international partnerships, overseas visits, exchange programs, and internship opportunities will be communicated only when officially confirmed and available.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] bg-brand-navy p-8 text-center text-white shadow-card sm:p-12">
            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border-[28px] border-brand-orange/20" aria-hidden="true" />
            <h2 className="text-2xl font-bold mb-3">Explore a Wider World of Learning</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">Your career journey can begin locally while your knowledge continues to grow globally. Discover programs that help you build relevant skills and understand the changing professional landscape.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/programs" variant="primary">Explore Courses</Button>
              <Button href="/contact" variant="white">Enquire About Global Exposure</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
