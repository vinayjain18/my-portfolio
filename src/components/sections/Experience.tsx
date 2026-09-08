"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/common/Reveal";
import experiences from "@/data/experiences";
import type { IExperienceItem } from "@/types";

const formatRange = (item: IExperienceItem) =>
  `${item.startDate} — ${item.isCurrentJob ? "Present" : item.endDate}`;

const Entry = ({ item, index }: { item: IExperienceItem; index: number }) => (
  <Reveal step={Math.min(index, 4)}>
    <li className="relative grid grid-cols-1 gap-x-8 gap-y-4 pb-12 sm:grid-cols-[9.5rem_1fr] md:grid-cols-[11rem_1fr]">
      {/* Node on the rail. The current role gets a ring as well as the accent
          colour, so "now" is not signalled by hue alone. */}
      <span
        aria-hidden="true"
        className="absolute -left-[1.6875rem] top-1.5 flex h-3 w-3 items-center justify-center sm:-left-[2.1875rem]"
      >
        <span
          className={
            item.isCurrentJob
              ? "h-3 w-3 rounded-full bg-[var(--primaryColor)] ring-4 ring-[var(--primaryColor20)]"
              : "h-2.5 w-2.5 rounded-full border-2 border-[var(--borderColorStrong)] bg-[var(--bgColor)]"
          }
        />
      </span>

      <div className="flex flex-col gap-1.5 sm:pt-0.5">
        <span className="mono text-sm text-[var(--textColorLight)]">
          {formatRange(item)}
        </span>
        <span className="text-xs text-[var(--textColorLight)]">
          {item.location}
        </span>
        {item.isCurrentJob ? (
          <span className="label mt-0.5 w-fit rounded-full border border-[var(--primaryColor30)] bg-[var(--primaryColor10)] px-2 py-0.5 text-[var(--primaryColor)]">
            Now
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold tracking-[-0.015em] text-[var(--textColor)]">
            {item.designation}
          </h3>
          <p className="text-base font-medium text-[var(--primaryColor)]">
            {item.company}
          </p>
        </div>

        {item.concurrentNote ? (
          <p className="mono w-fit rounded border border-[var(--borderColor)] px-2 py-1 text-xs text-[var(--textColorLight)]">
            {item.concurrentNote}
          </p>
        ) : null}

        {item.roles?.length ? (
          <ul className="flex flex-col gap-1 border-l border-[var(--borderColor)] pl-4">
            {item.roles.map((role) => (
              <li
                key={role.title}
                className="flex flex-wrap items-baseline gap-x-3 text-sm text-[var(--textColorLight)]"
              >
                <span className="font-medium text-[var(--textColor)]">
                  {role.title}
                </span>
                <span className="mono text-xs">
                  {role.startDate} — {role.endDate}
                </span>
              </li>
            ))}
          </ul>
        ) : null}

        <p className="measure text-base/7 text-[var(--textColor)]">
          {item.shortDescription}
        </p>

        {item.description.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="measure text-sm/7 text-[var(--textColorLight)]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </li>
  </Reveal>
);

const Experience = () => {
  const reduceMotion = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.7", "end 0.6"],
  });

  const railProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="relative w-full bg-[var(--bgColor)]"
    >
      <div className="constrained-width section__pad mx-auto w-full px-5 sm:px-8">
        <SectionTitle
          index="06"
          eyebrow="Experience"
          lead="Python and AI engineer to tech lead in thirteen months, then founding engineer on a product built from an empty repository."
        >
          The journey so far.
        </SectionTitle>

        <div className="relative mt-14 pl-7 sm:pl-9">
          <div
            aria-hidden="true"
            className="absolute left-[0.3125rem] top-2 h-[calc(100%-3rem)] w-px bg-[var(--borderColor)] sm:left-[0.4375rem]"
          >
            <motion.div
              className="h-full w-full origin-top bg-[var(--primaryColor)]"
              style={{ scaleY: reduceMotion ? 1 : railProgress }}
            />
          </div>

          <ol ref={listRef} className="relative flex flex-col">
            {experiences.map((item, index) => (
              <Entry
                key={`${item.company}-${item.startDate}`}
                item={item}
                index={index}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
