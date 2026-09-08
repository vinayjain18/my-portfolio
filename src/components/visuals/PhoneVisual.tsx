"use client";

import { motion, useReducedMotion } from "framer-motion";
import Waveform from "./Waveform";

/**
 * A device frame drawn in CSS, holding a live waveform. It stands for "a call
 * is happening" — it is not a screenshot of an interface that exists.
 */
const PhoneVisual = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[15rem]"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }
          className="relative aspect-[1/2.03] w-full rounded-[2rem] border border-[var(--borderColorStrong)] bg-[var(--surfaceRaised)] p-[0.4rem] shadow-lg"
          style={{ transform: "rotateY(-10deg) rotateX(4deg)" }}
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-5 overflow-hidden rounded-[1.65rem] bg-[#151311] px-4">
            {/* Notch */}
            <span className="absolute top-2.5 h-1 w-10 rounded-full bg-white/15" />

            <div className="flex flex-col items-center gap-1.5">
              <span className="mono text-[0.625rem] uppercase tracking-[0.16em] text-white/45">
                AI voice agent
              </span>
              <span className="text-sm font-medium text-white/90">
                On a call
              </span>
            </div>

            <Waveform
              className="h-14 w-full justify-center"
              barClassName="bg-white/35"
            />

            <div className="flex items-center gap-2 rounded-full bg-white/[0.07] px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--primaryColor)] opacity-70 motion-safe:animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--primaryColor)]" />
              </span>
              <span className="mono text-[0.625rem] text-white/60">
                listening
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PhoneVisual;
