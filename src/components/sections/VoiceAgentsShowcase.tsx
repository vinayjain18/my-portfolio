import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faBellConcierge,
  faBullhorn,
  faRotateRight,
  faCalendarCheck,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/common/Reveal";
import PhoneVisual from "@/components/visuals/PhoneVisual";
import {
  voiceAgentUseCases,
  voiceAgentCapabilities,
  voiceAgentSurfaces,
  voiceAgentStack,
} from "@/data/building";

const useCaseIcons: IconDefinition[] = [
  faPhoneVolume,
  faBellConcierge,
  faBullhorn,
  faRotateRight,
  faCalendarCheck,
];

const VoiceAgentsShowcase = () => {
  return (
    <section
      id="voice-agents"
      aria-label="AI voice agents"
      className="relative w-full overflow-hidden bg-[var(--bgColor)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[12rem] top-[8rem] h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--primaryColor20), transparent 65%)",
        }}
      />

      <div className="constrained-width section__pad relative z-raised mx-auto w-full px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionTitle index="04" eyebrow="AI voice agents">
              More conversations. Less manual work.
            </SectionTitle>

            <p className="measure mt-6 text-base/8 text-[var(--textColorLight)]">
              A low-latency voice agent that answers a call, holds a real
              conversation about the business, and books a callback. The same
              code runs four ways with no changes — a terminal, a browser, a
              real phone number, and WhatsApp.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {voiceAgentUseCases.map((useCase, index) => (
                <Reveal key={useCase.title} step={index}>
                  <li className="group inline-flex items-center gap-2.5 rounded-full border border-[var(--borderColor)] bg-[var(--surfaceColor)] py-2 pl-3 pr-4 shadow-xs transition-colors duration-200 ease-out hover:border-[var(--borderColorStrong)]">
                    <FontAwesomeIcon
                      icon={useCaseIcons[index]}
                      className="h-3.5 w-3.5 text-[var(--primaryColor)]"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-[var(--textColor)]">
                      {useCase.title}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://github.com/vinayjain18/voice-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="app__outlined_btn !w-full sm:!w-auto"
              >
                View the repository
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-3 w-3"
                  aria-hidden="true"
                />
              </Link>

              <Link href="#contact" className="app__filled_btn !w-full sm:!w-auto">
                Ask for a demo
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <PhoneVisual />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-[var(--borderColorStrong)] pt-12 md:grid-cols-2">
          {voiceAgentCapabilities.map((capability, index) => (
            <Reveal key={capability.title} step={index}>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-[var(--textColor)]">
                  {capability.title}
                </h3>
                <p className="measure text-sm/7 text-[var(--textColorLight)]">
                  {capability.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col gap-6 rounded-xl border border-[var(--borderColor)] bg-[var(--surfaceColor)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex flex-col gap-2.5">
            <span className="label">Runs the same, four ways</span>
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
              {voiceAgentSurfaces.map((surface, index) => (
                <li
                  key={surface}
                  className="flex items-center gap-2 text-sm font-medium text-[var(--textColor)]"
                >
                  {surface}
                  {index < voiceAgentSurfaces.length - 1 ? (
                    <span aria-hidden="true" className="text-[var(--borderColorStrong)]">
                      /
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2.5 sm:items-end">
            <span className="label">Built with</span>
            <ul className="flex flex-wrap gap-x-2 gap-y-1.5 sm:justify-end">
              {voiceAgentStack.map((tool) => (
                <li
                  key={tool}
                  className="mono rounded-full border border-[var(--borderColor)] px-2.5 py-1 text-xs text-[var(--textColorLight)]"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default VoiceAgentsShowcase;
