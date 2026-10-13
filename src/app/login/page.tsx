"use client";

import React, { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Eye,
  EyeOff,
  KeyRound,
  Mail,
  Quote,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

interface CampusShowcaseCard {
  id: string;
  tabLabel: string;
  badge: string;
  imageSrc: string;
  altText: string;
  headline: string;
  statNumber: string;
  statLabel: string;
  tagline: string;
}

const SHOWCASE_CARDS: CampusShowcaseCard[] = [
  {
    id: "coding-lab",
    tabLabel: "Coding Lab",
    badge: "PRACTICAL IT LAB",
    imageSrc: "/difference/industry-training.jpg",
    altText: "Students learning software development in a computer lab",
    headline: "Hands-on software development in production labs.",
    statNumber: "100%",
    statLabel: "Practical Training",
    tagline: "Full-Stack • DevOps • Cloud Engineering",
  },
  {
    id: "collaboration",
    tabLabel: "Campus Life",
    badge: "TECH COLLABORATION",
    imageSrc: "/skillcampus-hero.png",
    altText: "WeGrow Skill Campus students collaborating in modern campus facility",
    headline: "Peer collaboration, sprint reviews & live mentoring.",
    statNumber: "15+",
    statLabel: "Specialized IT Tracks",
    tagline: "Mentored by Industry Leaders",
  },
  {
    id: "project-work",
    tabLabel: "Live Projects",
    badge: "INDUSTRY DELIVERABLES",
    imageSrc: "/difference/project-exposure.jpg",
    altText: "Students collaborating on live technology projects",
    headline: "Build live enterprise software with corporate partners.",
    statNumber: "98%",
    statLabel: "Placement Rate",
    tagline: "Direct Pipeline to Tech Employers",
  },
  {
    id: "diagram",
    tabLabel: "Curriculum",
    badge: "LEARNING ROADMAP",
    imageSrc: "/login-learning-illustration.svg",
    altText: "WeGrow Skill Campus learning and IT engineering illustration",
    headline: "Structured curriculum from fundamentals to mastery.",
    statNumber: "1-on-1",
    statLabel: "Dedicated Mentorship",
    tagline: "Career Roadmap & Mock Interviews",
  },
];

export default function LoginPage() {
  const [selectedCardId, setSelectedCardId] = useState<string>("coding-lab");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const activeCard =
    SHOWCASE_CARDS.find((c) => c.id === selectedCardId) || SHOWCASE_CARDS[0];

  const handleGoogleSignIn = () => {
    setEmail("student@wegrowcampus.com");
    setPassword("CampusLearn2026!");
    setSuccessMessage("Google single sign-on authenticated. Redirecting to campus dashboard...");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!email.trim() || !password) {
      setError("Please provide your email address and password to continue.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid campus email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Authentication verified! Redirecting to your campus dashboard...");
    }, 700);
  };

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#F6F8FC] px-3 py-6 sm:px-6 sm:py-10 lg:px-8">
      {/* ================= NIXTIO-INSPIRED AMBIENT RADIAL LIGHTING & CONCENTRIC RINGS ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Soft Blue Radial Atmosphere */}
        <div className="absolute -top-[25%] -left-[15%] h-[800px] w-[800px] rounded-full bg-gradient-to-br from-[#0B3B8F]/15 via-[#0B3B8F]/5 to-transparent blur-3xl" />
        {/* Signature Orange Glow (Nixtio / Payoneer-style warm ambient glow) */}
        <div className="absolute top-[20%] -right-[15%] h-[750px] w-[750px] rounded-full bg-gradient-to-bl from-[#F7820E]/15 via-[#F7820E]/5 to-transparent blur-3xl" />
        {/* Bottom Atmosphere Glow */}
        <div className="absolute -bottom-[20%] left-[25%] h-[650px] w-[650px] rounded-full bg-gradient-to-t from-[#0B3B8F]/10 via-[#F7820E]/5 to-transparent blur-3xl" />

        {/* Concentric Radiant Rings (Echoing Payoneer Ring & WeGrow Arcs) */}
        <div className="absolute -top-[120px] -right-[120px] h-[580px] w-[580px] rounded-full border border-[#0B3B8F]/10" />
        <div className="absolute -top-[70px] -right-[70px] h-[480px] w-[480px] rounded-full border border-[#F7820E]/20 border-dashed" />
        <div className="absolute -top-[20px] -right-[20px] h-[380px] w-[380px] rounded-full border border-[#0B3B8F]/10" />
      </div>

      {/* ================= MAIN CONTAINER CANVAS ================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] overflow-hidden rounded-[30px] sm:rounded-[36px] bg-white border border-[#E3E8F0] shadow-[0_24px_70px_rgba(11,59,143,0.13)]">
        <div className="grid min-h-[min(800px,calc(100vh-3.5rem))] lg:grid-cols-[1.1fr_0.9fr]">

          {/* ================= LEFT SIDE: NIXTIO-STYLE VISUAL SHOWCASE (DARK/HIGH-CONTRAST HERO) ================= */}
          <section className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#061A3D] via-[#082352] to-[#04122C] p-6 sm:p-9 lg:p-11 text-white">
            {/* Ambient glows behind the card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#0B3B8F]/50 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#F7820E]/25 blur-3xl"
            />

            {/* Glowing Concentric Lines behind the card */}
            <svg
              className="pointer-events-none absolute -right-20 top-20 h-[480px] w-[480px] opacity-25"
              viewBox="0 0 500 500"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="250" cy="250" r="240" stroke="#F7820E" strokeWidth="1.5" strokeDasharray="8 8" />
              <circle cx="250" cy="250" r="180" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
              <circle cx="250" cy="250" r="120" stroke="#F7820E" strokeWidth="2" opacity="0.6" />
            </svg>

            {/* Top Brand Bar */}
            <div className="relative z-10 flex items-center justify-between gap-4">
              <Link
                href="/"
                className="group flex items-center gap-3 rounded-2xl bg-white/95 px-3.5 py-2 shadow-md transition-all duration-200 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7820E]"
                aria-label="WeGrow Skill Campus Home"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/wegrow-skill-campus-logo.png"
                  alt="WeGrow Skill Campus"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </Link>

              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[11px] font-bold font-montserrat tracking-widest uppercase text-white/90">
                  CAMPUS ACTIVE
                </span>
              </div>
            </div>

            {/* Middle Section: Expressive Headline & Floating Glass Showcase Card */}
            <div className="relative z-10 my-6 flex flex-col justify-center">
              {/* Pill Eyebrow */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#F7820E]" />
                <span className="text-[11px] font-bold font-montserrat uppercase tracking-[1.5px] text-white/90">
                  SKILLS TODAY • CAREERS TOMORROW
                </span>
              </div>

              {/* Bold Expressive Typography (Nixtio Style) */}
              <h1 className="mt-4 font-montserrat font-extrabold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.1] tracking-[-0.03em] text-white">
                Building Skills.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7820E] via-[#FFB366] to-[#F7820E]">
                  Creating Careers.
                </span>
              </h1>
              <p className="mt-3 max-w-lg font-poppins text-sm sm:text-[15px] font-normal leading-relaxed text-white/75">
                Bridging education and industry with practical software training, dedicated career guidance, and high-impact placement support.
              </p>

              {/* Nixtio-Style Floating Showcase Card with Topic-Specific Picture */}
              <div className="relative mt-6 w-full rounded-2xl sm:rounded-3xl border border-white/20 bg-white/[0.06] p-2 sm:p-2.5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,10,30,0.45)]">
                {/* Image Container with high quality topic photo */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-950">
                  <Image
                    key={activeCard.imageSrc}
                    src={activeCard.imageSrc}
                    alt={activeCard.altText}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-center transition-all duration-700 hover:scale-105"
                    priority
                  />
                  {/* Subtle Dark Vignette Gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04122C]/90 via-[#04122C]/20 to-transparent" />

                  {/* Top-Left Floating Tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 rounded-xl border border-white/20 bg-[#0B3B8F]/90 px-3 py-1.5 backdrop-blur-md text-[10px] font-bold font-montserrat tracking-wider text-white shadow-lg sm:top-4 sm:left-4 sm:text-[11px]">
                    <span className="h-2 w-2 rounded-full bg-[#F7820E] animate-ping" />
                    {activeCard.badge}
                  </div>

                  {/* Floating Glass Pill: Placement / Practical Metric */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 rounded-xl border border-white/20 bg-white/90 px-3 py-1.5 backdrop-blur-md text-[#0B3B8F] shadow-lg sm:top-4 sm:right-4">
                    <TrendingUp className="h-3.5 w-3.5 text-[#F7820E]" strokeWidth={2.5} />
                    <span className="text-[11px] font-extrabold font-montserrat">
                      {activeCard.statNumber} {activeCard.statLabel}
                    </span>
                  </div>

                  {/* Bottom Overlay Glass Banner */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl sm:rounded-2xl border border-white/20 bg-white/95 p-3 sm:p-3.5 backdrop-blur-md shadow-xl text-[#0B3B8F]">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#0B3B8F] text-white shadow-md">
                          <Code2 className="h-5 w-5 text-[#F7820E]" strokeWidth={2.4} />
                        </div>
                        <div>
                          <p className="font-montserrat text-xs sm:text-sm font-bold text-[#0B3B8F] leading-snug">
                            {activeCard.headline}
                          </p>
                          <p className="font-poppins text-[11px] text-[#3B4A66] leading-snug">
                            {activeCard.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Overlapping Student Avatars (Nixtio Social Proof) */}
                      <div className="hidden sm:flex items-center -space-x-2 shrink-0">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B3B8F] text-[10px] font-bold font-montserrat text-white ring-2 ring-white">
                          WK
                        </div>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F7820E] text-[10px] font-bold font-montserrat text-white ring-2 ring-white">
                          DEV
                        </div>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#072359] text-[10px] font-bold font-montserrat text-white ring-2 ring-white">
                          +1.2k
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Picture Switcher Segmented Control (Nixtio Style Tabs) */}
                <div className="mt-2.5 grid grid-cols-4 gap-1 rounded-xl bg-black/30 p-1">
                  {SHOWCASE_CARDS.map((card) => {
                    const isSelected = card.id === selectedCardId;
                    return (
                      <button
                        key={card.id}
                        type="button"
                        onClick={() => setSelectedCardId(card.id)}
                        className={`rounded-lg py-2 px-1 text-center font-montserrat text-[11px] font-bold transition-all duration-200 ${
                          isSelected
                            ? "bg-[#F7820E] text-white shadow-md scale-[1.02]"
                            : "text-white/70 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {card.tabLabel}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Student Quote Pill (Nixtio signature detail) */}
              <div className="mt-4 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] p-3 backdrop-blur-sm">
                <Quote className="h-4 w-4 text-[#F7820E] shrink-0" />
                <p className="text-[12px] font-poppins text-white/80 leading-snug italic">
                  &ldquo;WeGrow bridged the gap between learning theory and building real-world enterprise software.&rdquo;
                </p>
              </div>

              {/* 3 Metric Pills below showcase (matching HeroSection stats) */}
              <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-2.5 text-center backdrop-blur-sm">
                  <span className="font-montserrat text-[18px] sm:text-[22px] font-extrabold text-white leading-tight">
                    100%
                  </span>
                  <p className="mt-0.5 font-poppins text-[10px] sm:text-[11px] text-white/80">
                    Practical Learning
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-2.5 text-center backdrop-blur-sm">
                  <span className="font-montserrat text-[18px] sm:text-[22px] font-extrabold text-[#F7820E] leading-tight">
                    15+
                  </span>
                  <p className="mt-0.5 font-poppins text-[10px] sm:text-[11px] text-white/80">
                    IT Programs
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-2.5 text-center backdrop-blur-sm">
                  <span className="font-montserrat text-[18px] sm:text-[22px] font-extrabold text-white leading-tight">
                    98%
                  </span>
                  <p className="mt-0.5 font-poppins text-[10px] sm:text-[11px] text-white/80">
                    Placement Support
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Footer Credits */}
            <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-4 text-[11px] font-poppins text-white/60">
              <span>WeGrow Skill Campus • Bridging Education &amp; Industry</span>
              <span className="font-montserrat font-bold text-white/90">SECURE PORTAL</span>
            </div>
          </section>

          {/* ================= RIGHT SIDE: NIXTIO-STYLE AUTH FORM ================= */}
          <section className="flex flex-col justify-between px-6 py-8 sm:px-10 sm:py-11 lg:px-12 lg:py-12 bg-white">
            <div>
              {/* Top Navigation Row */}
              <div className="mb-7 flex items-center justify-between">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 text-xs font-semibold font-montserrat text-[#0B3B8F] transition-colors hover:text-[#F7820E]"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  <span>Back to website</span>
                </Link>

                <div className="flex items-center gap-1.5 rounded-full bg-[#0B3B8F]/5 border border-[#0B3B8F]/10 px-2.5 py-1 text-[11px] font-semibold font-montserrat text-[#0B3B8F]">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#F7820E]" />
                  <span>256-Bit SSL Auth</span>
                </div>
              </div>

              {/* Form Title & Header */}
              <div className="mb-6">
                <span className="text-[12px] font-bold font-montserrat uppercase tracking-[2px] text-[#F7820E]">
                  PORTAL ACCESS
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-montserrat tracking-tight text-[#0B3B8F]">
                  Welcome <span className="text-[#F7820E]">Back</span>
                </h2>
                <p className="mt-1.5 text-sm font-poppins text-[#3B4A66]">
                  Welcome back! Please enter your campus credentials to access your dashboard.
                </p>
              </div>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-bold font-montserrat uppercase tracking-wider text-[#0B3B8F]"
                  >
                    Email Address
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-[#E3E8F0] bg-[#F8FAFD] px-4 py-3.5 transition-all duration-200 focus-within:border-[#0B3B8F] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#0B3B8F]/10">
                    <Mail className="h-[18px] w-[18px] text-[#0B3B8F]/60" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@wegrowcampus.com"
                      className="w-full bg-transparent font-poppins text-sm font-medium text-[#0B3B8F] outline-none placeholder:text-[#8E9CB2]"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <div className="mb-1.5 flex items-center justify-between gap-2">
                    <label
                      htmlFor="password"
                      className="block text-xs font-bold font-montserrat uppercase tracking-wider text-[#0B3B8F]"
                    >
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        alert(
                          "A secure password reset link has been dispatched to your registered campus email."
                        )
                      }
                      className="text-xs font-bold font-montserrat text-[#0B3B8F] transition-colors hover:text-[#F7820E]"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-[#E3E8F0] bg-[#F8FAFD] px-4 py-3.5 transition-all duration-200 focus-within:border-[#0B3B8F] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#0B3B8F]/10">
                    <KeyRound className="h-[18px] w-[18px] text-[#0B3B8F]/60" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your account password"
                      className="w-full bg-transparent font-poppins text-sm font-medium text-[#0B3B8F] outline-none placeholder:text-[#8E9CB2]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="text-[#3B4A66] transition-colors hover:text-[#0B3B8F]"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="h-[18px] w-[18px]" />
                      ) : (
                        <Eye className="h-[18px] w-[18px]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex cursor-pointer items-center gap-2.5 text-xs font-poppins font-medium text-[#3B4A66]">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe((prev) => !prev)}
                      className="h-4 w-4 rounded-md border-[#E3E8F0] text-[#0B3B8F] accent-[#0B3B8F] focus:ring-[#0B3B8F]"
                    />
                    <span>Remember this device for 30 days</span>
                  </label>
                </div>

                {/* Error Banner */}
                {error && (
                  <div
                    className="flex items-center gap-2.5 rounded-2xl border border-red-200 bg-red-50 p-3.5 text-xs font-semibold font-poppins text-red-700"
                    role="alert"
                  >
                    <span className="h-2 w-2 rounded-full bg-red-500 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Success Banner */}
                {successMessage && (
                  <div
                    className="flex items-center gap-2.5 rounded-2xl border border-green-200 bg-green-50 p-3.5 text-xs font-semibold font-poppins text-green-800"
                    role="alert"
                  >
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span>{successMessage}</span>
                  </div>
                )}

                {/* ================= PRIMARY SUBMIT BUTTON ================= */}
                {/* 
                  Landing Page Colors:
                  - Normal state: Landing Page Deep Navy (#0B3B8F)
                  - Hover state: Landing Page Signature Orange (#F7820E) with active (#E06F00)
                  - Text: Montserrat Bold
                  - Glowing shadow transition and animated icon
                */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative flex w-full items-center justify-between rounded-2xl bg-[#0B3B8F] px-6 py-4 text-base font-bold font-montserrat text-white shadow-[0_10px_24px_rgba(11,59,143,0.18)] transition-all duration-200 hover:bg-[#F7820E] hover:shadow-[0_14px_30px_rgba(247,130,14,0.35)] hover:-translate-y-0.5 active:bg-[#E06F00] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F7820E]/40 disabled:opacity-75"
                >
                  <span>
                    {isLoading ? "Verifying Credentials..." : "Sign In to Campus Portal"}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-200 group-hover:bg-white group-hover:text-[#F7820E] group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4 stroke-[2.6]" />
                  </span>
                </button>
              </form>

              {/* Clean Horizontal Divider */}
              <div className="my-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-[#E3E8F0]" />
                <span className="text-[11px] font-bold font-montserrat uppercase tracking-[1.5px] text-[#3B4A66]/60">
                  or continue with
                </span>
                <span className="h-px flex-1 bg-[#E3E8F0]" />
              </div>

              {/* Google Social SSO Button (Placed Below the Sign In Button) */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl border border-[#E3E8F0] bg-white py-3.5 px-4 font-montserrat text-sm font-bold text-[#0B3B8F] shadow-sm transition-all duration-200 hover:border-[#0B3B8F] hover:bg-[#F8FAFD] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0B3B8F]/20"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.14z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              {/* Bottom Sign-up Link */}
              <p className="mt-6 text-center text-xs font-poppins text-[#3B4A66]">
                New to WeGrow?{" "}
                <Link
                  href="/programs"
                  className="font-bold font-montserrat text-[#0B3B8F] transition-colors hover:text-[#F7820E]"
                >
                  Create an account
                </Link>
              </p>
            </div>

            {/* Bottom Form Footer (Nixtio style minimal info) */}
            <div className="mt-8 border-t border-[#E3E8F0] pt-4 text-center">
              <p className="text-xs font-poppins text-[#3B4A66]">
                Need help logging in? Reach our{" "}
                <Link
                  href="/contact"
                  className="font-bold font-montserrat text-[#0B3B8F] transition-colors hover:text-[#F7820E]"
                >
                  Campus Support Desk
                </Link>
              </p>
              <p className="mt-1.5 text-[11px] font-poppins text-[#3B4A66]/60">
                © {new Date().getFullYear()} WeGrow Skill Campus • All rights reserved.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
