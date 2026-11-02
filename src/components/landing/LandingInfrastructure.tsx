"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Building2,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  Wifi,
  Tv,
  Airplay,
  CheckCircle2,
} from "lucide-react";
import { INFRASTRUCTURE_DATA, InfrastructureItem } from "@/data/infrastructureData";

export const LandingInfrastructure: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Facilities" },
    { id: "classroom", label: "Smart Classrooms & Labs" },
    { id: "boardroom", label: "Executive Boardroom" },
    { id: "counseling", label: "Counseling & Admissions" },
    { id: "creative", label: "Campus Art & Culture" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? INFRASTRUCTURE_DATA
      : INFRASTRUCTURE_DATA.filter((item) => item.category === selectedCategory);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      }
    },
    [lightboxIndex, filteredItems.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, lightboxIndex]);

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="infrastructure-section" className="py-16 sm:py-24 bg-white relative">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
            <Building2 className="w-3.5 h-3.5 text-brand-orange" />
            <span>World-Class Learning Environment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Our Campus Infrastructure
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Step into modern, corporate-grade learning spaces designed to nurture collaboration, deep focus, and technical innovation. Explore our high-tech smart classrooms, executive boardrooms, and counseling suites.
          </p>
        </div>

        {/* Feature Highlights Ribbon */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-brand-navy">
              <Airplay className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">100% Air-Conditioned</p>
              <p className="text-[11px] text-slate-500">Full climate control</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-brand-orange">
              <Tv className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Smart 4K Panels</p>
              <p className="text-[11px] text-slate-500">Interactive live code display</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">High-Speed Fibre</p>
              <p className="text-[11px] text-slate-500">Zero latency cloud coding</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Ergonomic Seating</p>
              <p className="text-[11px] text-slate-500">Support for long bootcamps</p>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? "bg-brand-navy text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 flex flex-col justify-between"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay hover icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-slate-900 shadow-md">
                    <ZoomIn className="w-4 h-4 text-brand-orange" />
                    <span>Click to View Full Photo</span>
                  </span>
                </div>

                {/* Category Pill on Image */}
                <span className="absolute top-3 left-3 rounded-md bg-black/60 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Caption & Info */}
              <div className="p-5">
                <h3 className="text-base font-extrabold text-brand-navy group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Feature tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.features.map((feat) => (
                    <span
                      key={feat}
                      className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxItem && lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md animate-fade-in"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Close Bar */}
            <div className="absolute top-4 inset-x-4 z-50 flex items-center justify-between text-white max-w-6xl mx-auto">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                  {activeLightboxItem.categoryLabel} • {lightboxIndex + 1} of {filteredItems.length}
                </span>
                <h3 className="text-lg sm:text-xl font-bold truncate max-w-xl">
                  {activeLightboxItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="rounded-full bg-white/20 p-2 text-white hover:bg-white/40 transition"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation buttons */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
                );
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/20 p-3 text-white hover:bg-white/40 transition"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/20 p-3 text-white hover:bg-white/40 transition"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image in Modal */}
            <div
              className="relative max-h-[80vh] w-full max-w-5xl aspect-[16/10] overflow-hidden rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                fill
                priority
                sizes="90vw"
                className="object-contain"
              />
            </div>

            {/* Bottom Caption in Modal */}
            <div className="absolute bottom-4 inset-x-4 z-50 text-center max-w-3xl mx-auto">
              <p className="text-xs sm:text-sm text-slate-300 bg-black/60 backdrop-blur-md rounded-xl p-3 inline-block">
                {activeLightboxItem.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LandingInfrastructure;

