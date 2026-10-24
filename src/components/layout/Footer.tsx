"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

const CAMPUS_LOCATIONS = {
  sivakasi: {
    label: "Sivakasi",
    address: "100A/5, 1st Floor, Thiruthangal Road, Opposite Bell Hotel, IBACO Upstairs, Sivakasi – 626 123",
  },
  srivilliputhur: {
    label: "Srivilliputhur",
    address: "129, North Car Street, Opposite Bombay Textiles, Upstairs Pathras Kids & Gift Shop, Srivilliputtur – 626 125",
  },
};

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedCampus, setSelectedCampus] = useState<keyof typeof CAMPUS_LOCATIONS>("sivakasi");
  const activeCampus = CAMPUS_LOCATIONS[selectedCampus];
  const campusMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`WeGrow Skill Campus ${activeCampus.address}`)}`;
  const campusEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(activeCampus.address)}&output=embed`;

  // Accordion state for mobile view
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    quickLinks: false,
    programs: false,
    usefulLinks: false,
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setSubscribed(true);
    setEmail("");
  };

  const QUICK_LINKS = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/programs" },
    { label: "Events", href: "/events" },
    { label: "Skill Campus", href: "/skill-campus" },
    { label: "Industry", href: "/industry" },
    { label: "Placements", href: "/placements" },
    { label: "Global Exposure", href: "/global-exposure" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const PROGRAM_LINKS = [
    { label: "AI Java Full Stack Development", href: "/programs/ai-java-full-stack" },
    { label: "AI Python Full Stack Development", href: "/programs/ai-python-full-stack" },
    { label: "Data Analytics", href: "/programs/data-analytics" },
    { label: "Digital Marketing", href: "/programs/digital-marketing" },
    { label: "View All Programs", href: "/programs" },
  ];

  const USEFUL_LINKS = [
    { label: "FAQs", href: "/faqs" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  return (
    <footer
      className="relative w-full shrink-0 overflow-hidden pt-14 text-white font-montserrat sm:pt-16 lg:pt-20"
      style={{
        background: "radial-gradient(circle at 70% 30%, #10295A 0%, #0A1F44 60%)",
        backgroundColor: "#0A1F44",
      }}
      id="footer"
    >
      {/* ================= BACKGROUND DECORATIONS (z-0) ================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Top-Right: 2 Layered Curved Waves (SVG, ~350px wide) */}
        <div className="absolute top-0 right-0 w-[150px] sm:w-[260px] lg:w-[380px] h-[130px] sm:h-[200px] lg:h-[280px] opacity-50 sm:opacity-100">
          <svg className="w-full h-full" viewBox="0 0 380 280" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="footer-tr-orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F7820E" />
                <stop offset="100%" stopColor="#C85F00" />
              </linearGradient>
            </defs>
            {/* Inner blue wave */}
            <path
              d="M380 0 L140 0 C220 70 210 180 380 240 Z"
              fill="#1A4FA0"
              fillOpacity="0.6"
            />
            {/* Outer orange wave */}
            <path
              d="M380 0 L210 0 C280 50 270 130 380 180 Z"
              fill="url(#footer-tr-orange-grad)"
              fillOpacity="0.9"
            />
          </svg>
        </div>

        {/* Bottom-Left: 2 Layered Curved Waves (~250px wide) */}
        <div className="absolute bottom-0 left-0 w-[140px] sm:w-[220px] lg:w-[280px] h-[120px] sm:h-[170px] lg:h-[220px] opacity-50 sm:opacity-100">
          <svg className="w-full h-full" viewBox="0 0 280 220" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="footer-bl-orange-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F7820E" />
                <stop offset="100%" stopColor="#D26A08" />
              </linearGradient>
            </defs>
            {/* Orange gradient wave */}
            <path
              d="M0 220 L0 50 C60 70 140 130 220 220 Z"
              fill="url(#footer-bl-orange-grad)"
              fillOpacity="0.85"
            />
            {/* Translucent white/grey wave above it */}
            <path
              d="M0 220 L0 100 C80 110 170 160 260 220 Z"
              fill="#FFFFFF"
              fillOpacity="0.08"
            />
          </svg>
        </div>
      </div>

      {/* ================= MAIN CONTAINER (max-width 1760px, padding 0 100px) ================= */}
      <div className="relative z-10 w-full max-w-[1760px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-[100px]">
        {/* ================= TOP SECTION: 5-COLUMN MAIN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-6 2xl:gap-8 items-start">
          {/* ================= COLUMN 1: BRAND ================= */}
          <div className="flex w-full flex-col justify-start md:col-span-2 xl:col-span-3">
            {/* Official WeGrow Skill Campus Logo from /logo.png */}
            <Link href="/" className="inline-block group w-fit" id="footer-logo">
              <div className="bg-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-[14px] inline-flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="WeGrow Skill Campus"
                  className="h-[46px] sm:h-[56px] w-auto object-contain block"
                />
              </div>
            </Link>

            {/* Description */}
            <p className="text-[16px] sm:text-[18px] font-normal leading-[1.6] text-white/90 max-w-[430px] mt-[26px]">
              Bridging the gap between learning and employment through industry-focused training,
              real projects and placement support.
            </p>

            {/* Social icons row */}
            <div className="flex items-center gap-[16px] sm:gap-[20px] mt-[28px]">
              {/* LinkedIn: #0A66C2 */}
              <a
                href="https://in.linkedin.com/company/wegrow-skill-campus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WeGrow LinkedIn"
                className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full bg-[#0A66C2] flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-[3px] hover:scale-[1.08] shadow-md"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Instagram: Gradient */}
              <a
                href="https://www.instagram.com/wegrowskillcampus/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WeGrow Instagram"
                className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-[3px] hover:scale-[1.08] shadow-md"
                style={{
                  background: "linear-gradient(45deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)",
                }}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube: #FF0000 */}
              <a
                href="https://www.youtube.com/@wegrowskillcampus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WeGrow YouTube"
                className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full bg-[#FF0000] flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-[3px] hover:scale-[1.08] shadow-md"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Facebook: #1877F2 */}
              <a
                href="https://www.facebook.com/wegrowskillcampus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WeGrow Facebook"
                className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full bg-[#1877F2] flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-[3px] hover:scale-[1.08] shadow-md"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

            {/* Tagline row */}
            <div className="flex flex-wrap items-center text-[15px] sm:text-[18px] font-semibold text-white mt-[32px]">
              <span>Learn</span>
              <span className="text-[#F7820E] mx-[10px] sm:mx-[16px] select-none">|</span>
              <span>Build</span>
              <span className="text-[#F7820E] mx-[10px] sm:mx-[16px] select-none">|</span>
              <span>Grow</span>
              <span className="text-[#F7820E] mx-[10px] sm:mx-[16px] select-none">|</span>
              <span>Get Placed</span>
            </div>
          </div>

          {/* ================= COLUMN 2: QUICK LINKS ================= */}
          <div className="flex flex-col w-full xl:col-span-2">
            <button
              onClick={() => toggleAccordion("quickLinks")}
              className="flex items-center justify-between w-full text-left md:pointer-events-none"
              aria-expanded={openAccordions.quickLinks}
            >
              <div>
                <h3 className="text-[22px] sm:text-[25px] font-bold text-white tracking-tight">
                  Quick Links
                </h3>
                <div className="w-[46px] h-[3px] bg-[#F7820E] rounded-full mt-[12px] mb-[20px] sm:mb-[28px]" />
              </div>
              <ChevronDown
                className={`w-6 h-6 text-[#F7820E] md:hidden transition-transform duration-200 ${
                  openAccordions.quickLinks ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`space-y-1 ${
                openAccordions.quickLinks ? "block" : "hidden md:block"
              }`}
            >
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] sm:text-[17px] font-normal text-white/85 leading-[2.1] block transition-all duration-200 ease-out hover:text-[#F7820E] hover:pl-[6px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 3: PROGRAMS ================= */}
          <div className="flex flex-col w-full xl:col-span-2">
            <button
              onClick={() => toggleAccordion("programs")}
              className="flex items-center justify-between w-full text-left md:pointer-events-none"
              aria-expanded={openAccordions.programs}
            >
              <div>
                <h3 className="text-[22px] sm:text-[25px] font-bold text-white tracking-tight">
                  Programs
                </h3>
                <div className="w-[46px] h-[3px] bg-[#F7820E] rounded-full mt-[12px] mb-[20px] sm:mb-[28px]" />
              </div>
              <ChevronDown
                className={`w-6 h-6 text-[#F7820E] md:hidden transition-transform duration-200 ${
                  openAccordions.programs ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`space-y-1 ${
                openAccordions.programs ? "block" : "hidden md:block"
              }`}
            >
              {PROGRAM_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] sm:text-[17px] font-normal text-white/85 leading-[2.1] block transition-all duration-200 ease-out hover:text-[#F7820E] hover:pl-[6px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 4: USEFUL LINKS ================= */}
          <div className="flex flex-col w-full xl:col-span-2">
            <button
              onClick={() => toggleAccordion("usefulLinks")}
              className="flex items-center justify-between w-full text-left md:pointer-events-none"
              aria-expanded={openAccordions.usefulLinks}
            >
              <div>
                <h3 className="text-[22px] sm:text-[25px] font-bold text-white tracking-tight">
                  Useful Links
                </h3>
                <div className="w-[46px] h-[3px] bg-[#F7820E] rounded-full mt-[12px] mb-[20px] sm:mb-[28px]" />
              </div>
              <ChevronDown
                className={`w-6 h-6 text-[#F7820E] md:hidden transition-transform duration-200 ${
                  openAccordions.usefulLinks ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`space-y-1 ${
                openAccordions.usefulLinks ? "block" : "hidden md:block"
              }`}
            >
              {USEFUL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] sm:text-[17px] font-normal text-white/85 leading-[2.1] block transition-all duration-200 ease-out hover:text-[#F7820E] hover:pl-[6px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COLUMN 5: CONTACT US ================= */}
          <div className="flex flex-col w-full md:col-span-2 xl:col-span-3 xl:border-l xl:border-white/10 xl:pl-6 2xl:pl-8">
            <div>
              <h3 className="text-[22px] sm:text-[25px] font-bold text-white tracking-tight">
                Contact Us
              </h3>
              <div className="w-[46px] h-[3px] bg-[#F7820E] rounded-full mt-[12px] mb-[24px]" />
            </div>

            {/* Campus Selector Pill Switcher */}
            <div
              className="mb-4 flex w-full rounded-xl bg-white/10 p-1"
              role="group"
              aria-label="Choose a campus location"
            >
              {(Object.keys(CAMPUS_LOCATIONS) as Array<keyof typeof CAMPUS_LOCATIONS>).map((campusKey) => {
                const campus = CAMPUS_LOCATIONS[campusKey];
                const isSelected = selectedCampus === campusKey;
                return (
                  <button
                    key={campusKey}
                    type="button"
                    onClick={() => setSelectedCampus(campusKey)}
                    aria-pressed={isSelected}
                    className={`flex-1 rounded-lg px-3 py-2 text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F7820E] ${
                      isSelected
                        ? "bg-[#F7820E] text-white shadow-md"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {campus.label}
                  </button>
                );
              })}
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 text-white/90 mb-3.5">
              <MapPin className="mt-1 h-5 w-5 shrink-0 stroke-[2] text-[#F7820E]" aria-hidden="true" />
              <p aria-live="polite" className="text-sm sm:text-[15px] leading-relaxed">
                {activeCampus.address}
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 text-white/90 mb-3">
              <Phone className="h-5 w-5 shrink-0 stroke-[2] text-[#F7820E] mt-0.5" aria-hidden="true" />
              <div className="flex flex-col gap-1 text-sm sm:text-[15px]">
                <a href="tel:+919344337331" className="hover:text-[#F7820E] transition-colors">+91 93443 37331</a>
                <a href="tel:+919363337331" className="hover:text-[#F7820E] transition-colors">+91 93633 37331</a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-white/90 mb-3">
              <Mail className="h-5 w-5 shrink-0 stroke-[2] text-[#F7820E]" aria-hidden="true" />
              <a
                href="mailto:enquiry@wegrowcampus.in"
                className="text-sm sm:text-[15px] hover:text-[#F7820E] transition-colors break-all"
              >
                enquiry@wegrowcampus.in
              </a>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3 text-white/90 mb-3.5">
              <Clock className="h-5 w-5 shrink-0 stroke-[2] text-[#F7820E]" aria-hidden="true" />
              <span className="text-sm sm:text-[15px]">
                Classes: Mon - Sat, 9:00 AM - 7:00 PM
              </span>
            </div>

            {/* Direct Google Maps link */}
            <a
              href={campusMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F7820E] hover:text-white transition-colors"
            >
              <span>View {activeCampus.label} on Google Maps</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* ================= LOWER SECTION: INTERACTIVE MAP & STAY UPDATED ================= */}
        <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* MAP CARD: lg:col-span-7 */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-white/15 bg-white/[0.04] p-5 sm:p-6 shadow-lg backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F7820E]/20 flex items-center justify-center text-[#F7820E]">
                  <MapPin className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">Find Us</h4>
                  <p className="text-xs sm:text-sm text-white/70">
                    Interactive map for {activeCampus.label} Campus
                  </p>
                </div>
              </div>
              <a
                href={campusMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F7820E] px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:bg-[#E06F00] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Open in Maps</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="w-full overflow-hidden rounded-xl border border-white/20 bg-black/20 h-[220px] sm:h-[260px]">
              <iframe
                key={selectedCampus}
                title={`${activeCampus.label} campus map`}
                src={campusEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* STAY UPDATED NEWSLETTER: lg:col-span-5 */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/15 bg-white/[0.04] p-6 sm:p-7 shadow-lg backdrop-blur-sm">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#F7820E]/20 text-[#F7820E] text-xs font-bold tracking-wider uppercase mb-3">
                Newsletter
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white">Stay Updated</h4>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mt-2">
                Get the latest updates on programs, upcoming workshops, hackathons, and placement opportunities.
              </p>
            </div>

            {/* Email Subscription Form */}
            <form onSubmit={handleSubscribe} className="mt-6">
              <div className="flex flex-col sm:flex-row rounded-xl overflow-hidden bg-white shadow-sm border border-white/20">
                <div className="relative flex-1 flex items-center px-4 py-3 sm:py-0">
                  <Mail className="w-5 h-5 text-[#0B3B8F] shrink-0 mr-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-[#0A1F44] text-[15px] sm:text-[17px] placeholder:text-[#7A869E] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="h-[48px] sm:h-[54px] bg-[#F7820E] hover:bg-[#E06F00] text-white font-montserrat font-bold text-[15px] sm:text-[17px] px-6 flex items-center justify-center gap-2 transition-colors shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

              {errorMsg && (
                <p className="text-[#FF8080] text-sm mt-2.5 font-medium">{errorMsg}</p>
              )}

              {subscribed && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm mt-2.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thanks for subscribing!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="relative z-10 mt-14 w-full border-t border-white/10 px-5 py-6 sm:mt-16 sm:px-10 sm:py-7 lg:mt-20 lg:px-16 xl:px-[100px]">
        <div className="max-w-[1760px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* LEFT: Copyright */}
          <p className="text-sm font-normal text-white/85 sm:text-base">
            &copy; {new Date().getFullYear()} WeGrow Skill Campus. All rights reserved.
          </p>

          {/* RIGHT: Privacy Policy | Terms & Conditions | Sitemap */}
          <div className="flex flex-wrap items-center justify-center text-sm font-normal text-white sm:text-base">
            <Link
              href="/privacy-policy"
              className="hover:text-[#F7820E] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-[#F7820E] mx-[14px] sm:mx-[20px] select-none">|</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-[#F7820E] transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-[#F7820E] mx-[14px] sm:mx-[20px] select-none">|</span>
            <Link
              href="/sitemap.xml"
              className="hover:text-[#F7820E] transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
