"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, LogIn } from "lucide-react";
import { MAIN_NAVIGATION } from "@/constants/navigation";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      MAIN_NAVIGATION.forEach((item) => router.prefetch(item.href));
    }
  }, [mobileMenuOpen, router]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-[100] flex h-[72px] w-full items-center border-b border-[#E3E8F0] bg-white shadow-[0_2px_15px_rgba(11,59,143,0.06)] sm:h-[80px] 2xl:h-[88px]">
      {/* Full-width container across the entire screen */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
        {/* Left: Official WeGrow Skill Campus Logo Image */}
        <Link
          href="/"
          className="flex shrink-0 items-center py-1 focus:outline-none"
          aria-label="WeGrow Skill Campus Home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/wegrow-skill-campus-logo.png"
            alt="WeGrow Skill Campus"
            className="block h-[42px] w-auto max-h-[58px] object-contain sm:h-[48px] 2xl:h-[56px]"
          />
        </Link>

        {/* Center Links (responsive for laptops and large screens) */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex items-center gap-2.5 min-[1400px]:gap-3.5 2xl:gap-5"
        >
          {MAIN_NAVIGATION.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                onPointerEnter={() => router.prefetch(item.href)}
                onFocus={() => router.prefetch(item.href)}
                className={`text-[13.5px] min-[1400px]:text-[14px] 2xl:text-[15px] font-montserrat transition-colors duration-150 relative py-1 whitespace-nowrap ${
                  isActive
                    ? "text-[#0B3B8F] font-bold after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[3px] after:bg-[#F7820E] after:rounded-full"
                    : "text-[#1E3A6E] font-medium hover:text-[#0B3B8F]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Login CTA */}
        <Link
          href="/student-login"
          prefetch
          onPointerEnter={() => router.prefetch("/student-login")}
          onFocus={() => router.prefetch("/student-login")}
          className="hidden xl:inline-flex items-center justify-center gap-2 rounded-xl bg-[#F7820E] px-4 py-2.5 2xl:px-5 2xl:py-3 font-montserrat text-[14px] 2xl:text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(247,130,14,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E06F00] hover:shadow-[0_12px_24px_rgba(247,130,14,0.3)] focus:outline-none focus:ring-2 focus:ring-[#F7820E] focus:ring-offset-2 active:translate-y-0"
          aria-label="Go to login page"
        >
          <LogIn className="h-[18px] w-[18px]" aria-hidden="true" />
          Login
        </Link>

        {/* Mobile menu trigger */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0B3B8F] hover:bg-slate-100 rounded focus:outline-none focus:ring-2 focus:ring-[#0B3B8F]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" aria-hidden="true" />
            ) : (
              <Menu className="w-7 h-7" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slideout / Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-[72px] z-50 flex flex-col justify-between overflow-y-auto border-t border-[#E3E8F0] bg-white sm:top-[80px] xl:hidden 2xl:top-[88px]"
        >
          <nav className="p-6 space-y-2" aria-label="Mobile Navigation">
            {MAIN_NAVIGATION.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch
                  onPointerEnter={() => router.prefetch(item.href)}
                  onFocus={() => router.prefetch(item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded text-[16px] font-montserrat ${
                    isActive
                      ? "bg-blue-50/70 text-[#0B3B8F] font-bold border-l-4 border-[#F7820E]"
                      : "text-[#1E3A6E] font-medium hover:bg-slate-50 hover:text-[#0B3B8F]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#F7820E]" />}
                </Link>
              );
            })}
            <Link
              href="/student-login"
              prefetch
              onPointerEnter={() => router.prefetch("/student-login")}
              onFocus={() => router.prefetch("/student-login")}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F7820E] px-4 py-3.5 font-montserrat text-base font-bold text-white shadow-[0_8px_20px_rgba(247,130,14,0.2)] transition-all duration-200 hover:bg-[#E06F00] hover:shadow-[0_12px_24px_rgba(247,130,14,0.28)] focus:outline-none focus:ring-2 focus:ring-[#F7820E] focus:ring-offset-2 active:scale-[0.99]"
              aria-label="Go to login page"
            >
              <LogIn className="h-5 w-5" aria-hidden="true" />
              Login
            </Link>
          </nav>

          <div className="p-6 border-t border-[#E3E8F0] bg-[#F6F8FC]">
            <p className="text-center text-xs text-[#3B4A66] font-medium">
              WeGrow Skill Campus • Bridging Education & Industry
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
