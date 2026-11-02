"use client";

import React from "react";
import {
  BookOpen,
  Users,
  Briefcase,
  Building2,
  TrendingUp,
  Laptop,
} from "lucide-react";

export const LandingStats: React.FC = () => {
  const stats = [
    {
      id: "courses",
      icon: BookOpen,
      count: "15+",
      label: "Total Courses",
      detail: "6 Flagship Career Tracks & Specialized Modules",
      color: "from-blue-500 to-indigo-600",
      accent: "text-blue-600",
      bgAccent: "bg-blue-50",
    },
    {
      id: "students",
      icon: Users,
      count: "3,500+",
      label: "Total Students",
      detail: "Trained & Upskilled across Tamil Nadu",
      color: "from-amber-500 to-orange-600",
      accent: "text-brand-orange",
      bgAccent: "bg-orange-50",
    },
    {
      id: "placements",
      icon: Briefcase,
      count: "1,250+",
      label: "Placement Count",
      detail: "Successful candidates placed in IT firms",
      color: "from-emerald-500 to-teal-600",
      accent: "text-emerald-600",
      bgAccent: "bg-emerald-50",
    },
    {
      id: "partners",
      icon: Building2,
      count: "120+",
      label: "Hiring Partners",
      detail: "MNCs, Product Startups & Tech Giants",
      color: "from-purple-500 to-indigo-600",
      accent: "text-purple-600",
      bgAccent: "bg-purple-50",
    },
    {
      id: "live-projects",
      icon: Laptop,
      count: "10+",
      label: "Live Capstone Projects",
      detail: "Real production cloud deployments",
      color: "from-rose-500 to-pink-600",
      accent: "text-rose-600",
      bgAccent: "bg-rose-50",
    },
    {
      id: "practical-rate",
      icon: TrendingUp,
      count: "100%",
      label: "Hands-on Practical",
      detail: "Project-first coding curriculum",
      color: "from-cyan-500 to-blue-600",
      accent: "text-cyan-600",
      bgAccent: "bg-cyan-50",
    },
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-10 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        {/* Main Stats Card Container */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50 backdrop-blur-md">
          {/* Section header for stats */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Proven Track Record
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
                Empowering Aspirations Through Measurable Impact
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full w-fit">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Verified Cohort Metrics
            </span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="group relative rounded-xl border border-slate-100 bg-slate-50/60 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-lg"
                >
                  <div
                    className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl ${stat.bgAccent} ${stat.accent} transition-transform group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="text-2xl sm:text-3xl font-black tracking-tight text-brand-navy">
                    {stat.count}
                  </p>

                  <h3 className="mt-1 text-sm font-bold text-slate-800">
                    {stat.label}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500 leading-snug">
                    {stat.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingStats;
