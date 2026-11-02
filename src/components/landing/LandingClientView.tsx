"use client";

import React, { useState } from "react";
import LandingHero from "./LandingHero";
import LandingStats from "./LandingStats";
import LandingEnquiryForm from "./LandingEnquiryForm";
import LandingCourses from "./LandingCourses";
import LandingWhyChoose from "./LandingWhyChoose";
import LandingInfrastructure from "./LandingInfrastructure";
import LandingPlacements from "./LandingPlacements";
import LandingCampuses from "./LandingCampuses";
import LandingFAQ from "./LandingFAQ";
import LandingStickyCTA from "./LandingStickyCTA";

export default function LandingClientView() {
  const [selectedCourseId, setSelectedCourseId] = useState<string>("ai-java-fullstack");

  const scrollToEnquiry = (courseId?: string) => {
    if (courseId) {
      setSelectedCourseId(courseId);
    }
    const elem = document.getElementById("enquiry-form-section");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-poppins selection:bg-brand-orange selection:text-white">
      {/* 1. Banner (Hero Section) */}
      <LandingHero onEnquireClick={scrollToEnquiry} />

      {/* 2. After Banner: Stats Bar (Total Course, Total Student, Placement Count) */}
      <LandingStats />

      {/* 3. Lead Generation Enquiry Form */}
      <LandingEnquiryForm
        selectedCourseId={selectedCourseId}
        onCourseSelect={(course) => setSelectedCourseId(course)}
      />

      {/* 4. Course Details: 6 Flagship Courses */}
      <LandingCourses onSelectCourse={scrollToEnquiry} />

      {/* 5. Why Choose WeGrow Skill Campus */}
      <LandingWhyChoose />

      {/* 6. Company Infrastructure (13 Uploaded Images Gallery) */}
      <LandingInfrastructure />

      {/* 7. Placements & Student Success Stories */}
      <LandingPlacements />

      {/* 8. Campuses in Sivakasi, Sattur & Srivilliputtur */}
      <LandingCampuses />

      {/* 9. FAQs */}
      <LandingFAQ />

      {/* 10. Sticky Mobile CTA Bar */}
      <LandingStickyCTA onEnquireClick={() => scrollToEnquiry()} />
    </div>
  );
}

