import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "karyalo",
    featured: true,
    summary:
      "AI-enabled contract platform, covering the whole loop from first draft to signature — drafting from your own precedents, checking every clause against your playbook, sending, and signing.",
    title: "Karyalo: Contract Management Platform",
    description:
      "AI-enabled contract platform, covering the whole loop from first draft to signature. It drafts from a team's own precedents, clause library and approved workflows, grades every clause against their negotiating playbook with the redline already written, then sends the contract out on a single revocable link and collects signatures bound to the exact version reviewed. Built for law firms, in-house legal teams and business teams.",
    icon: "/skills/karyalo.svg",
    monoIcon: true,
    repoType: RepoType.Private,
    projectType: ProjectType.Product,
    url: "https://karyalo.in/",
    tags: [
      "Contract AI",
      "Clause playbooks",
      "E-signature",
      "Document workflows",
    ],
    highlights: [
      "Draft — from your own precedents, approved wording and clause library",
      "Check — every clause graded against your playbook, redline written",
      "Send — one revocable link, no account needed at the other end",
      "Sign — bound to the exact version reviewed, executed PDF to everyone",
    ],
  },
  {
    id: "voice-agent",
    featured: true,
    title: "AI Voice Agents",
    description:
      "A low-latency voice agent that answers a phone call, holds a real conversation about your business, and books a callback. The same code runs in a terminal, a browser, on a real phone number and on WhatsApp. Built on LiveKit Agents with Deepgram, Groq and Rumik, and swappable at every provider.",
    summary:
      "A low-latency voice agent that answers a call, holds a real conversation about the business, and books a callback. The same code runs in a terminal, a browser, on a phone number and on WhatsApp.",
    icon: "/skills/chatbot.svg",
    monoIcon: true,
    repoType: RepoType.Public,
    projectType: ProjectType.Product,
    githubUrl: "https://github.com/vinayjain18/voice-agent",
    tags: ["Python", "LiveKit", "Deepgram", "Groq", "FastAPI"],
  },
  {
    id: "greenfi",
    featured: true,
    summary:
      "A multi-module ESG platform covering carbon emission tracking, ESG ratings, sustainability reporting, media monitoring and regulatory compliance. I built the RAG pipeline for ESG document Q&A.",
    title: "GreenFi: Climatetech & ESG Platform",
    description:
      "A multi-module ESG platform covering carbon emission tracking, ESG ratings for infrastructure projects, sustainability reporting, media monitoring, and regulatory compliance. As Tech Lead, I built the RAG pipeline for ESG document Q&A using LLMs and Milvus, served through FastAPI, across a serverless AWS Lambda and EC2 backend with an Express 5 API and MySQL.",
    icon: "/skills/fastapi.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.JobWork,
    url: "https://greenfi.ai",
    tags: ["FastAPI", "AWS Lambda", "Milvus", "LLMs", "MySQL"],
  },
  {
    id: "lejit-ai",
    featured: true,
    summary:
      "A legal tech SaaS platform I architected from an empty repository, with role-specific flows for lawyers, citizens, corporates, law students and law enforcement, and RAG-based legal AI throughout.",
    title: "Lejit AI: Legal Tech SaaS Platform",
    description:
      "A legal tech SaaS platform I architected from scratch, with separate flows and role-specific access for lawyers, citizens, corporates, law students, and law enforcement. Built RAG-based legal AI features including document Q&A, drafting, case comparison, and legal opinion generation, plus a multi-tenant law enforcement module with department hierarchy and role-based access.",
    icon: "/skills/chatbot-1.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.JobWork,
    url: "https://lejit.ai",
    tags: ["RAG", "LLMs", "Milvus", "Razorpay", "Twilio"],
  },
  {
    id: "finsight",
    title: "FinSight: Bank Statement Analyzer",
    description:
      "FinSight takes bank statement PDFs, extracts transactions using AI, categorizes expenses, and shows spending insights through interactive charts. Analyzed data can be downloaded as CSV or PDF, no signup is needed, and no data is stored on the server.",
    icon: "/skills/medical-report.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://financial-statement-analyzer-three.vercel.app/",
    tags: ["Next JS", "FastAPI", "OpenAI"],
  },
  {
    id: "supermarket-sales-analysis",
    title: "Supermarket Sales Analysis",
    description:
      "The goal of this project is to perform data analytics on Supermarket sales data using various tools and technologies.",
    icon: "/skills/gcp.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/vinayjain18/supermarket-sales-dataengineering-project",
    url: "https://lookerstudio.google.com/reporting/31aad5f0-6dd1-4836-aee0-e492e3aff3ea",
    tags: ["Python", "Looker", "Mage AI", "BigQuery", "GCP"],
  },
  {
    id: "document-qa-system",
    title: "Document QA System - RAG",
    description:
      "Document Q&A System, is designed to process PDF documents and provide concise answers to user queries based on the content of uploaded documents. It leverages advanced language models and document processing techniques to deliver accurate and contextually relevant responses.",
    icon: "/skills/question-and-answer.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/vinayjain18/document-qa-system",
    url: "https://document-app-system.streamlit.app/",
    tags: ["Python", "OpenAI", "Langchain", "Streamlit", "ChromaDB"],
  },
  {
    id: "desihelper",
    title: "DesiHelper: Your Indian Services Hub in the US",
    description:
      "DesiHelper is a comprehensive marketplace platform that allows service providers to create business listings, manage their services, and connect with customers.",
    icon: "/skills/marketplace.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Freelance,
    url: "https://desihelper.io/",
    tags: ["Next JS", "TypeScript", "Python", "FastAPI", "Supabase"],
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
