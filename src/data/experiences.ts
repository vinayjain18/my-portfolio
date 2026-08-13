import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Founder",
    company: "WebsiNova Technologies",
    startDate: "Jun 2026",
    endDate: "",
    isCurrentJob: true,
    location: "Remote, India",
    shortDescription:
      "I run my own development studio, providing full-stack and AI development services to clients.",
    description: [
      "After leading engineering for GreenFi and Lejit AI, I started WebsiNova Technologies to take the same architecture, RAG and AI systems, and full-stack experience directly to clients, from initial scoping and estimation through to delivery.",
      "Alongside client work I build Karyalo, our own contract management platform for law firms, in-house legal teams and business teams.",
    ],
  },
  {
    designation: "Founding Engineer & Tech Lead",
    company: "Lejit AI",
    startDate: "Oct 2025",
    endDate: "May 2026",
    isCurrentJob: false,
    location: "Remote, India",
    concurrentNote: "Ran alongside GreenFi, for the same founder.",
    shortDescription:
      "I joined Lejit AI at day zero as founding engineer and architected the legal tech platform from an empty repository.",
    description: [
      "Lejit AI was the same founder's second product, and I joined at day zero as founding engineer, architecting the platform from an empty repository while continuing to lead GreenFi.",
      "I built separate flows and role-specific access for lawyers, citizens, corporates, law students and law enforcement, RAG-based legal AI features for document Q&A, drafting, case comparison and legal opinions, and a multi-tenant law enforcement module with department hierarchy and role-based access. I integrated Razorpay payments, Twilio OTP authentication, and i18n across 16 languages.",
    ],
  },
  {
    designation: "Tech Lead",
    company: "GreenFi",
    startDate: "Sept 2024",
    endDate: "May 2026",
    isCurrentJob: false,
    location: "Remote, India",
    roles: [
      {
        title: "Python & AI Engineer",
        startDate: "Sept 2024",
        endDate: "Mar 2025",
      },
      {
        title: "Senior Software Engineer",
        startDate: "Apr 2025",
        endDate: "Sept 2025",
      },
      { title: "Tech Lead", startDate: "Oct 2025", endDate: "May 2026" },
    ],
    shortDescription:
      "I joined GreenFi as a Python and AI engineer and was promoted twice, ending as Tech Lead across GreenFi and Lejit AI.",
    description: [
      "I joined GreenFi as a Python and AI engineer, grew into full-stack work, and was promoted to Senior Software Engineer and then Tech Lead, leading a team of five engineers across GreenFi and Lejit AI.",
      "I took over the codebase after the previous vendor left with no knowledge transfer, reverse-engineered the system, and onboarded the team without missing a client deadline.",
      "I maintained and extended a multi-module ESG platform covering carbon emission tracking, ESG ratings, sustainability reporting, media monitoring and regulatory compliance, and built the RAG pipeline for ESG document Q&A using LLMs and Milvus, served through FastAPI across a serverless AWS Lambda and EC2 backend with an Express 5 API and MySQL.",
    ],
  },
  {
    designation: "ML Engineer Intern",
    company: "Intel Corp.",
    startDate: "Jul 2023",
    endDate: "Oct 2023",
    isCurrentJob: false,
    location: "Remote",
    shortDescription:
      "I have worked on developing AI solutions at Intel, including building ML models and processing data.",
    description: [
      "As an ML Engineer Intern I revamped and enhanced more than three ML models using TensorFlow, and deployed them so they integrated cleanly with the surrounding models rather than running in isolation.",
    ],
  },
  {
    designation: "Backend Developer Intern",
    company: "Creative Finserve Pvt Ltd",
    startDate: "Sept 2022",
    endDate: "Jan 2023",
    isCurrentJob: false,
    location: "Remote",
    shortDescription:
      "I had developed backend logic for a CRM system using Django at Creative Finserve Pvt. Ltd.",
    description: [
      "I led development of the company's CRM website and its various portals, writing the backend logic in Django. I designed and implemented the data models, database schemas and URL routing behind it.",
    ],
  },
];

export default experiences;
