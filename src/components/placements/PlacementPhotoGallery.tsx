"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, ZoomIn, Briefcase, ArrowUpRight } from "lucide-react";
import { EVENTS_DATA } from "@/data/eventsData";

const placementEvent = EVENTS_DATA.find((e) => e.id === "placement-drives");
const placementPhotos = placementEvent ? placementEvent.photos : [];

function resolveUrl(path: string): string {
  const cdnEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/Deepak2004";
  return `${cdnEndpoint.replace(/\/$/, "")}${path}`;
}

export default function PlacementPhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + placementPhotos.length) % placementPhotos.length : null
        );
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % placementPhotos.length : null
        );
      }
    },
    [selectedIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, selectedIndex]);

  if (!placementPhotos.length) return null;

  return (
    <section className="mb-14">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-brand-border">
        <div>
          <div className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.16em] text-brand-orange mb-1">
            <Briefcase className="w-4 h-4" />
            <span>Campus Recruitment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
            Placement Drives in Action
          </h2>
          <p className="mt-1 text-sm sm:text-base text-brand-textSecondary max-w-2xl">
            Moments from recent on-campus placement drives, student interview sessions, and corporate recruiter interactions.
          </p>
        </div>

        <Link
          href="/events#placement-drives"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors self-start sm:self-auto"
        >
          <span>View All Events</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* 5-Photo Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {placementPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-brand-border cursor-pointer shadow-subtle hover:shadow-card transition-all duration-300"
          >
            <Image
              src={resolveUrl(photo.thumb)}
              alt={photo.alt || `Placement drive photo ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              loading="lazy"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-brand-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
              <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white scale-90 group-hover:scale-100 transition-transform">
                <ZoomIn className="w-5 h-5" />
              </div>
            </div>

            {/* Photo counter tag */}
            <div className="absolute bottom-2 left-2 text-[11px] font-medium text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md">
              Photo {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Lightbox */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 select-none animate-fadeIn"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between text-white px-2 sm:px-6 py-3 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs uppercase tracking-wider text-brand-orange font-bold">
                Campus Placements
              </span>
              <h4 className="text-sm sm:text-base font-semibold text-white">
                Campus Placement & Corporate Recruitment Drive
              </h4>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-sm font-medium bg-white/10 px-3 py-1 rounded-full text-white/90">
                {selectedIndex + 1} / {placementPhotos.length}
              </span>
              <button
                onClick={() => setSelectedIndex(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Stage */}
          <div
            className="relative flex-1 flex items-center justify-center my-3 max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {placementPhotos.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(
                    (selectedIndex - 1 + placementPhotos.length) % placementPhotos.length
                  );
                }}
                className="absolute left-2 sm:left-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-105"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            )}

            <div className="relative w-full h-[70vh] sm:h-[78vh] flex items-center justify-center">
              <Image
                src={resolveUrl(placementPhotos[selectedIndex].full)}
                alt={placementPhotos[selectedIndex].alt}
                fill
                priority
                className="object-contain"
              />
            </div>

            {placementPhotos.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((selectedIndex + 1) % placementPhotos.length);
                }}
                className="absolute right-2 sm:right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-105"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            )}
          </div>

          {/* Bottom Instructions */}
          <div
            className="text-center text-white/50 text-xs py-2"
            onClick={(e) => e.stopPropagation()}
          >
            Use <kbd className="px-1.5 py-0.5 bg-white/10 rounded">←</kbd> and{" "}
            <kbd className="px-1.5 py-0.5 bg-white/10 rounded">→</kbd> to navigate,{" "}
            <kbd className="px-1.5 py-0.5 bg-white/10 rounded">ESC</kbd> to close
          </div>
        </div>
      )}
    </section>
  );
}

