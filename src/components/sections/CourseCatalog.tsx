"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, Clock3, IndianRupee } from "lucide-react";
import type { Course } from "@/constants/courses";
import Button from "@/components/common/Button";

type CourseFilter = "all" | "python" | "java" | "analytics" | "marketing" | "software" | "cyber" | "design" | "office" | "accounting";

const filters: { id: CourseFilter; label: string }[] = [
  { id: "all", label: "All Courses" },
  { id: "python", label: "Python" },
  { id: "java", label: "Java" },
  { id: "analytics", label: "Data Analytics" },
  { id: "marketing", label: "Marketing" },
  { id: "software", label: "Software Development" },
  { id: "cyber", label: "Cyber Security" },
  { id: "design", label: "Design" },
  { id: "office", label: "Office Productivity" },
  { id: "accounting", label: "Accounting & Finance" },
];

function matchesFilter(course: Course, filter: CourseFilter) {
  const searchableText = [course.title, course.description, course.field, ...course.topics]
    .join(" ")
    .toLowerCase();

  switch (filter) {
    case "all":
      return true;
    case "python":
      return searchableText.includes("python");
    case "java":
      return searchableText.includes("java");
    case "analytics":
      return course.category === "Data and Analytics";
    case "marketing":
      return course.category === "Digital Marketing";
    case "software":
      return course.category === "Software Development";
    case "cyber":
      return course.category === "Cyber Security";
    case "design":
      return course.category === "Design";
    case "office":
      return course.category === "Office Productivity";
    case "accounting":
      return course.category === "Accounting and Finance";
  }
}

export default function CourseCatalog({ courses }: { courses: Course[] }) {
  const [activeFilter, setActiveFilter] = useState<CourseFilter | null>(null);
  const visibleCourses = useMemo(
    () => activeFilter ? courses.filter((course) => matchesFilter(course, activeFilter)) : [],
    [courses, activeFilter],
  );
  const activeLabel = filters.find((filter) => filter.id === activeFilter)?.label;

  return (
    <>
      <div className="mb-6 overflow-x-auto pb-2" role="group" aria-label="Filter courses by subject">
        <div className="flex min-w-max gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2.5 text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 ${
                  isActive
                    ? "border-brand-orange bg-brand-orange text-white shadow-[0_6px_16px_rgba(247,130,14,0.24)]"
                    : "border-brand-border bg-white text-brand-navy hover:border-brand-orange/60 hover:bg-orange-50"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mb-5 text-sm font-medium text-brand-textSecondary" aria-live="polite">
        {activeFilter
          ? `Showing ${visibleCourses.length} ${visibleCourses.length === 1 ? "course" : "courses"} in ${activeLabel}.`
          : "Choose a subject above to view matching courses."}
      </p>

      {activeFilter && (visibleCourses.length > 0 ? (
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleCourses.map((course) => (
            <article key={course.id} className="group flex flex-col overflow-hidden rounded-[26px] border border-brand-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/50 hover:shadow-elevated">
              <div className="relative h-48 overflow-hidden sm:h-52">
                <Image src={course.image} alt={`${course.title} course`} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b3a]/75 via-[#071b3a]/10 to-transparent" />
                <span className="absolute bottom-4 left-5 rounded-full border border-white/40 bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-navy">{course.category}</span>
                <span className="absolute bottom-0 left-0 h-1 w-24 bg-brand-orange transition-all group-hover:w-40" aria-hidden="true" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-extrabold leading-snug text-brand-navy">{course.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-brand-textSecondary">{course.description}</p>
                <div className="mt-5 grid gap-3 rounded-2xl bg-brand-bg p-4 text-sm sm:grid-cols-2">
                  <div className="flex items-start gap-2 text-brand-textSecondary"><Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" /><span><strong className="block text-xs uppercase tracking-wide text-brand-navy">Duration</strong>{course.duration}</span></div>
                  <div className="flex items-start gap-2 text-brand-textSecondary"><IndianRupee className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" /><span><strong className="block text-xs uppercase tracking-wide text-brand-navy">TN pay reference*</strong><span className="block font-semibold text-brand-navy">{course.salaryEstimate}</span><a className="mt-1 inline-block text-xs font-semibold text-brand-orange underline underline-offset-2" href={course.salarySourceUrl} target="_blank" rel="noreferrer">{course.salarySourceRole} source ↗</a></span></div>
                </div>
                <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-100 pt-5">
                  <Button href={`/programs/${course.id}`} variant="outline" size="sm" className="gap-2">Course details <ArrowRight className="h-4 w-4" aria-hidden="true" /></Button>
                  <Button href="/contact" variant="primary" size="sm">Enquire now</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mb-12 rounded-2xl border border-brand-border bg-white p-10 text-center text-brand-textSecondary">
          No courses are currently listed for this subject.
        </div>
      ))}
    </>
  );
}
