"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  ZoomIn,
  Images,
  Sparkles,
} from "lucide-react";
import {
  EVENTS_DATA,
  EVENT_CATEGORIES,
  EventItem,
  EventPhoto,
} from "@/data/eventsData";

function resolveUrl(path: string): string {
  const cdnEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/Deepak2004";
  return `${cdnEndpoint.replace(/\/$/, "")}${path}`;
}

export default function EventGalleryShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedEvents, setExpandedEvents] = useState<Record<string, boolean>>({});
  const [lightboxState, setLightboxState] = useState<{
    event: EventItem;
    photoIndex: number;
  } | null>(null);

  const toggleExpand = (eventId: string) => {
    setExpandedEvents((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  };

  // Filter events based on active category tab
  const filteredEvents =
    selectedCategory === "All"
      ? EVENTS_DATA
      : EVENTS_DATA.filter((e) => e.category === selectedCategory);

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!lightboxState) return;

      if (e.key === "Escape") {
        setLightboxState(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxState((prev) => {
          if (!prev) return null;
          const nextIdx =
            (prev.photoIndex - 1 + prev.event.photos.length) %
            prev.event.photos.length;
          return { ...prev, photoIndex: nextIdx };
        });
      } else if (e.key === "ArrowRight") {
        setLightboxState((prev) => {
          if (!prev) return null;
          const nextIdx = (prev.photoIndex + 1) % prev.event.photos.length;
          return { ...prev, photoIndex: nextIdx };
        });
      }
    },
    [lightboxState]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (lightboxState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, lightboxState]);

  return (
    <section className="py-12 sm:py-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-brand-navy text-xs sm:text-sm font-semibold mb-4">
          <Sparkles className="w-4 h-4 text-brand-orange" />
          <span>Campus Photo Archives</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
          Life & Milestones at WeGrow
        </h2>
        <p className="mt-3 text-base sm:text-lg text-brand-textSecondary leading-relaxed">
          Explore photographic glimpses from conferences, festivals, recruitment drives,
          leadership conclaves, and hands-on workshops across our campus.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start md:justify-center">
        {EVENT_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          const count =
            cat === "All"
              ? EVENTS_DATA.reduce((acc, ev) => acc + ev.photoCount, 0)
              : EVENTS_DATA.find((ev) => ev.category === cat)?.photoCount ?? 0;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                isActive
                  ? "bg-brand-navy text-white shadow-md shadow-brand-navy/20 scale-[1.02]"
                  : "bg-white text-brand-textSecondary hover:text-brand-navy hover:bg-gray-100 border border-brand-border"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isActive
                    ? "bg-brand-orange text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Events Sections */}
      <div className="space-y-12 sm:space-y-16">
        {filteredEvents.map((event) => {
          const isExpanded = !!expandedEvents[event.id];
          const hasMoreThan4 = event.photos.length > 4;
          const displayPhotos = isExpanded ? event.photos : event.photos.slice(0, 4);
          const remainingCount = event.photos.length - 4;

          return (
            <div
              key={event.id}
              id={event.slug}
              className="rounded-3xl border border-brand-border bg-white p-6 sm:p-8 shadow-card transition-all"
            >
              {/* Event Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-gray-100">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                      {event.category}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="inline-flex items-center gap-1 text-xs text-brand-textSecondary font-medium">
                      <Images className="w-3.5 h-3.5" />
                      {event.photoCount} photos
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-brand-textSecondary max-w-3xl">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Photo Grid (First 4 photos, or All when expanded) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {displayPhotos.map((photo: EventPhoto, pIdx: number) => {
                  const isFourthAndCollapsed = !isExpanded && hasMoreThan4 && pIdx === 3;

                  return (
                    <div
                      key={photo.id}
                      onClick={() =>
                        setLightboxState({
                          event,
                          photoIndex: pIdx,
                        })
                      }
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/60 cursor-pointer shadow-subtle hover:shadow-card transition-all duration-300"
                    >
                      <Image
                        src={resolveUrl(photo.thumb)}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        loading="lazy"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      {/* Case A: The 4th Photo with "+X More Photos" Overlay Badge */}
                      {isFourthAndCollapsed ? (
                        <div className="absolute inset-0 bg-brand-navy/80 backdrop-blur-[2px] transition-all group-hover:bg-brand-navy/90 flex flex-col items-center justify-center p-3 text-center">
                          <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            +{remainingCount}
                          </span>
                          <span className="mt-1 text-xs sm:text-sm font-bold text-brand-orange uppercase tracking-wider">
                            More Photos
                          </span>
                          <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-white/90 bg-white/15 px-2.5 py-1 rounded-full border border-white/20">
                            <ZoomIn className="w-3 h-3" />
                            View Gallery
                          </span>
                        </div>
                      ) : (
                        /* Case B: Standard Hover Gradient & Zoom Tag */
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                          <span className="text-white text-xs font-medium">
                            Photo {pIdx + 1}
                          </span>
                          <div className="p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                            <ZoomIn className="w-4 h-4" />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* "View All X Photos" / "Show Fewer Photos" Toggle Button */}
              {hasMoreThan4 && (
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => toggleExpand(event.id)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-border bg-brand-bg hover:bg-brand-navy hover:text-white hover:border-brand-navy text-brand-navy font-semibold text-xs sm:text-sm transition-all duration-200 shadow-subtle group"
                  >
                    {isExpanded ? (
                      <>
                        <span>Show Fewer Photos</span>
                        <ChevronUp className="w-4 h-4 text-brand-orange group-hover:text-white transition-colors" />
                      </>
                    ) : (
                      <>
                        <span>View All {event.photoCount} Photos</span>
                        <ChevronDown className="w-4 h-4 text-brand-orange group-hover:text-white transition-colors" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Full-Screen Interactive Lightbox Slider */}
      {lightboxState && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 select-none animate-fadeIn"
          onClick={() => setLightboxState(null)}
        >
          {/* Top Bar: Event Title, Counter & Close Button */}
          <div
            className="flex items-center justify-between text-white px-2 sm:px-6 py-3 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs uppercase tracking-wider text-brand-orange font-bold">
                {lightboxState.event.category}
              </span>
              <h4 className="text-sm sm:text-base font-semibold text-white truncate max-w-xs sm:max-w-md">
                {lightboxState.event.title}
              </h4>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-sm font-medium bg-white/10 px-3 py-1 rounded-full text-white/90">
                {lightboxState.photoIndex + 1} /{" "}
                {lightboxState.event.photos.length}
              </span>
              <button
                onClick={() => setLightboxState(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Stage: Photo with Prev/Next Navigation */}
          <div
            className="relative flex-1 flex items-center justify-center my-3 max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            {lightboxState.event.photos.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxState((prev) => {
                    if (!prev) return null;
                    const nextIdx =
                      (prev.photoIndex - 1 + prev.event.photos.length) %
                      prev.event.photos.length;
                    return { ...prev, photoIndex: nextIdx };
                  });
                }}
                className="absolute left-2 sm:left-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-105"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            )}

            {/* High-Resolution Image Container */}
            <div className="relative w-full h-[70vh] sm:h-[78vh] flex items-center justify-center">
              <Image
                src={resolveUrl(
                  lightboxState.event.photos[lightboxState.photoIndex].full
                )}
                alt={lightboxState.event.photos[lightboxState.photoIndex].alt}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Next Button */}
            {lightboxState.event.photos.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxState((prev) => {
                    if (!prev) return null;
                    const nextIdx =
                      (prev.photoIndex + 1) % prev.event.photos.length;
                    return { ...prev, photoIndex: nextIdx };
                  });
                }}
                className="absolute right-2 sm:right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-105"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            )}
          </div>

          {/* Bottom Bar: Instructions */}
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
