"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  Compass,
  ArrowUpRight,
  Bus,
  CheckCircle,
} from "lucide-react";

interface CampusBranch {
  label?: string;
  address: string;
}

interface CampusItem {
  id: string;
  name: string;
  badge: string;
  branches: CampusBranch[];
  phone: string;
  phoneRaw: string;
  hours: string;
  features: string[];
  mapUrl: string;
}

export const LandingCampuses: React.FC = () => {
  const campuses: CampusItem[] = [
    {
      id: "sivakasi",
      name: "Sivakasi Campus",
      badge: "Main Headquarters & Mega Lab",
      branches: [
        {
          label: "Campus 1 (Downstairs Naturals - Primary)",
          address:
            "193,1A, Ayyappan kovil opposite/ Naturals Salon & Spa Downstairs, Parasakthi Colony, Sivakasi, Tamil Nadu 626123",
        },
        {
          label: "Campus 2 (Thiruthangal Road)",
          address:
            "100A/5, 1st Floor, Thiruthangal Road, Opposite Bell Hotel, IBACO Upstairs, Sivakasi – 626 123",
        },
      ],
      phone: "+91 93443 37331",
      phoneRaw: "+919344337331",
      hours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
      features: [
        "Interactive Smart Classrooms",
        "Executive Placement Boardroom",
        "1-on-1 Counseling Suites",
        "Dedicated High-Speed Fibre Lab",
      ],
      mapUrl: "https://maps.google.com/?q=WeGrow+Skill+Campus+Sivakasi",
    },
    {
      id: "srivilliputtur",
      name: "Srivilliputtur Campus",
      badge: "Regional Center of Excellence",
      branches: [
        {
          address:
            "129, North Car Street, Opposite Bombay Textiles, Upstairs Pathras Kids & Gift Shop, Srivilliputtur – 626 125, Tamil Nadu",
        },
      ],
      phone: "+91 93633 37331",
      phoneRaw: "+919363337331",
      hours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
      features: [
        "Air-Conditioned Practical Labs",
        "Career Guidance Helpdesk",
        "Project Collaboration Lounge",
        "Central Temple Car Street Access",
      ],
      mapUrl: "https://maps.google.com/?q=WeGrow+Skill+Campus+Srivilliputtur",
    },
    {
      id: "sattur",
      name: "Sattur Service Center",
      badge: "Student Information & Transit Hub",
      branches: [
        {
          address:
            "Directly serving learners across Sattur, Kovilpatti, and Virudhunagar with transport transit connectivity and weekend batches.",
        },
      ],
      phone: "+91 93443 37331 / +91 93633 37331",
      phoneRaw: "+919344337331",
      hours: "Helpline Active: 9:00 AM – 7:00 PM (Mon-Sat)",
      features: [
        "Transit Support for Regular Batches",
        "Special Weekend Hybrid Classes",
        "Dedicated Sattur Admissions Coordinator",
        "Direct Bus Route Accessibility",
      ],
      mapUrl: "https://maps.google.com/?q=Sattur+Tamil+Nadu",
    },
  ];

  return (
    <section id="campuses-section" className="py-16 sm:py-24 bg-white relative">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
            <MapPin className="w-3.5 h-3.5 text-brand-orange" />
            <span>Accessible Local Presence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Campuses in Sivakasi, Sattur &amp; Srivilliputtur
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Conveniently located learning centers with modern transport connectivity, air-conditioned labs, and on-site career counselors.
          </p>
        </div>

        {/* Campuses 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {campuses.map((campus) => (
            <div
              key={campus.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-orange/40"
            >
              <div>
                {/* Badge */}
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-orange">
                    {campus.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-brand-navy">
                  {campus.name}
                </h3>

                <div className="mt-3 space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[50px]">
                  {campus.branches.map((branch, idx) => (
                    <div key={idx} className={idx > 0 ? "pt-2 border-t border-slate-100" : ""}>
                      {branch.label && (
                        <span className="block text-[11px] font-bold text-brand-orange uppercase tracking-wider mb-0.5">
                          {branch.label}
                        </span>
                      )}
                      <span>{branch.address}</span>
                    </div>
                  ))}
                </div>

                {/* Contact numbers */}
                <div className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-medium text-slate-700">
                    <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                    <a
                      href={`tel:${campus.phoneRaw}`}
                      className="hover:text-brand-orange transition-colors font-bold"
                    >
                      {campus.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{campus.hours}</span>
                  </div>
                </div>

                {/* Campus Features */}
                <div className="mt-4 border-t border-slate-100 pt-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Campus Facilities:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {campus.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={campus.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
                >
                  <Compass className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Get Driving Directions (Google Maps)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingCampuses;

