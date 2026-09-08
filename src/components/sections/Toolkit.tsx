import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/common/Reveal";
import skills from "@/data/skills";
import { SkillLevel } from "@/types";
import { cn } from "@/utils/cn";

const Toolkit = () => {
  const groups = skills.filter((group) => !group.nonTechnical);

  return (
    <section
      id="toolkit"
      aria-label="Engineering toolkit"
      className="relative w-full bg-[var(--dialogColor)]"
    >
      <div className="constrained-width section__pad mx-auto w-full px-5 sm:px-8">
        <SectionTitle
          index="05"
          eyebrow="Toolkit"
          lead="What I reach for day to day. A marked entry is one I've shipped production systems with."
        >
          Technologies I work with.
        </SectionTitle>

        <div className="mt-14 w-full border-t border-[var(--borderColorStrong)]">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.title} step={Math.min(groupIndex, 4)}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-5 border-b border-[var(--borderColor)] py-7 sm:grid-cols-[11rem_1fr] md:grid-cols-[14rem_1fr]">
                <div className="flex items-baseline gap-3 sm:flex-col sm:gap-1.5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--textColor)]">
                    {group.title}
                  </h3>
                  <span className="mono text-xs text-[var(--textColorLight)]">
                    {group.items.length} tools
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => {
                    const isProduction = item.level === SkillLevel.Expert;

                    return (
                      <li key={item.title}>
                        <div className="group inline-flex items-center gap-2.5 rounded-lg border border-[var(--borderColor)] bg-[var(--surfaceColor)] py-2 pl-2.5 pr-3.5 shadow-xs transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--borderColorStrong)] hover:shadow-sm">
                          {item.icon ? (
                            <Image
                              src={item.icon}
                              alt=""
                              aria-hidden="true"
                              width={20}
                              height={20}
                              loading="lazy"
                              className={cn(
                                "h-5 w-5 shrink-0 object-contain",
                                item.mono && "logo-mono"
                              )}
                            />
                          ) : null}

                          <span className="text-sm font-medium text-[var(--textColor)]">
                            {item.title}
                          </span>

                          {isProduction ? (
                            <>
                              <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primaryColor)]"
                              />
                              <span className="sr-only">
                                — shipped in production
                              </span>
                            </>
                          ) : null}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
