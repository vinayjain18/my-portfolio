"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Waveform from "./Waveform";

/** An abstract composition, not a depiction of a real product. */
const HeroVisual = () => {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 22, mass: 0.6 };
  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-9, 9]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [7, -7]),
    springConfig
  );

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    // Fine pointers only; on touch this fires on every scroll-drag.
    if (reduceMotion || event.pointerType !== "mouse") return;

    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;

    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const float = reduceMotion
    ? {}
    : {
        animate: { y: [0, -8, 0] },
        transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[30rem] select-none"
      style={{ perspective: "1400px" }}
    >
      <motion.div
        className="relative aspect-[4/3.5] w-full"
        style={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Back plane — the document being drafted */}
        <motion.div
          className="absolute left-[1%] top-0 h-[66%] w-[56%] rounded-lg border border-[var(--borderColor)] bg-[var(--surfaceRaised)] p-5 shadow-md"
          style={{ transform: "translateZ(0px) rotateZ(-2.5deg)" }}
          {...float}
        >
          <div className="h-2 w-10 rounded-full bg-[var(--primaryColor)]" />

          <div className="mt-4 flex flex-col gap-2.5">
            {[100, 88, 94, 70, 90, 60, 82, 48].map((width, index) => (
              <div
                key={index}
                className="h-1.5 rounded-full bg-[var(--textColor10)]"
                style={{ width: `${width}%` }}
              />
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2">
            <div className="h-6 w-16 rounded border border-dashed border-[var(--borderColorStrong)]" />
            <div className="h-1.5 w-12 rounded-full bg-[var(--textColor10)]" />
          </div>
        </motion.div>

        {/* Middle plane — an interface surface */}
        <motion.div
          className="absolute right-0 top-[18%] w-[50%] rounded-lg border border-[var(--borderColorStrong)] bg-[var(--surfaceColor)] p-4 shadow-lg"
          style={{ transform: "translateZ(60px) rotateZ(1.5deg)" }}
          animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
          }
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--textColor20)]" />
            <span className="h-2 w-2 rounded-full bg-[var(--textColor20)]" />
            <span className="h-2 w-2 rounded-full bg-[var(--textColor20)]" />
          </div>

          <div className="mt-3.5 flex flex-col gap-2">
            <div className="h-1.5 w-3/4 rounded-full bg-[var(--textColor20)]" />
            <div className="h-1.5 w-1/2 rounded-full bg-[var(--textColor10)]" />
            <div className="h-1.5 w-2/3 rounded-full bg-[var(--textColor10)]" />
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-[var(--borderColor)] pt-3">
            <span className="mono text-[0.625rem] text-[var(--textColorLight)]">
              build · solve · iterate
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primaryColor)]" />
          </div>
        </motion.div>

        {/* Front plane — the voice agent, listening */}
        <motion.div
          className="absolute left-[4%] top-[60%] w-[52%] rounded-lg border border-[var(--borderColorStrong)] bg-[var(--surfaceRaised)] px-4 py-3.5 shadow-lg"
          style={{ transform: "translateZ(120px) rotateZ(-1deg)" }}
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
          }
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--primaryColor)] opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--primaryColor)]" />
            </span>
            <span className="mono text-[0.625rem] uppercase tracking-[0.12em] text-[var(--textColorLight)]">
              listening
            </span>
          </div>

          <Waveform className="mt-2 h-7" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroVisual;
