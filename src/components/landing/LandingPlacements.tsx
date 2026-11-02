"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  Quote,
  Star,
  Users,
  ExternalLink,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { EVENTS_DATA } from "@/data/eventsData";

const placementEvent = EVENTS_DATA.find((e) => e.id === "placement-drives");
const placementPhotos = placementEvent ? placementEvent.photos : [];

function resolveUrl(path: string): string {
  const cdnEndpoint =
    process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/Deepak2004";
  return `${cdnEndpoint.replace(/\/$/, "")}${path}`;
}

export const LandingPlacements: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const placedStudents = [
    {
      name: "Karthikeyan M.",
      college: "Mepco Schlenk Engineering College",
      course: "AI Java Full Stack Development",
      company: "TCS (Digital Cadre)",
      salary: "₹7.2 LPA",
      campus: "Sivakasi Campus",
      quote: "The hands-on Spring Boot microservices labs and mock interview drills at WeGrow gave me the technical depth to crack the TCS Digital cadre in my first attempt.",
      avatarBg: "bg-blue-600",
      avatarInitials: "KM",
    },
    {
      name: "Priya Sundaram",
      college: "Kalasalingam Academy (KARE)",
      course: "AI Python Full Stack Development",
      company: "Zoho Corporation",
      salary: "₹6.5 LPA",
      campus: "Srivilliputtur Campus",
      quote: "We built live APIs and integrated AI prompts instead of memorizing definitions. When Zoho interviewers asked deep Python questions, I answered with real project examples.",
      avatarBg: "bg-emerald-600",
      avatarInitials: "PS",
    },
    {
      name: "Dinesh Kumar S.",
      college: "Ayya Nadar Janaki Ammal College (ANJAC)",
      course: "Data Analytics & Power BI",
      company: "Cognizant",
      salary: "₹5.4 LPA",
      campus: "Sivakasi Campus",
      quote: "Coming from a non-engineering background, I was nervous. The mentors broke down SQL and Power BI so clearly that I was able to build 3 business dashboards in my portfolio.",
      avatarBg: "bg-amber-600",
      avatarInitials: "DK",
    },
    {
      name: "Sneha R.",
      college: "PSR Engineering College",
      course: "Cyber Security & Ethical Hacking",
      company: "Kaar Technologies",
      salary: "₹6.0 LPA",
      campus: "Sattur / Sivakasi",
      quote: "Hands-on penetration testing labs in Kali Linux and understanding OWASP vulnerabilities directly landed me the Security Associate role during the campus drive.",
      avatarBg: "bg-purple-600",
      avatarInitials: "SR",
    },
    {
      name: "Vigneshwaran K.",
      college: "SFR College for Women / Sivakasi Area",
      course: "AI Full Stack Web Development",
      company: "Product Tech Hub",
      salary: "₹7.0 LPA",
      campus: "Sivakasi Campus",
      quote: "Deploying production Next.js apps with real database authentication made all the difference. The placement team arranged direct rounds with hiring managers.",
      avatarBg: "bg-cyan-600",
      avatarInitials: "VK",
    },
    {
      name: "Arun Prasad V.",
      college: "Arasan Ganesan Polytechnic",
      course: "Data Science & Artificial Intelligence",
      company: "Wipro Technologies",
      salary: "₹5.8 LPA",
      campus: "Srivilliputtur Campus",
      quote: "The personalized attention from trainers and the state-of-the-art lab environment at Srivilliputtur gave me confidence to compete with candidates from Chennai.",
      avatarBg: "bg-rose-600",
      avatarInitials: "AP",
    },
  ];

  const hiringPartners = [
    { name: "Zoho Corporation", tier: "Product Giant" },
    { name: "TCS", tier: "Global IT Leader" },
    { name: "Infosys", tier: "MNC Leader" },
    { name: "Wipro", tier: "Tech Enterprise" },
    { name: "Cognizant", tier: "Global Services" },
    { name: "Kaar Technologies", tier: "SAP & Cloud Partner" },
    { name: "Tech Mahindra", tier: "Digital Transformation" },
    { name: "HCL Technologies", tier: "Software Engineering" },
    { name: "Hexaware", tier: "IT Solutions" },
    { name: "Mindtree", tier: "Cloud & Analytics" },
    { name: "Solartis Technology", tier: "FinTech" },
    { name: "Sutherland Global", tier: "Enterprise Operations" },
  ];

  const placementSteps = [
    {
      step: "01",
      title: "Core Skill Mastery",
      desc: "Daily hands-on coding and lab practice covering latest production tools and industry architectures.",
    },
    {
      step: "02",
      title: "Live Capstone Deployment",
      desc: "Build 4 to 6 full-fledged applications with active code reviews and live cloud hosting.",
    },
    {
      step: "03",
      title: "Portfolio & Resume Engineering",
      desc: "ATS-optimized resumes, LinkedIn branding, GitHub repositories, and interactive project showcases.",
    },
    {
      step: "04",
      title: "Rigorous Mock Interview Drills",
      desc: "Simulated technical interviews, live coding rounds, DSA problem solving, and HR behavioral training.",
    },
    {
      step: "05",
      title: "Campus Placement Drives",
      desc: "Direct interviews with top recruiters at our Sivakasi and Srivilliputtur boardrooms till placement.",
    },
  ];

  return (
    <section id="placements-section" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Real Placements • Real Careers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Our Placed Students &amp; Success Stories
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From colleges across Virudhunagar, Madurai, Tirunelveli, and Tenkasi districts to high-paying software careers in leading IT corporations.
          </p>
        </div>

        {/* Placed Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {placedStudents.map((student, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Profile Strip */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-extrabold text-white text-base shadow-sm ${student.avatarBg}`}
                    >
                      {student.avatarInitials}
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-brand-navy">
                        {student.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1">{student.college}</p>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-extrabold text-emerald-800">
                    {student.salary}
                  </span>
                </div>

                {/* Placed Company Card */}
                <div className="rounded-xl bg-slate-50 border border-slate-100 p-3 mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Placed At:</p>
                    <p className="text-sm font-extrabold text-brand-navy mt-0.5">{student.company}</p>
                  </div>
                  <span className="text-[11px] font-semibold text-brand-orange bg-orange-50 px-2 py-0.5 rounded">
                    {student.campus}
                  </span>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="w-5 h-5 text-slate-300 mb-1" />
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                    &ldquo;{student.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Course tag */}
              <div className="mt-5 border-t border-slate-100 pt-3 flex items-center justify-between text-xs">
                <span className="font-semibold text-brand-navy">{student.course}</span>
                <span className="inline-flex items-center text-emerald-600 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Real Campus Placement Drives Photos */}
        {placementPhotos.length > 0 && (
          <div className="mb-16 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 pb-4 border-b border-slate-100 gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  On-Campus Action
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-brand-navy">
                  Campus Placement Drives in Action
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Live moments from corporate interview rounds, written tests, and student selection announcements.
                </p>
              </div>

              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full w-fit">
                Recruiter Drives 2026
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {placementPhotos.map((photo, i) => (
                <div
                  key={photo.id || i}
                  onClick={() => setSelectedPhoto(resolveUrl(photo.full))}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 cursor-pointer border border-slate-200 hover:shadow-lg transition-all"
                >
                  <Image
                    src={resolveUrl(photo.thumb || photo.full)}
                    alt={photo.alt || "Campus Placement Drive Photo"}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                    <span className="text-[11px] font-bold text-white">Click to view photo</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selected Photo Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-h-[85vh] w-full max-w-4xl aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto}
                alt="Campus Placement Drive Photo Full"
                fill
                priority
                sizes="90vw"
                className="object-contain"
              />
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 rounded-full bg-black/60 p-2 text-white hover:bg-black/90 transition"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* 5-Step Placement Roadmap */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-9 shadow-card mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Guaranteed Process
            </span>
            <h3 className="text-2xl font-black text-brand-navy mt-1">
              Our 5-Step Career &amp; Placement Framework
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Every learner goes through a structured, phase-wise pipeline designed to maximize recruiter selection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {placementSteps.map((s, idx) => (
              <div
                key={idx}
                className="relative rounded-xl bg-slate-50 border border-slate-100 p-4 transition-all hover:bg-white hover:shadow-md hover:border-slate-300"
              >
                <span className="inline-block text-2xl font-black text-brand-orange/40 mb-2">
                  {s.step}
                </span>
                <h4 className="text-sm font-bold text-brand-navy mb-1">{s.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Hiring Partners Marquee */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Trusted Corporate Network
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy mt-1">
              Where Our Students Work
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {hiringPartners.map((partner, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:shadow-sm hover:border-slate-200 transition text-center"
              >
                <Building2 className="w-5 h-5 text-brand-navy/60 mb-1.5" />
                <span className="text-xs sm:text-sm font-bold text-brand-navy">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-500 mt-0.5">{partner.tier}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPlacements;

