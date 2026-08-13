import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/common/Reveal";

const capabilities = [
  {
    title: "RAG & agentic AI",
    detail:
      "Retrieval pipelines over Milvus and ChromaDB, document Q&A, drafting and comparison flows served through FastAPI.",
  },
  {
    title: "Backend architecture",
    detail:
      "Serverless AWS Lambda and EC2 services, Express and Django APIs, MySQL and Postgres schema design.",
  },
  {
    title: "Full-stack product",
    detail:
      "React and Next.js front ends wired to typed APIs, multi-tenant role-based access, payments and auth.",
  },
  {
    title: "Leading delivery",
    detail:
      "Sprint planning for a team of five, client communication, scoping and estimation from first call to release.",
  },
];

const HomeSection2 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      as="section"
      ariaLabel="About Vinay Jain"
      classNames="bg-[var(--dialogColor)] items-center justify-center"
      id={id}
    >
      <ConstraintedBox classNames="px-5 sm:px-8 section__pad">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionTitle index="01" eyebrow="About">
                Tech lead turned founder.
              </SectionTitle>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-10">
            <Reveal className="flex flex-col gap-5">
              <p className="text-lg/8 md:text-xl/9 text-[var(--textColor)] tracking-[-0.011em]">
                I joined GreenFi as a Python and AI engineer, was promoted to
                Senior Software Engineer and then Tech Lead, and a year later
                became founding engineer on the same founder&apos;s second
                product.
              </p>

              <p className="text-base/8 text-[var(--textColorLight)]">
                As Tech Lead I ran a team of five across GreenFi, a climatetech
                ESG platform, and Lejit AI, a legal tech SaaS I architected from
                an empty repository — owning architecture, sprint delivery and
                client communication for both, including taking over the GreenFi
                codebase after the previous vendor left with no knowledge
                transfer. In June 2026 I started WebsiNova Technologies, where I
                take that work directly to clients: RAG-based AI systems,
                agentic workflows and microservice architecture, built across
                React, Next.js, Node.js, FastAPI and Django.
              </p>
            </Reveal>

            <dl className="w-full border-t border-[var(--borderColorStrong)]">
              {capabilities.map((capability, index) => (
                <Reveal key={capability.title} step={index}>
                  <div className="grid grid-cols-1 sm:grid-cols-[1.75rem_11.5rem_1fr] gap-x-4 gap-y-1 border-b border-[var(--borderColor)] py-5">
                    <span className="label text-[var(--primaryColor)] pt-1.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <dt className="text-base/7 font-semibold text-[var(--textColor)]">
                      {capability.title}
                    </dt>
                    <dd className="text-sm/7 text-[var(--textColorLight)]">
                      {capability.detail}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection2;
