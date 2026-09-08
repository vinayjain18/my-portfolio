"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";

interface ParallaxImageProps {
  src: string;
  alt: string;
  /** How far the image drifts inside its frame, in percent of its overhang. */
  strength?: number;
  priority?: boolean;
  sizes: string;
  className?: string;
}

/**
 * An image that drifts slightly slower than the page inside a fixed frame.
 * The image is oversized so the drift never exposes an edge.
 */
const ParallaxImage = ({
  src,
  alt,
  strength = 8,
  priority = false,
  sizes,
  className,
}: ParallaxImageProps) => {
  const reduceMotion = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${strength}%`, `${strength}%`]
  );

  return (
    <div
      ref={frameRef}
      className={cn(
        "relative overflow-hidden rounded-xl border border-[var(--borderColor)] bg-[var(--surfaceSunken)] shadow-lg",
        className
      )}
    >
      <motion.div
        className="absolute inset-0"
        style={
          reduceMotion
            ? undefined
            : { y, height: `${100 + strength * 2}%`, top: `-${strength}%` }
        }
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-center"
        />
      </motion.div>
    </div>
  );
};

export default ParallaxImage;
