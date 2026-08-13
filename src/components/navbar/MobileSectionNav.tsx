"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/utils/cn";
import type { INavItem, INavMenuItem } from "@/types";
import navMenus from "@/data/navMenus";
import useVisibleSection from "@/hooks/useVisibleSection";
import useOnClickOutside from "@/hooks/useOnClickOutside";

/** Tracked so the chip reads "Menu" in the hero rather than claiming a section. */
const HERO_SECTION: INavMenuItem = {
  id: "hero",
  title: "Home",
  path: "/#hero",
  section: "hero",
};

/**
 * Mobile navigation as a position indicator: the collapsed chip says which
 * section you are in, using the same numbering as the section headers, and
 * expands in place to jump elsewhere.
 */
const MobileSectionNav = ({
  navItems,
}: Readonly<{ navItems: INavItem[] }>) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const sections = useMemo(() => [HERO_SECTION, ...navMenus], []);
  const visibleSectionId = useVisibleSection(sections);

  useOnClickOutside(containerRef, () => setIsOpen(false));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activeIndex = navItems.findIndex(
    (item) => item.link === `/#${visibleSectionId}`
  );
  const activeItem = activeIndex >= 0 ? navItems[activeIndex] : null;

  return (
    <div
      ref={containerRef}
      className="md:hidden fixed top-4 inset-x-0 mx-auto z-nav w-[15rem]"
    >
      <div className="overflow-hidden rounded-lg border border-[var(--whiteColor60)] bg-[var(--bgColor90)] backdrop-blur-xl [box-shadow:inset_0_1px_0_0_var(--whiteColor80),var(--navBarShadow)]">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-section-menu"
          className="flex w-full items-center justify-between gap-3 px-4 py-3"
        >
          <span className="flex min-w-0 items-center gap-2">
            {activeItem ? (
              <span className="label !text-[var(--primaryColor)]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
            ) : null}

            <span className="label !text-[var(--textColor)] truncate">
              {activeItem ? activeItem.name : "Menu"}
            </span>
          </span>

          <FontAwesomeIcon
            icon={faChevronDown}
            className={cn(
              "text-xs text-[var(--textColorLight)] transition-transform duration-200 ease-out",
              isOpen && "rotate-180"
            )}
          />
        </button>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.nav
              id="mobile-section-menu"
              aria-label="Sections"
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-[var(--borderColor)]"
            >
              <ul className="flex flex-col p-1.5">
                {navItems.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <li key={item.link}>
                      <Link
                        href={item.link}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "flex items-center gap-3 rounded-sm px-2.5 py-2.5 transition-colors duration-200 ease-out",
                          isActive
                            ? "bg-[var(--primaryColor10)]"
                            : "hover:bg-[var(--textColor10)]"
                        )}
                      >
                        <span
                          className={cn(
                            "label",
                            isActive && "!text-[var(--primaryColor)]"
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={cn(
                            "text-sm font-medium",
                            isActive
                              ? "text-[var(--primaryColor)]"
                              : "text-[var(--textColor)]"
                          )}
                        >
                          {item.name}
                        </span>

                        {isActive ? (
                          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[var(--primaryColor)]" />
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileSectionNav;
