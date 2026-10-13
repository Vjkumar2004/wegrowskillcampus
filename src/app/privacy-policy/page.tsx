import type { Metadata } from "next";
import Container from "@/components/common/Container";
import PageHero from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | WeGrow Skill Campus",
  description: "Read how WeGrow Skill Campus may collect and use information submitted through its website.",
};

const sections = [
  { title: "1. Introduction", text: "WeGrow Skill Campus respects the privacy of visitors to its website. This Privacy Policy explains how information submitted through the website and enquiry forms may be collected, used, stored, and protected. Update this policy to reflect the institute's actual practices." },
  { title: "2. Information We Collect", text: "Depending on the features you use, the website may collect your name and contact details, email address and phone number, course interests and enquiry messages, information you provide when contacting us, and technical information from website logs, cookies, or analytics tools where applicable. Please do not submit sensitive personal information through general enquiry forms." },
  { title: "3. How We Use Information", text: "Information may be used to respond to course and admissions enquiries, provide program or enrolment information, send relevant updates where authorised, operate and improve the website, protect against misuse, and meet applicable obligations. Confirm these uses against your actual operations." },
  { title: "4. Sharing of Information", text: "Describe here which authorised service providers or other parties can access enquiry information, why they receive it, and the safeguards used. Replace this section with an accurate description of actual data-sharing practices before publishing." },
  { title: "5. Data Security", text: "Describe the security measures actually used to protect personal information. Avoid promising that any internet transmission or storage system is completely secure." },
  { title: "6. Data Retention", text: "State how long personal information is kept, what determines the retention period, and how deletion requests are handled. Insert the institute's actual retention practices and deletion procedures." },
  { title: "7. Cookies and Analytics", text: "List the cookies, analytics tools, consent controls, and third-party services actually used by the website. Remove any tools or practices that do not apply." },
  { title: "8. Your Privacy Rights", text: "Depending on applicable law, visitors may have rights relating to access, correction, deletion, consent, or other handling of personal information. Provide a monitored privacy contact for requests: [INSERT PRIVACY CONTACT EMAIL]." },
  { title: "9. Third-Party Websites", text: "The website may link to third-party websites or services. Their privacy practices are governed by their own policies." },
  { title: "10. Children's Privacy", text: "Describe how the institute handles information from children and any authorisation or safeguards used. Do not collect children's information without appropriate authorisation or safeguards where required." },
  { title: "11. Changes to This Policy", text: "When this policy or the institute's practices change, publish the updated version with its revision date." },
  { title: "12. Contact Us", text: "WeGrow Skill Campus. Address: [INSERT REGISTERED OR OFFICIAL ADDRESS]. Email: [INSERT PRIVACY CONTACT EMAIL]. Phone: [INSERT OFFICIAL PHONE NUMBER]." },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-brand-bg pb-16 sm:pb-20">
      <PageHero
        eyebrow="Your Information"
        title="Privacy Policy"
        description="Learn how information submitted through the WeGrow Skill Campus website may be collected and handled."
        image="/ecosystem/skill-campus.jpg"
        imageAlt="Learners using a laptop in a campus setting"
      />
      <Container>
        <div className="w-full">
          <div className="rounded-lg bg-amber-50 border border-amber-200 p-5 mb-8 text-sm text-amber-950 leading-relaxed">
            <strong>Draft for completion:</strong> This page contains example wording and fields that require the institute&apos;s verified contact details and actual data practices. Complete and review it before relying on it as the campus privacy policy.
          </div>
          <div className="space-y-4">
            {sections.map((section) => <section key={section.title} className="bg-white rounded-lg border border-brand-border p-6 shadow-subtle"><h2 className="text-lg font-bold text-brand-navy mb-2">{section.title}</h2><p className="text-sm text-brand-textSecondary leading-relaxed">{section.text}</p></section>)}
          </div>
        </div>
      </Container>
    </div>
  );
}
