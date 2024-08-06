import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "content-planner-tool",
    title: "Fluence: Content Planner Tool",
    description:
      "Fluence is an Instagram content planner that helps creators and businesses strategically plan, and generate personalized content based on their industry, niche, and profile details.",
    icon: "/skills/planner.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/vinayjain18/fluence",
    url: "https://fluence.azurewebsites.net/",
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
  {
    id: "synopsia-healthcare-website",
    title: "Synopsia: AI healthcare website",
    description:
      "This AI healthcare website is a web-based application designed to assist patients in predicting their disease based on their symptoms, recommending appropriate drugs, and booking appointments with doctors.",
    icon: "/skills/django.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/vinayjain18/Synopsia",
    url: "https://github.com/vinayjain18/Synopsia",
    tags: ["Python", "Bootstrap", "Django", "Scikit learn"],
  },
  {
    id: "sentiment-analyzer",
    title: "Sentiment Analyzer",
    description:
      "This app is an Review Sentiment Analysis and a LLM-powered chatbot for Amazon Product related queries.",
    icon: "/skills/huggingface.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/vinayjain18/amazon-chat",
    tags: ["HuggingFace", "Streamlit", "NLTK", "LLM"],
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
