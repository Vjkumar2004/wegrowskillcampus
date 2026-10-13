import type { Metadata } from "next";
import Container from "@/components/common/Container";
import PageHero from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: "Terms and Conditions | WeGrow Skill Campus",
  description: "Review the terms for using the WeGrow Skill Campus website and making course enquiries.",
};

const sections = [
  { title: "1. Introduction", text: "Welcome to the WeGrow Skill Campus website. By accessing or using this website, you agree to these Terms and Conditions. If you do not agree, please discontinue use of the website." },
  { title: "2. Website Information", text: "This website provides general information about WeGrow Skill Campus, its programs, learning activities, and contact options. Course details, eligibility, duration, fees, schedules, and availability must be confirmed with the institute before enrolment." },
  { title: "3. Course Enquiries and Enrolment", text: "Submitting an enquiry does not automatically constitute admission or enrolment. Enrolment is subject to applicable program requirements, availability, approved fees, and confirmation by the institute." },
  { title: "4. Fees and Payments", text: "Confirm all fees and payment terms through official institute communications. Applicable taxes, additional charges, refund terms, and payment deadlines should be disclosed before a learner commits to a paid program. Add the official fee, cancellation, and refund policies where applicable." },
  { title: "5. Certificates", text: "Certificates, their issuing authority, and eligibility requirements depend on the relevant program. No certificate should be assumed unless the institute has confirmed it." },
  { title: "6. Career Support and Outcomes", text: "Career guidance, interview preparation, resume assistance, and related support do not guarantee employment, internships, interviews, salaries, or placements. Outcomes depend on individual circumstances and external factors." },
  { title: "7. Acceptable Use", text: "You agree not to use the website for unlawful purposes, attempt unauthorised access to website systems, interfere with website functionality or security, submit false or misleading information, or copy or misuse protected content without permission." },
  { title: "8. Intellectual Property", text: "Website text, logos, graphics, photographs, and other materials may be protected by applicable intellectual property laws. Do not reproduce or commercially use protected materials without necessary authorisation, except where permitted by law." },
  { title: "9. Third-Party Links", text: "The website may include links to external websites for convenience. WeGrow Skill Campus is not responsible for third-party content or practices outside its control." },
  { title: "10. Website Availability", text: "We aim to maintain accurate and accessible website content, but uninterrupted availability cannot be guaranteed. Content may be corrected, updated, or removed when necessary." },
  { title: "11. Limitation of Liability", text: "The website is provided for general informational purposes. Any legal limitations or exclusions must be reviewed and drafted for the institute's actual operations and applicable law." },
  { title: "12. Privacy", text: "Personal information submitted through the website is handled according to the applicable Privacy Policy and relevant legal requirements." },
  { title: "13. Changes to These Terms", text: "We may revise these Terms and Conditions from time to time. Publish updates with the latest revision date." },
  { title: "14. Governing Law", text: "These Terms and Conditions are intended for an institute operating in India. Have jurisdiction-specific provisions reviewed by a qualified legal professional in light of the institute's registered location and circumstances." },
  { title: "15. Contact Information", text: "WeGrow Skill Campus. Address: [INSERT OFFICIAL ADDRESS]. Email: [INSERT OFFICIAL EMAIL ADDRESS]. Phone: [INSERT OFFICIAL PHONE NUMBER]." },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-brand-bg pb-16 sm:pb-20">
      <PageHero
        eyebrow="Website Information"
        title="Terms and Conditions"
        description="Review the terms for using the WeGrow Skill Campus website and making course enquiries."
        image="/difference/industry-training.jpg"
        imageAlt="Learner practicing technical skills on a laptop"
      />
      <Container>
        <div className="w-full">
          <div className="rounded-lg bg-amber-50 border border-amber-200 p-5 mb-8 text-sm text-amber-950 leading-relaxed">
            <strong>Draft for completion:</strong> Contact details, refund terms, and legal provisions need to be confirmed for the institute. Have this page reviewed before treating it as the final terms of use.
          </div>
          <div className="space-y-4">
            {sections.map((section) => <section key={section.title} className="bg-white rounded-lg border border-brand-border p-6 shadow-subtle"><h2 className="text-lg font-bold text-brand-navy mb-2">{section.title}</h2><p className="text-sm text-brand-textSecondary leading-relaxed">{section.text}</p></section>)}
          </div>
        </div>
      </Container>
    </div>
  );
}
