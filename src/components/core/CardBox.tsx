"use client";

import type { MouseEvent } from "react";
import type { CoreComponentsProps } from "@/types";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

/**
 * Surface card with a spotlight that tracks the cursor across its border.
 * The glow lives on an overlay so it never tints the card content.
 */
const CardBox = (props: Readonly<CoreComponentsProps>) => {
  const { children, classNames, onClick, id, elementRef } = props;

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, var(--primaryColor20), transparent 70%)`;

  return (
    <div
      id={id}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        mouseX.set(-200);
        mouseY.set(-200);
      }}
      onClick={onClick}
      ref={elementRef}
      className={`group surface surface--interactive relative w-full flex flex-col justify-start items-start overflow-hidden ${classNames ?? ""}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      <div className="relative z-raised flex w-full flex-1 flex-col items-start">
        {children}
      </div>
    </div>
  );
};

export default CardBox;
