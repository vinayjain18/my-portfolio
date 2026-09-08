"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePen,
  faListCheck,
  faPaperPlane,
  faSignature,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/common/Reveal";
import { karyaloFlow } from "@/data/building";

const icons: IconDefinition[] = [
  faFilePen,
  faListCheck,
  faPaperPlane,
  faSignature,
];

/** A diagram of the contract lifecycle. No real Karyalo screens are reproduced. */
const ContractDiagram = () => {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "center 0.55"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={trackRef} className="relative w-full">
      <div
        aria-hidden="true"
        className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-[var(--borderColor)] sm:block"
      >
        <motion.div
          className="h-full w-full origin-top bg-[var(--primaryColor)]"
          style={{ scaleY: reduceMotion ? 1 : lineScale }}
        />
      </div>

      <ol className="flex flex-col gap-4">
        {karyaloFlow.map((stage, index) => (
          <Reveal key={stage.step} step={index}>
            <li className="relative flex items-start gap-5">
              <span className="relative z-raised flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--borderColorStrong)] bg-[var(--surfaceRaised)] text-[var(--textColor)] shadow-sm">
                <FontAwesomeIcon
                  icon={icons[index]}
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </span>

              <div className="flex-1 rounded-lg border border-[var(--borderColor)] bg-[var(--surfaceColor)] px-5 py-4 shadow-xs">
                <div className="flex items-baseline gap-3">
                  <span className="label text-[var(--primaryColor)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-[var(--textColor)]">
                    {stage.step}
                  </h3>
                </div>
                <p className="mt-1.5 text-sm/7 text-[var(--textColorLight)]">
                  {stage.detail}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
};

const KaryaloShowcase = () => {
  return (
    <section
      id="karyalo"
      aria-label="Karyalo"
      className="relative w-full overflow-hidden bg-[var(--dialogColor)]"
    >
      <div className="constrained-width section__pad mx-auto w-full px-5 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionTitle index="03" eyebrow="Karyalo">
                Contracts in one place.
              </SectionTitle>

              <p className="measure mt-6 text-base/8 text-[var(--textColorLight)]">
                WebsiNova&apos;s own contract platform, covering the whole loop
                from first draft to signature. Built for law firms, in-house
                legal teams and business teams.
              </p>

              <Link
                href="https://karyalo.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="app__outlined_btn mt-8"
              >
                Visit karyalo.in
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-3 w-3"
                  aria-hidden="true"
                />
              </Link>

              <p className="mono mt-8 max-w-xs text-xs/6 text-[var(--textColorLight)]">
                The stages below are a diagram of the product&apos;s workflow,
                not screenshots of the application.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContractDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KaryaloShowcase;
