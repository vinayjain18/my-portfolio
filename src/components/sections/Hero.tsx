"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import HeroVisual from "@/components/visuals/HeroVisual";

const enterFrom = (reduceMotion: boolean | null) =>
  reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 };

const Hero = () => {
  const reduceMotion = useReducedMotion();

  // One shared clock for the load sequence, so the order is explicit rather
  // than emergent: heading, supporting line, CTAs, then the visual.
  const step = (index: number) => ({
    initial: enterFrom(reduceMotion),
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0.3 : 0.7,
      delay: reduceMotion ? 0 : 0.1 + index * 0.11,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[var(--bgColor)]"
    >
      {/* Ambient warmth, off-centre so it does not read as a symmetrical glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[14rem] -top-[16rem] h-[44rem] w-[44rem] rounded-full opacity-[0.5] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--secondaryColor30), transparent 65%)",
        }}
      />

      <div className="constrained-width relative z-raised mx-auto w-full px-5 pb-20 pt-28 sm:px-8 md:pb-24 md:pt-32">
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-16 lg:grid-cols-12">
          <div className="flex flex-col items-start gap-7 lg:col-span-6">
            <motion.span
              {...step(0)}
              className="inline-flex items-center gap-2.5 rounded-full border border-[var(--borderColorStrong)] bg-[var(--surfaceColor)] py-1.5 pl-2.5 pr-3.5 shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--successColor)] opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--successColor)]" />
              </span>
              <span className="label !tracking-[0.1em] text-[var(--textColor)]">
                Available for client work
              </span>
            </motion.span>

            <div className="flex flex-col gap-4">
              <motion.p
                {...step(1)}
                className="text-lg/7 text-[var(--textColorLight)]"
              >
                Hi, I&apos;m
              </motion.p>

              <motion.h1 {...step(2)} className="font-display">
                Vinay Jain
                <span className="text-[var(--primaryColor)]">.</span>
              </motion.h1>

              <motion.p
                {...step(3)}
                className="text-base/7 font-medium tracking-[0.01em] text-[var(--textColor)] md:text-lg/8"
              >
                Software Engineer
                <span aria-hidden="true" className="mx-2.5 text-[var(--textColorLight)]">
                  ·
                </span>
                Builder
                <span aria-hidden="true" className="mx-2.5 text-[var(--textColorLight)]">
                  ·
                </span>
                Founder
              </motion.p>
            </div>

            <motion.p
              {...step(4)}
              className="measure text-lg/8 text-[var(--textColorLight)] md:text-xl/9"
            >
              I build RAG-based AI systems and the full-stack products they live
              inside. Currently founder of WebsiNova Technologies, building{" "}
              <span className="font-medium text-[var(--textColor)]">Karyalo</span>{" "}
              and{" "}
              <span className="font-medium text-[var(--textColor)]">
                AI voice agents
              </span>
              .
            </motion.p>

            <motion.div
              {...step(5)}
              className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <Link href="#work" className="app__filled_btn !w-full sm:!w-auto">
                View work
              </Link>
              <Link href="#contact" className="app__outlined_btn !w-full sm:!w-auto">
                Let&apos;s connect
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.3 : 0.9,
              delay: reduceMotion ? 0 : 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-6"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
