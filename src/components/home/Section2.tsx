import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import SectionTitle from "@/components/common/SectionTitle";

const capabilities = [
  "Full-Stack Development",
  "Backend Architecture",
  "AI/RAG Systems",
  "Chatbot Development",
  "AI Consultancy",
];

const HomeSection2 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
      id={id}
    >
      <ConstraintedBox classNames="p-4 py-16 z-20">
        <SectionTitle>About</SectionTitle>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-base/7 md:text-lg/8 text-[var(--textColor)]">
            I&apos;m Vinay Jain, a Tech Lead turned founder. I started as a Python
            developer, grew into full-stack development, and spent two years leading
            a team of 5 engineers across a climatetech ESG platform and a legal tech
            SaaS, owning architecture, sprint delivery, and client communication for
            both. In June 2026 I started WebsiNova Technologies, where I now provide
            full-stack and AI development services to clients directly. My focus is
            RAG-based AI systems, microservice architecture, and full-stack
            development with React, Node.js, and FastAPI.
          </p>
        </div>

        <Row classNames="flex-wrap justify-center gap-3 mt-10">
          {capabilities.map((capability) => (
            <span
              key={capability}
              className="rounded-full border border-[var(--primaryColor50)] text-[var(--primaryColor)] px-4 py-2 text-sm/6 font-medium"
            >
              {capability}
            </span>
          ))}
        </Row>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection2;
