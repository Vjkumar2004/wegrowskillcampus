import type { Metadata } from "next";
import { PAGE_SEO } from "@/constants/seo";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import PageHero from "@/components/common/PageHero";

export const metadata: Metadata = {
  title: PAGE_SEO.faqs?.title ?? "Frequently Asked Questions | WeGrow Skill Campus",
  description: PAGE_SEO.faqs?.description ?? "Find answers about courses, eligibility, duration, fees, certificates, career support, and admissions.",
};

const groups = [
  {
    title: "Course Information",
    items: [
      ["What courses are available at WeGrow Skill Campus?", "We offer the programs listed in our Courses section. Explore the available options to understand their subjects, learning outcomes, and requirements."],
      ["How do I choose the right course?", "Consider your interests, existing knowledge, career goals, and preferred learning approach. Contact our team if you need help comparing available programs."],
      ["Are the courses suitable for beginners?", "Eligibility depends on the individual program. Review the course prerequisites or contact us to confirm whether a program is appropriate for your experience level."],
      ["Can students and working professionals enrol?", "Eligibility varies by course. Check the requirements for your preferred program before applying."],
    ],
  },
  {
    title: "Duration and Learning Mode",
    items: [
      ["What is the duration of each course?", "Course duration varies by program. Refer to the individual course page or contact our team for confirmed details."],
      ["Are courses available online or offline?", "Available learning modes depend on the specific program and batch. Contact us to confirm current options."],
      ["Are practical assignments or projects included?", "Practical learning components depend on the course curriculum. Check the individual course page for details about assignments, projects, and demonstrations."],
    ],
  },
  {
    title: "Fees and Enrolment",
    items: [
      ["What are the course fees?", "Fees vary by program. Contact our team for current pricing, payment terms, and any applicable additional charges."],
      ["How can I enrol?", "Submit an enquiry through our website or contact our team. We can explain the available programs, eligibility requirements, and enrolment steps."],
      ["When do new batches begin?", "Batch schedules depend on the program. Contact us for the latest confirmed schedule."],
    ],
  },
  {
    title: "Certificates and Career Support",
    items: [
      ["Will I receive a certificate after completing a course?", "Certificate availability, issuing authority, and completion requirements depend on the specific program. Please confirm the details before enrolling."],
      ["Does WeGrow Skill Campus provide placement support?", "Career support may include resume guidance, interview preparation, professional development, and job-search guidance, depending on the services available for your program. Ask our team to confirm the current support offered."],
      ["Is a job guaranteed after completing a course?", "Course completion does not automatically guarantee employment or placement. Outcomes depend on individual skills, qualifications, experience, employer requirements, and market conditions."],
      ["Can I use my projects in my portfolio?", "You may be able to showcase eligible projects, subject to project ownership, confidentiality, institutional guidelines, and applicable permissions."],
    ],
  },
  {
    title: "Global Exposure",
    items: [
      ["What does Global Exposure mean?", "Global Exposure focuses on developing awareness of international industry trends, professional practices, technologies, and opportunities. Specific activities depend on the initiatives officially available."],
      ["Are international internships or overseas programs available?", "Availability must be confirmed for each opportunity. Contact our team for information about any currently verified international initiatives."],
    ],
  },
  {
    title: "Contact and Support",
    items: [
      ["How can I contact WeGrow Skill Campus?", "Use the Contact page to find campus contact details and send an enquiry."],
      ["Can I visit a campus before enrolling?", "Contact the campus to confirm visiting hours and whether an appointment is required."],
      ["Where can I find upcoming events?", "Visit our Events page or contact us for confirmed workshops, seminars, campus activities, and registration information."],
      ["How can I get more information about a course?", "Select your preferred course and submit an enquiry. Include your questions about eligibility, fees, duration, curriculum, or learning mode so our team can respond."],
    ],
  },
];

export default function FAQsPage() {
  return (
    <div className="bg-brand-bg pb-16 sm:pb-20">
      <PageHero
        eyebrow="Help and Information"
        title="Frequently Asked Questions"
        description="Find clear answers about courses, eligibility, duration, fees, certificates, career support, and admissions."
        image="/skillcampus-hero.png"
        imageAlt="Learners collaborating as they study"
        imagePosition="object-center"
      />
      <Container>
        <div className="w-full">
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-brand-textSecondary">Find answers to common questions about WeGrow Skill Campus, our programs, and the learning process.</p>
          <div className="space-y-10">
            {groups.map((group) => (
              <section key={group.title}>
                <h2 className="mb-4 border-b border-brand-border pb-3 text-2xl font-extrabold text-brand-navy"><span className="mr-3 inline-block h-6 w-1.5 rounded-full bg-brand-orange align-middle" aria-hidden="true" />{group.title}</h2>
                <div className="space-y-3">
                  {group.items.map(([question, answer]) => (
                    <details key={question} className="group rounded-2xl border border-brand-border bg-white p-5 shadow-subtle transition open:border-brand-orange/40 open:shadow-card sm:p-6">
                      <summary className="cursor-pointer list-none font-semibold text-brand-navy flex items-center justify-between gap-4">{question}<span className="text-brand-orange text-xl leading-none group-open:rotate-45 transition-transform" aria-hidden="true">+</span></summary>
                      <p className="mt-4 text-sm text-brand-textSecondary leading-relaxed">{answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div className="relative mt-12 overflow-hidden rounded-[26px] border border-brand-border bg-white p-7 text-center shadow-card sm:p-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-amber-300" aria-hidden="true" />
            <h2 className="text-xl font-bold text-brand-navy mb-2">Still have a question?</h2>
            <p className="text-brand-textSecondary mb-5">Contact our team for confirmed course and campus information.</p>
            <Button href="/contact" variant="primary">Contact Us</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
