"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import navLinks from "@/data/navigation";
import useActiveSection from "@/hooks/useActiveSection";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { cn } from "@/utils/cn";

const Header = () => {
  const sections = useMemo(() => navLinks.map((link) => link.section), []);
  const active = useActiveSection(sections);
  const reduceMotion = useReducedMotion();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const read = () => setScrolled(window.scrollY > 24);

    read();
    window.addEventListener("scroll", read, { passive: true });

    return () => window.removeEventListener("scroll", read);
  }, []);

  // Escape closes the sheet and hands focus back to the control that opened it.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-nav transition-all duration-300 ease-out",
        scrolled
          ? "border-b border-[var(--borderColor)] bg-[var(--bgColor90)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="constrained-width mx-auto flex h-16 items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="#hero"
          className="font-display text-base font-bold tracking-[-0.02em] text-[var(--textColor)]"
        >
          VJ
          <span className="text-[var(--primaryColor)]">.</span>
          <span className="sr-only">Vinay Jain — back to top</span>
        </Link>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.section;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative inline-flex items-center rounded-full px-3 py-2 text-sm transition-colors duration-200 ease-out",
                      // Weight carries the state as well as colour, so the
                      // active item is not signalled by hue alone.
                      isActive
                        ? "font-semibold text-[var(--textColor)]"
                        : "font-medium text-[var(--textColorLight)] hover:text-[var(--textColor)]"
                    )}
                  >
                    {link.label}

                    {isActive ? (
                      <motion.span
                        layoutId="nav-active-dot"
                        aria-hidden="true"
                        className="absolute inset-x-3 -bottom-px h-px bg-[var(--primaryColor)]"
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 420, damping: 36 }
                        }
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />

          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden inline-flex items-center gap-2 rounded-full border border-[var(--borderColor)] bg-[var(--surfaceColor)] px-3.5 py-2 text-sm font-medium text-[var(--textColor)]"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-b border-[var(--borderColor)] bg-[var(--bgColor)]"
          >
            <div className="px-5 pb-6 pt-2 sm:px-8">
              <nav aria-label="Sections">
                <ul className="flex flex-col">
                  {navLinks.map((link) => {
                    const isActive = active === link.section;

                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          aria-current={isActive ? "true" : undefined}
                          className={cn(
                            "flex items-center justify-between border-b border-[var(--borderColor)] py-3.5 text-base",
                            isActive
                              ? "font-semibold text-[var(--textColor)]"
                              : "font-medium text-[var(--textColorLight)]"
                          )}
                        >
                          {link.label}
                          {isActive ? (
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primaryColor)]" />
                          ) : null}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-5 flex items-center justify-between gap-4">
                <span className="label">Theme</span>
                <ThemeToggle showLabels className="flex-1 max-w-[16rem]" />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Header;
