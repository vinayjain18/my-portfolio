import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
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
    id: "med-ai",
    title: "MedAI: Your AI Health Assistant",
    description:
      "MedAI, an AI-powered health assistant designed to help you understand and manage your health. It has Report analyzer where you can upload your medical reports and receive insights on your health and Health Assistant for any of your queries.",
    icon: "/skills/medical-report.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/vinayjain18/med-ai",
    url: "https://med-ai-doctor.streamlit.app/",
    tags: ["Python", "Groq", "Langchain", "Streamlit"],
    sceenshots: ["/screenshots/rippl.png"],
  },
  {
    id: "content-planner-tool",
    title: "Fluence: Content Planner Tool",
    description:
      "Fluence is an Instagram content planner that helps creators and businesses strategically plan, and generate personalized content based on their industry, niche, and profile details.",
    icon: "/skills/planner.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/vinayjain18/fluence",
    tags: ["Python", "OpenAI", "Django", "Tailwind"],
    sceenshots: ["/screenshots/rippl.png"],
  },
  {
    id: "language-detector",
    title: "Language Detector",
    description:
      "It is a Language Detector web app to predict the language of the text you enter. The languages it can detect are Arabic, Danish, Dutch, English, French, German, Greek, Hindi, Italian, Kannada, Malayalam, Portugeese, Russian, Spanish, Sweedish, Tamil, Turkish",
    icon: "/skills/streamlit.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/vinayjain18/language-detector",
    url: "https://language-detect0r.streamlit.app/",
    tags: ["Streamlit", "Python", "Scikit learn", "ML models"],
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
