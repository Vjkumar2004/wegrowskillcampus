"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  KeyRound,
  LogIn,
  Mail,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";

const FIXED_CREDENTIALS = {
  email: "student@wegrowcampus.com",
  password: "CampusLearn2026!",
};

export default function StudentLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [forgotOpen, setForgotOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (
      email.trim().toLowerCase() === FIXED_CREDENTIALS.email &&
      password === FIXED_CREDENTIALS.password
    ) {
      setSuccess(true);
      return;
    }

    setError("The email or password is incorrect. Check the demo credentials below and try again.");
  }

  return (
    <main className="min-h-screen bg-white lg:grid lg:grid-cols-2">
      <section className="relative hidden min-h-screen flex-col justify-between overflow-hidden bg-[#0B3B8F] p-5 text-white lg:flex lg:p-12 xl:p-16">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/skillcampus-hero.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#071E49]/90 via-[#0B3B8F]/65 to-[#0B3B8F]/40" />
          <div className="absolute inset-y-0 right-0 w-2 bg-[#F7820E]" />
        </div>

        <div className="relative z-10 flex items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="WeGrow Skill Campus home"
            className="inline-flex rounded-xl bg-white px-4 py-2 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7820E]"
          >
            <Image
              src="/logos/wegrow-skill-campus-logo.png"
              alt="WeGrow Skill Campus"
              width={190}
              height={54}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-bold tracking-wide backdrop-blur-sm">
            STUDENT PORTAL
          </span>
        </div>

        <div className="relative z-10 my-5 max-w-xl sm:my-6 lg:my-0">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-200 sm:mb-3 sm:text-sm">WeGrow Skill Campus</p>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl xl:text-6xl">
            Learn with purpose.
            <span className="mt-2 block text-[#FFB15E]">Grow with confidence.</span>
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-6 text-white/85 sm:mt-5 sm:text-lg sm:leading-7">
            Continue your learning journey with practical training, guided projects, and career-focused support.
          </p>
        </div>

        <p className="relative z-10 border-t border-white/20 pt-5 text-xs text-white/75 sm:text-sm">
          Practical skills for your next step.
        </p>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-[#F6F8FC] px-5 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 xl:px-20">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3B4A66] transition-colors hover:text-[#F7820E]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to website
          </Link>

          <div className="mb-7 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D96B00]">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Student access
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B3B8F] sm:text-4xl">Welcome back</h2>
            <p className="mt-2 text-sm leading-6 text-[#53627B]">Sign in with your WeGrow campus credentials.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="student-email" className="mb-2 block text-sm font-bold text-[#17396F]">Email address</label>
              <div className="flex items-center gap-3 rounded-xl border border-[#DCE3EF] bg-white px-4 py-3.5 transition focus-within:border-[#0B3B8F] focus-within:ring-4 focus-within:ring-[#0B3B8F]/10">
                <Mail className="h-5 w-5 shrink-0 text-[#0B3B8F]/60" aria-hidden="true" />
                <input
                  id="student-email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your campus email"
                  className="w-full bg-transparent text-sm text-[#17396F] outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label htmlFor="student-password" className="text-sm font-bold text-[#17396F]">Password</label>
                <button
                  type="button"
                  onClick={() => setForgotOpen(true)}
                  className="text-sm font-bold text-[#0B3B8F] underline decoration-[#F7820E]/70 underline-offset-4 transition-colors hover:text-[#E06F00]"
                >
                  Forgot password?
                </button>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[#DCE3EF] bg-white px-4 py-3.5 transition focus-within:border-[#0B3B8F] focus-within:ring-4 focus-within:ring-[#0B3B8F]/10">
                <KeyRound className="h-5 w-5 shrink-0 text-[#0B3B8F]/60" aria-hidden="true" />
                <input
                  id="student-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-transparent text-sm text-[#17396F] outline-none placeholder:text-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="shrink-0 text-[#53627B] hover:text-[#0B3B8F]"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700">{error}</p>}
            {success && <p role="status" className="rounded-xl border border-green-200 bg-green-50 p-3 text-sm font-medium text-green-800">Demo sign-in successful. Your student portal can be connected here.</p>}

            <button
              type="submit"
              className="group flex w-full items-center justify-between rounded-xl bg-[#F7820E] px-5 py-4 font-bold text-white shadow-[0_10px_24px_rgba(247,130,14,0.2)] transition hover:-translate-y-0.5 hover:bg-[#E06F00] hover:shadow-[0_14px_28px_rgba(247,130,14,0.3)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F7820E]/30"
            >
              <span className="inline-flex items-center gap-2"><LogIn className="h-5 w-5" aria-hidden="true" />Sign in</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </form>

        </div>
      </section>

      {forgotOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#071E49]/65 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setForgotOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="forgot-password-title"
            className="w-full max-w-md rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#F7820E]"><KeyRound className="h-5 w-5" aria-hidden="true" /></span>
                <h2 id="forgot-password-title" className="mt-4 text-2xl font-extrabold text-[#0B3B8F]">Need a password change?</h2>
              </div>
              <button type="button" onClick={() => setForgotOpen(false)} aria-label="Close message" className="rounded-lg p-2 text-[#53627B] transition hover:bg-slate-100 hover:text-[#0B3B8F]">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-3 leading-7 text-[#53627B]">Please contact the WeGrow Skill Campus administrator to reset or change your password.</p>
            <div className="mt-5 space-y-3 rounded-xl bg-[#F6F8FC] p-4 text-sm">
              <a href="mailto:enquiry@wegrowcampus.in" className="flex items-center gap-3 font-semibold text-[#0B3B8F] hover:text-[#E06F00]"><Mail className="h-4 w-4 text-[#F7820E]" aria-hidden="true" />enquiry@wegrowcampus.in</a>
              <a href="tel:+919344337331" className="flex items-center gap-3 font-semibold text-[#0B3B8F] hover:text-[#E06F00]"><Phone className="h-4 w-4 text-[#F7820E]" aria-hidden="true" />+91 93443 37331</a>
            </div>
            <button type="button" onClick={() => setForgotOpen(false)} className="mt-6 w-full rounded-xl bg-[#0B3B8F] px-4 py-3 font-bold text-white transition hover:bg-[#082E70] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0B3B8F]/25">Got it</button>
          </section>
        </div>
      )}
    </main>
  );
}
