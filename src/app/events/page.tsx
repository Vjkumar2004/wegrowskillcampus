import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import PageHero from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Workshops & Events | WeGrow Skill Campus",
  description: "Learn about workshops, seminars, and campus activities at WeGrow Skill Campus.",
};

const eventTypes = [
  { title: "Workshops", text: "Participate in practical learning sessions that explore relevant tools, techniques, concepts, and professional skills." },
  { title: "Seminars and Knowledge Sessions", text: "Discover ideas, explore emerging trends, and develop a broader understanding of technology, business, and professional development." },
  { title: "Technology Demonstrations", text: "Explore the applications of relevant software, digital tools, and emerging technologies through demonstrations and guided activities." },
  { title: "Career Development Activities", text: "Participate in sessions focused on resume preparation, communication, interview readiness, and professional development." },
  { title: "Campus Activities", text: "Discover learning activities that encourage collaboration, creativity, teamwork, and student participation." },
];

export default function EventsPage() {
  return (
    <div className="bg-brand-bg pb-16 sm:pb-20">
      <PageHero
        eyebrow="Campus Life"
        title="Events and Campus Activities"
        description="Learn together, share ideas, and discover what’s possible through workshops, seminars, demonstrations, and campus activities."
        image="/ecosystem/skill-campus.jpg"
        imageAlt="Students sharing a learning activity around a laptop"
        imagePosition="object-center"
      />
      <Container>
        <div className="w-full">
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-brand-textSecondary">
            Learning becomes more engaging when people come together to explore ideas, exchange knowledge, and experience new perspectives. We encourage learning beyond regular coursework through campus activities.
          </p>

          <div className="mb-12 grid gap-5 md:grid-cols-2">
            {eventTypes.map((event) => <article key={event.title} className="group relative overflow-hidden rounded-2xl border border-brand-border bg-white p-7 shadow-subtle transition hover:-translate-y-1 hover:shadow-card"><span className="mb-5 block h-1 w-12 rounded-full bg-brand-orange transition-all group-hover:w-20" aria-hidden="true" /><h2 className="mb-2 text-xl font-bold text-brand-navy">{event.title}</h2><p className="text-sm leading-relaxed text-brand-textSecondary">{event.text}</p></article>)}
          </div>

          <section className="mb-6 rounded-2xl border border-brand-border bg-white p-7 shadow-card sm:p-9">
            <h2 className="text-2xl font-bold text-brand-navy mb-3">Upcoming Events</h2>
            <p className="text-brand-textSecondary leading-relaxed">Contact WeGrow Skill Campus for confirmed event titles, dates, venues, participation requirements, and registration details. Event information will be shared when it is available.</p>
          </section>

          <section className="mb-8 grid items-center gap-7 overflow-hidden rounded-[26px] border border-blue-100 bg-blue-50 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div><span className="text-sm font-bold uppercase tracking-[0.16em] text-brand-orange">Learn together</span><h2 className="mb-3 mt-1 text-2xl font-extrabold text-brand-navy">Learning in action</h2><p className="leading-relaxed text-brand-textSecondary">From collaborative project work to guided sessions, campus activities create space to share ideas and practise new skills.</p></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-40 overflow-hidden rounded-2xl sm:h-52"><Image src="/skillcampus-hero.png" alt="Students collaborating during a campus learning activity" fill sizes="(max-width: 1024px) 50vw, 35vw" className="object-cover" /></div>
              <div className="relative mt-6 h-40 overflow-hidden rounded-2xl sm:h-52"><Image src="/difference/project-exposure.jpg" alt="Learners working on a practical project" fill sizes="(max-width: 1024px) 50vw, 35vw" className="object-cover" /></div>
            </div>
          </section>

          <div className="relative overflow-hidden rounded-[28px] bg-brand-navy p-8 text-center text-white shadow-card sm:p-12">
            <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border-[28px] border-brand-orange/20" aria-hidden="true" />
            <h2 className="text-2xl font-bold mb-3">Be Part of the Learning Community</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">Stay connected with WeGrow Skill Campus to ask about upcoming learning activities and opportunities to participate.</p>
            <div className="flex flex-wrap justify-center gap-3"><Button href="/contact" variant="primary">Enquire About Events</Button><Button href="/contact" variant="white">Contact Us</Button></div>
          </div>
        </div>
      </Container>
    </div>
  );
}
