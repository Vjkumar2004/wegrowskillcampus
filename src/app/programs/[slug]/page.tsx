import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { COURSES } from "@/constants/courses";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import PageHero from "@/components/common/PageHero";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return COURSES.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((item) => item.id === slug);

  if (!course) return { title: "Course Not Found | WeGrow Skill Campus" };

  return {
    title: `${course.title} | WeGrow Skill Campus`,
    description: `${course.description} Contact WeGrow Skill Campus for course details and current batches.`,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = COURSES.find((item) => item.id === slug);

  if (!course) notFound();

  return (
    <div className="bg-brand-bg pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-6 sm:px-6 lg:px-10">
        <Button href="/programs" variant="outline" size="sm" className="gap-2">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All Programs
        </Button>
      </div>
      <PageHero
        eyebrow={course.category}
        title={course.title}
        description={course.description}
        image={course.image}
        imageAlt={`${course.title} learning environment`}
        imagePosition="object-center"
      />
      <Container>
        <div className="w-full">

          <div className="grid gap-6">
            <section className="rounded-[26px] border border-brand-border bg-white p-7 shadow-card sm:p-9">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-brand-orange">Course overview</span>
              <h2 className="mb-3 mt-1 text-2xl font-extrabold text-brand-navy">What You Will Learn</h2>
              <p className="mb-6 leading-7 text-brand-textSecondary">{course.description}</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {course.topics.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-brand-textPrimary">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="rounded-xl bg-brand-bg p-3 text-sm leading-6">{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <section className="rounded-[26px] border border-brand-border bg-white p-7 shadow-card sm:p-8">
                <h2 className="text-2xl font-bold text-brand-navy mb-4">Who Is This Course For?</h2>
                <p className="text-brand-textSecondary leading-relaxed">
                  Students, graduates, beginners, and working professionals interested in {course.field}. Entry requirements may vary; contact the campus team to confirm eligibility for this program.
                </p>
              </section>

              <section className="rounded-[26px] border border-brand-border bg-white p-7 shadow-card sm:p-8">
                <h2 className="text-2xl font-bold text-brand-navy mb-4">Learning Experience</h2>
                <ul className="space-y-3 text-brand-textSecondary">
                  {["Classroom training", "Live online classes", "Weekend or fast-track batches", "Regular batches", "Recorded sessions"].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="rounded-[26px] border border-brand-border bg-white p-7 shadow-card sm:p-9">
              <h2 className="text-2xl font-bold text-brand-navy mb-5">Course Information</h2>
              <dl className="divide-y divide-brand-border">
                {[
                  { label: "Duration", value: course.duration },
                  { label: "Tamil Nadu pay reference", value: `${course.salaryEstimate} — comparable role: ${course.salarySourceRole}. Indicative only; not a course outcome or guarantee.` },
                  { label: "Training modes", value: "Classroom, live online, weekend, fast-track, regular batches, and recorded sessions are listed on the WeGrow website. Confirm current availability with the campus." },
                  { label: "Class timings", value: "Classes run Monday to Saturday between 9:00 AM and 7:00 PM IST. Contact the campus to confirm available batch schedules." },
                  { label: "Eligibility", value: "Contact the campus to confirm entry requirements." },
                  { label: "Fees and certificate", value: "Contact the campus for current fees, certificate issuer, and completion conditions." },
                ].map(({ label, value }) => (
                  <div key={label} className="grid sm:grid-cols-[160px_1fr] gap-1 sm:gap-5 py-4 first:pt-0 last:pb-0">
                    <dt className="font-semibold text-brand-navy">{label}</dt>
                    <dd className="text-brand-textSecondary">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-sm text-brand-textSecondary">Salary reference: <a className="font-semibold text-brand-orange underline underline-offset-2" href={course.salarySourceUrl} target="_blank" rel="noreferrer">{course.salarySourceRole} pay data ↗</a>. Checked 13 October 2026; source sample sizes and update dates vary.</p>
            </section>

            <section className="rounded-[26px] border border-orange-100 bg-orange-50 p-7 text-center sm:p-9 lg:p-10">
              <h2 className="text-2xl font-bold text-brand-navy mb-3">Next Step</h2>
              <p className="text-brand-textSecondary leading-relaxed max-w-2xl mx-auto mb-6">
                Contact WeGrow Skill Campus to discuss the syllabus, batch availability, fees, and whether this course matches your goals. Salary ranges shown are indicative only and are not a job or salary guarantee.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Enquire About This Course
              </Button>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
