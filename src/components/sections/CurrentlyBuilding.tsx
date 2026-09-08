"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/common/Reveal";
import Waveform from "@/components/visuals/Waveform";
import building, { type IBuildingItem } from "@/data/building";

const ContractMark = () => (
  <div aria-hidden="true" className="relative flex h-24 w-full items-center">
    <div className="w-full rounded-lg border border-[var(--borderColorStrong)] bg-[var(--surfaceRaised)] px-3.5 py-3 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--primaryColor)]" />
        <span className="mono text-[0.625rem] uppercase tracking-[0.12em] text-[var(--textColorLight)]">
          contract · v3
        </span>
      </div>

      <div className="mt-2.5 flex items-end gap-3">
        <div className="flex flex-1 flex-col gap-1.5">
          {[100, 76, 92, 62].map((width, index) => (
            <div
              key={index}
              className="h-[3px] rounded-full bg-[var(--textColor20)]"
              style={{ width: `${width}%` }}
            />
          ))}
        </div>

        {/* Signature block */}
        <div className="h-8 w-14 shrink-0 rounded border border-dashed border-[var(--borderColorStrong)]" />
      </div>
    </div>
  </div>
);

const VoiceMark = () => (
  <div aria-hidden="true" className="relative flex h-24 w-full items-center">
    <div className="w-full rounded-lg border border-[var(--borderColorStrong)] bg-[var(--surfaceRaised)] px-3.5 py-3 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--primaryColor)]" />
        <span className="mono text-[0.625rem] uppercase tracking-[0.12em] text-[var(--textColorLight)]">
          on a call
        </span>
      </div>
      <Waveform className="mt-2 h-8" />
    </div>
  </div>
);

const BuildingCard = ({
  item,
  index,
}: {
  item: IBuildingItem;
  index: number;
}) => {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const config = { stiffness: 200, damping: 26, mass: 0.5 };
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-5, 5]), config);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [4, -4]), config);

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;

    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const reset = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <Reveal step={index} className="h-full">
      <div style={{ perspective: "1200px" }} className="h-full">
        <motion.div
          ref={cardRef}
          onPointerMove={handleMove}
          onPointerLeave={reset}
          style={{
            rotateX: reduceMotion ? 0 : rotateX,
            rotateY: reduceMotion ? 0 : rotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={reduceMotion ? undefined : { y: -6 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="group relative flex h-full flex-col justify-between gap-8 rounded-xl border border-[var(--borderColor)] bg-[var(--surfaceColor)] p-7 shadow-sm transition-[border-color,box-shadow] duration-300 ease-out hover:border-[var(--borderColorStrong)] hover:shadow-lg sm:p-8"
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-4">
              <span className="label">{String(index + 1).padStart(2, "0")}</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--borderColor)] px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--successColor)]" />
                <span className="mono text-[0.6875rem] text-[var(--textColorLight)]">
                  {item.status}
                </span>
              </span>
            </div>

            {item.id === "karyalo" ? <ContractMark /> : <VoiceMark />}

            <div className="flex flex-col gap-2">
              <h3 className="font-display text-[var(--textColor)]">
                {item.name}
              </h3>
              <p className="text-sm/6 font-medium text-[var(--primaryColor)]">
                {item.kicker}
              </p>
            </div>

            <p className="text-base/7 text-[var(--textColorLight)]">
              {item.summary}
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-[var(--borderColor)] pt-5">
            <Link
              href={`#${item.sectionId}`}
              className="app__text_btn text-[var(--textColor)] hover:text-[var(--primaryColor)]"
            >
              How it works
            </Link>

            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.hrefLabel}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--borderColorStrong)] text-[var(--textColor)] transition-all duration-300 ease-out group-hover:border-[var(--primaryColor)] group-hover:bg-[var(--primaryColor)] group-hover:text-[var(--onPrimary)]"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
};

const CurrentlyBuilding = () => {
  return (
    <section
      id="building"
      aria-label="Currently building"
      className="relative w-full bg-[var(--bgColor)]"
    >
      <div className="constrained-width section__pad mx-auto w-full px-5 sm:px-8">
        <SectionTitle
          index="02"
          eyebrow="Currently building"
          lead="Two products, both mine. One turns contracts into a single workflow; the other picks up the phone."
        >
          Turning ideas into useful products.
        </SectionTitle>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {building.map((item, index) => (
            <BuildingCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
