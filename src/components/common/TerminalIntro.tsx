"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/utils/cn";

type TerminalLine = {
  prompt?: string;
  text: string;
};

const lines: TerminalLine[] = [
  { prompt: "$", text: "whoami" },
  { text: "Vinay Jain - Tech Lead, AI & Full-Stack Developer" },
  { prompt: "$", text: "status --availability" },
  { text: "Open for new client work at WebsiNova Technologies" },
];

export const TerminalIntro = ({ className }: Readonly<{ className?: string }>) => {
  const scope = useRef<HTMLDivElement>(null);
  const isInView = useInView(scope, { once: true });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setVisibleLines(index);
      if (index >= lines.length) clearInterval(interval);
    }, 550);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div
      ref={scope}
      className={cn(
        "w-full max-w-[28rem] rounded-md border border-[var(--borderColorStrong)] bg-[var(--textColor)] overflow-hidden shadow-lg",
        className
      )}
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[var(--whiteColor10)]">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--errorColor)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--warningColor)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--successColor)]" />
        <span className="ml-2 mono text-[0.6875rem] text-[var(--whiteColor40)]">
          ~/vinay
        </span>
      </div>

      <div className="p-4 font-mono text-xs/6 md:text-sm/6 min-h-[7rem]">
        {lines.slice(0, visibleLines).map((line, idx) => (
          <motion.p
            key={`terminal-line-${idx}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={
              line.prompt
                ? "text-[var(--secondaryColor)]"
                : "text-[var(--whiteColor80)] pl-4"
            }
          >
            {line.prompt ? `${line.prompt} ${line.text}` : line.text}
          </motion.p>
        ))}
        {visibleLines >= lines.length ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block h-[1em] w-[0.5em] bg-[var(--secondaryColor)] ml-4 align-middle"
          />
        ) : null}
      </div>
    </div>
  );
};

export default TerminalIntro;
