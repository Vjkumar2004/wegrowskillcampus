import type { Metadata } from "next";
import LandingClientView from "@/components/landing/LandingClientView";

export const metadata: Metadata = {
  title: "Admissions 2026 | IT Courses & 100% Placement Support | WeGrow Skill Campus",
  description:
    "Launch your tech career with WeGrow Skill Campus. 6 flagship courses in Java Full Stack, Python Full Stack, MERN, Data Analytics, Data Science & Cyber Security. Smart AC classrooms in Sivakasi, Sattur, and Srivilliputtur with 100% placement support.",
  keywords: [
    "WeGrow Skill Campus",
    "IT courses Sivakasi",
    "Python Full Stack course Srivilliputtur",
    "Java Full Stack course Sattur",
    "Data Analytics institute Sivakasi",
    "Cyber Security training Tamil Nadu",
    "Placement training Virudhunagar",
    "Software training institute Sivakasi",
  ],
  openGraph: {
    title: "Launch Your High-Paying Tech Career | WeGrow Skill Campus",
    description:
      "Join our job-oriented tech programs in Sivakasi, Sattur, and Srivilliputtur. 1,250+ placements, hands-on labs, and expert mentorship.",
    url: "/landing",
    images: [
      {
        url: "/images/infrastructure/campus-reception.jpg",
        width: 1200,
        height: 630,
        alt: "WeGrow Skill Campus Grand Reception",
      },
    ],
  },
};

export default function LandingPage() {
  return <LandingClientView />;
}
