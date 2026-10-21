import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import PageHero from "@/components/common/PageHero";
import EventGalleryShowcase from "@/components/events/EventGalleryShowcase";

export const metadata: Metadata = {
  title: "Events & Photo Gallery | WeGrow Skill Campus",
  description:
    "Explore photo archives and highlights from workshops, conferences, campus celebrations, placement drives, and cultural festivals at WeGrow Skill Campus.",
};

const eventTypes = [
  {
    title: "Conferences & Symposia",
    text: "National research conferences, academic dialogues, and visionary keynotes connecting scholars, educators, and industry leaders.",
  },
  {
    title: "Entrepreneurship & Leadership",
    text: "Interactive startup summits and women-in-leadership conclaves mentoring future founders and business changemakers.",
  },
  {
    title: "Technical Workshops & Bootcamps",
    text: "Hands-on lab sessions covering emerging technologies, software tools, and real-world project development.",
  },
  {
    title: "Placement Drives & Career Readiness",
    text: "On-campus corporate interviews, aptitude bootcamps, and soft-skill mastery preparing students for top career opportunities.",
  },
  {
    title: "Cultural & Campus Life",
    text: "Festive gatherings like Krishna Jayanthi, annual college days, and educational tours fostering a vibrant community spirit.",
  },
];

export default function EventsPage() {
  return (
    <div className="bg-brand-bg pb-16 sm:pb-20">
      <PageHero
        eyebrow="Campus Life & Milestones"
        title="Events & Photo Gallery"
        description="Witness the vibrancy of WeGrow Skill Campus through our conferences, startup summits, cultural celebrations, and placement drives."
        image="/ecosystem/skill-campus.jpg"
        imageAlt="Students and faculty collaborating during campus events"
        imagePosition="object-center"
      />
      <Container>
        <div className="w-full">
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-brand-textSecondary">
            Learning becomes unforgettable when knowledge meets celebration. Browse
            through our curated photo gallery showcasing key events, student
            achievements, and moments of pride across our campus.
          </p>

          {/* Quick Overview Grid */}
          <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((event) => (
              <article
                key={event.title}
                className="group relative overflow-hidden rounded-2xl border border-brand-border bg-white p-6 shadow-subtle transition hover:-translate-y-1 hover:shadow-card"
              >
                <span
                  className="mb-4 block h-1 w-10 rounded-full bg-brand-orange transition-all group-hover:w-16"
                  aria-hidden="true"
                />
                <h2 className="mb-2 text-lg font-bold text-brand-navy">
                  {event.title}
                </h2>
                <p className="text-sm leading-relaxed text-brand-textSecondary">
                  {event.text}
                </p>
              </article>
            ))}
          </div>

          {/* Dedicated Interactive Event Gallery */}
          <EventGalleryShowcase />

          {/* Learning in action highlight */}
          <section className="my-12 grid items-center gap-7 overflow-hidden rounded-[26px] border border-blue-100 bg-blue-50 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-brand-orange">
                Experiential Learning
              </span>
              <h2 className="mb-3 mt-1 text-2xl font-extrabold text-brand-navy">
                Learning in Action Every Day
              </h2>
              <p className="leading-relaxed text-brand-textSecondary">
                From collaborative teamwork and expert-led masterclasses to
                corporate placement success, every event at WeGrow Skill Campus is
                crafted to inspire confidence, skill, and career excellence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-40 overflow-hidden rounded-2xl sm:h-52">
                <Image
                  src="/skillcampus-hero.png"
                  alt="Students collaborating during a campus learning activity"
                  fill
                  sizes="(max-width: 1024px) 50vw, 35vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-6 h-40 overflow-hidden rounded-2xl sm:h-52">
                <Image
                  src="/difference/project-exposure.jpg"
                  alt="Learners working on a practical project"
                  fill
                  sizes="(max-width: 1024px) 50vw, 35vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Upcoming Events Notice */}
          <section className="mb-10 rounded-2xl border border-brand-border bg-white p-7 shadow-card sm:p-9">
            <h2 className="text-2xl font-bold text-brand-navy mb-3">
              Upcoming Activities & Workshops
            </h2>
            <p className="text-brand-textSecondary leading-relaxed">
              New workshop dates, guest lectures, and placement drives are scheduled
              throughout each semester. Reach out to the WeGrow campus team or check
              regular notices for registration schedules and event agendas.
            </p>
          </section>

          {/* Call to Action Banner */}
          <div className="relative overflow-hidden rounded-[28px] bg-brand-navy p-8 text-center text-white shadow-card sm:p-12">
            <div
              className="absolute -right-10 -top-16 h-56 w-56 rounded-full border-[28px] border-brand-orange/20"
              aria-hidden="true"
            />
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Be Part of Our Next Campus Milestone
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Connect with WeGrow Skill Campus to learn more about our upcoming
              learning sessions, industry conferences, and student opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="primary">
                Enquire About Events
              </Button>
              <Button href="/contact" variant="white">
                Contact Campus Office
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
