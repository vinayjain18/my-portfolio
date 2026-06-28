import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "greenfi",
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
    sceenshots: ["/screenshots/rippl.png"],
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
    sceenshots: ["/screenshots/rippl.png"],
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
    sceenshots: ["/screenshots/rippl.png"],
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
