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
    description:
      "After leading engineering for GreenFi and Lejit AI, I started WebsiNova Technologies to bring the same architecture, RAG and AI systems, and full-stack experience directly to clients, from initial scoping and estimation through to delivery.",
  },
  {
    designation: "Tech Lead",
    company: "GreenFi & Lejit AI",
    startDate: "Jun 2024",
    endDate: "May 2026",
    isCurrentJob: false,
    location: "Remote, India",
    shortDescription:
      "I led a team of 5 developers across two products, a climatetech ESG platform and a legal tech SaaS, owning architecture, sprint delivery, and client communication for both.",
    description:
      "I started as a Python developer on GreenFi, grew into a full-stack role, and became Tech Lead managing both GreenFi and Lejit AI for the same founder. I took over both codebases after the previous vendor left with no knowledge transfer, reverse-engineered the systems, and onboarded the team without missing client deadlines. On GreenFi, I maintained and extended a multi-module ESG platform covering carbon emission tracking, ESG ratings, sustainability reporting, media monitoring, and regulatory compliance, and built the RAG pipeline for ESG document Q&A using LLMs and Milvus, served through FastAPI, across a serverless AWS Lambda and EC2 backend with an Express 5 API and MySQL. On Lejit AI, I architected a legal tech SaaS from scratch with separate flows for lawyers, citizens, corporates, law students, and law enforcement, built RAG-based legal AI features for document Q&A, drafting, case comparison, and legal opinions, designed a multi-tenant law enforcement module with department hierarchy and role-based access, and integrated Razorpay payments, Twilio OTP authentication, and i18n support for 16 languages.",
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
    description:
      "As a ML Engineer Intern, I had the invaluable opportunity to make a significant impact by revamping and enhancing more than three ML models using Tensorflow, showcasing my expertise in the field of machine learning and AI. I played a pivotal role in the development process by deploying these models, enabling seamless integration with other models, thereby enhancing the overall functionality of these models.",
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
    description:
      "During my tenure as a Backend Developer Intern, I had the privilege of spearheading the development of the company's CRM website and various portals. I had developed backend logic for a CRM system using Django. I have also designed and implemented data models, database schemas, and handled URL routes, ensuring robust backend infrastructure.",
  },
];

export default experiences;
