"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

/** Fixed bar heights: a designed silhouette, and identical on server and client. */
const BARS = [
  0.22, 0.4, 0.68, 0.94, 0.72, 0.46, 0.3, 0.55, 0.82, 1, 0.78, 0.5, 0.34, 0.6,
  0.88, 0.66, 0.42, 0.26, 0.48, 0.7, 0.9, 0.62, 0.38, 0.24,
];

interface WaveformProps {
  /** Static bars when false — used for the resting state of a card. */
  animate?: boolean;
  className?: string;
  barClassName?: string;
}

const Waveform = ({ animate = true, className, barClassName }: WaveformProps) => {
  const reduceMotion = useReducedMotion();
  const isAnimated = animate && !reduceMotion;

  return (
    <div
      aria-hidden="true"
      className={cn("flex h-10 items-center gap-[3px]", className)}
    >
      {BARS.map((height, index) => (
        <motion.span
          key={index}
          className={cn(
            "w-[3px] shrink-0 rounded-full bg-[var(--textColor30)]",
            barClassName
          )}
          style={{ height: `${Math.max(height * 100, 12)}%` }}
          animate={
            isAnimated
              ? { scaleY: [1, 0.45 + height * 0.5, 1] }
              : { scaleY: 1 }
          }
          transition={
            isAnimated
              ? {
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (index % 8) * 0.09,
                }
              : { duration: 0 }
          }
        />
      ))}
    </div>
  );
};

export default Waveform;
