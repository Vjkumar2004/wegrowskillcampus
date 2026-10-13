"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { MAIN_NAVIGATION } from "@/constants/navigation";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
    <header className="sticky top-0 z-[100] w-full bg-white h-[88px] flex items-center shadow-[0_2px_15px_rgba(11,59,143,0.06)] border-b border-[#E3E8F0] m-0 p-0">
      {/* Full-width container across the entire screen */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
        {/* Left: Official WeGrow Skill Campus Logo Image */}
        <Link
          href="/"
          className="flex items-center focus:outline-none shrink-0 py-1"
          aria-label="WeGrow Skill Campus Home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/wegrow-skill-campus-logo.png"
            alt="WeGrow Skill Campus"
            className="h-[52px] sm:h-[58px] w-auto max-h-[60px] object-contain block"
            style={{ height: "54px", width: "auto", maxHeight: "58px", display: "block" }}
          />
        </Link>

        {/* Center Links (gap 32px to 40px full-width) */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex items-center gap-6 2xl:gap-[36px]"
        >
          {MAIN_NAVIGATION.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] 2xl:text-[16px] font-montserrat transition-colors duration-150 relative py-1 whitespace-nowrap ${
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

        {/* Right: Search icon (navy) + "Explore Programs →" button */}
        <div className="hidden xl:flex items-center gap-4 2xl:gap-6 shrink-0">
          <Link
            href="/login"
            className={`ml-5 2xl:ml-8 text-[15px] font-semibold font-montserrat transition-colors hover:text-[#F7820E] ${pathname === "/login" ? "text-[#0B3B8F]" : "text-[#1E3A6E]"}`}
            aria-current={pathname === "/login" ? "page" : undefined}
          >
            Login
          </Link>

          <button
            type="button"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#0B3B8F] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B3B8F]"
            aria-label="Search campus programs and courses"
          >
            <Search className="w-5 h-5 text-[#0B3B8F]" strokeWidth={2.2} aria-hidden="true" />
          </button>

        </div>

        {/* Mobile controls */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            type="button"
            className="w-10 h-10 rounded flex items-center justify-center text-[#0B3B8F] hover:bg-slate-100"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-[#0B3B8F]" strokeWidth={2.2} aria-hidden="true" />
          </button>

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
          className="xl:hidden fixed inset-x-0 top-[88px] bottom-0 bg-white z-50 flex flex-col justify-between overflow-y-auto border-t border-[#E3E8F0]"
        >
          <nav className="p-6 space-y-2" aria-label="Mobile Navigation">
            {MAIN_NAVIGATION.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
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
              href="/login"
              className={`flex items-center justify-between px-4 py-3 rounded text-[16px] font-montserrat ${pathname === "/login" ? "bg-blue-50/70 text-[#0B3B8F] font-bold border-l-4 border-[#F7820E]" : "text-[#1E3A6E] font-medium hover:bg-slate-50 hover:text-[#0B3B8F]"}`}
              aria-current={pathname === "/login" ? "page" : undefined}
            >
              Login
              {pathname === "/login" && <span className="w-2 h-2 rounded-full bg-[#F7820E]" />}
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
