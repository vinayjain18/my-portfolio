import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/common/Reveal";
import ParallaxImage from "@/components/visuals/ParallaxImage";

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

const About = () => {
  return (
    <section
      id="about"
      aria-label="About Vinay Jain"
      className="relative w-full bg-[var(--dialogColor)]"
    >
      <div className="constrained-width section__pad mx-auto w-full px-5 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionTitle index="01" eyebrow="About">
              A software engineer turned founder.
            </SectionTitle>

            <Reveal className="mt-8 flex flex-col gap-5">
              <p className="measure text-lg/8 text-[var(--textColor)] md:text-xl/9">
                I joined GreenFi as a Python and AI engineer, was promoted to
                Senior Software Engineer and then Tech Lead, and a year later
                became founding engineer on the same founder&apos;s second
                product.
              </p>

              <p className="measure text-base/8 text-[var(--textColorLight)]">
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
          </div>

          <Reveal className="lg:col-span-5" step={1}>
            <ParallaxImage
              src="/vinay-jain-profile-photo.jpeg"
              alt="Vinay Jain, software engineer and founder of WebsiNova Technologies"
              sizes="(min-width: 1024px) 26rem, (min-width: 640px) 60vw, 88vw"
              className="aspect-[4/5] w-full lg:sticky lg:top-28"
            />
          </Reveal>
        </div>

        <dl className="mt-16 w-full border-t border-[var(--borderColorStrong)]">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} step={index}>
              <div className="grid grid-cols-1 gap-x-4 gap-y-1 border-b border-[var(--borderColor)] py-5 sm:grid-cols-[1.75rem_11.5rem_1fr]">
                <span className="label pt-1.5 text-[var(--primaryColor)]">
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
    </section>
  );
};

export default About;
