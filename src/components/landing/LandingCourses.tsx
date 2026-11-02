"use client";

import React, { useState } from "react";
import {
  Code,
  Clock,
  Layers,
  Award,
  ChevronRight,
  Sparkles,
  CheckCircle,
  FileText,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { LANDING_COURSES, LandingCourse } from "@/data/landingCoursesData";

interface LandingCoursesProps {
  onSelectCourse: (courseId: string) => void;
}

export const LandingCourses: React.FC<LandingCoursesProps> = ({ onSelectCourse }) => {
  const [activeCourseModal, setActiveCourseModal] = useState<LandingCourse | null>(null);

  return (
    <section id="courses-section" className="py-16 sm:py-24 bg-white relative">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
            <Layers className="w-3.5 h-3.5 text-brand-orange" />
            <span>6 Flagship Job-Oriented Bootcamps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Industry-Benchmarked Course Details
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Engineered in consultation with top hiring partners. Each track contains 100% practical lab work, real capstone deployments, and rigorous interview drills.
          </p>
        </div>

        {/* 6 Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LANDING_COURSES.map((course) => (
            <div
              key={course.id}
              className={`relative flex flex-col justify-between rounded-2xl border bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                course.popular
                  ? "border-brand-orange/60 ring-1 ring-brand-orange/20"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                    course.popular
                      ? "bg-orange-100 text-brand-orange"
                      : "bg-blue-50 text-brand-navy"
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  {course.badge}
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {course.duration}
                </span>
              </div>

              {/* Course Title and Description */}
              <div>
                <h3 className="text-xl font-extrabold text-brand-navy group-hover:text-brand-orange transition-colors">
                  {course.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[40px]">
                  {course.shortDescription}
                </p>

                {/* Salary Package Benchmark */}
                <div className="mt-4 rounded-xl bg-slate-50 border border-slate-100 p-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">Salary Benchmark:</span>
                  <span className="text-sm font-extrabold text-emerald-600">{course.salaryRange}</span>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Technologies Mastered:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {course.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career Roles */}
                <div className="mt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Placement Job Roles:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {course.targetRoles.slice(0, 3).map((role) => (
                      <span
                        key={role}
                        className="rounded-md border border-blue-100 bg-blue-50/50 px-2 py-0.5 text-[11px] font-semibold text-brand-navy"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Syllabus Highlights */}
                <div className="mt-4 border-t border-slate-100 pt-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Highlights:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {course.keyModules.slice(0, 3).map((mod, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => onSelectCourse(course.id)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600 transition-colors"
                >
                  <span>Enquire For This Course</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveCourseModal(course)}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>View Full Curriculum Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Syllabus Details */}
        {activeCourseModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in"
            onClick={() => setActiveCourseModal(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    {activeCourseModal.badge} • {activeCourseModal.duration}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy mt-1">
                    {activeCourseModal.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCourseModal(null)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
                >
                  ✕
                </button>
              </div>

              <div className="mt-5 space-y-5">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Course Overview</h4>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {activeCourseModal.shortDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-800">All Modules &amp; Capstones</h4>
                  <ul className="mt-2 space-y-2">
                    {activeCourseModal.keyModules.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 rounded-lg bg-slate-50 p-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="rounded-xl border border-slate-200 p-3 bg-slate-50">
                    <p className="text-xs font-semibold text-slate-500">Duration &amp; Mode</p>
                    <p className="font-bold text-slate-800 mt-1">{activeCourseModal.duration} ({activeCourseModal.mode})</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-3 bg-slate-50">
                    <p className="text-xs font-semibold text-slate-500">Placement Benchmark</p>
                    <p className="font-bold text-emerald-600 mt-1">{activeCourseModal.salaryRange}</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectCourse(activeCourseModal.id);
                      setActiveCourseModal(null);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-5 py-3 text-sm font-bold text-white hover:bg-orange-600 transition"
                  >
                    <span>Enquire For This Track Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={`https://wa.me/919344337331?text=Hi,%20please%20send%20detailed%20syllabus%20PDF%20for%20${encodeURIComponent(activeCourseModal.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 hover:bg-emerald-100 transition"
                  >
                    <span>Get Syllabus on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LandingCourses;

