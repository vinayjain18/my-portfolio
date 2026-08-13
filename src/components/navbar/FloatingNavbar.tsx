"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { INavItem } from "@/types";
import useVisibleSection from "@/hooks/useVisibleSection";

const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: INavItem[];
  className?: string;
}) => {
  const visibleSectionId = useVisibleSection();

  return (
    <motion.nav
      aria-label="Primary"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        // Glass: translucent fill, hairline edge, and an inner highlight for edge refraction
        "fixed top-4 inset-x-0 mx-auto hidden md:flex max-w-fit items-center justify-center gap-1 z-nav",
        "rounded-full border border-[var(--whiteColor60)] bg-[var(--bgColor70)] backdrop-blur-xl",
        "shadow-nav [box-shadow:inset_0_1px_0_0_var(--whiteColor80),var(--navBarShadow)]",
        "px-1.5 py-1.5 md:pl-2 md:pr-1.5",
        className
      )}
    >
      {navItems.map((navItem: INavItem) => {
        const isActive = navItem.link === `/#${visibleSectionId}`;

        return (
          <Link
            key={navItem.link}
            href={navItem.link}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "relative flex items-center rounded-full px-3 py-1.5 transition-colors duration-200 ease-out",
              isActive
                ? "text-[var(--primaryColor)]"
                : "text-[var(--textColorLight)] hover:text-[var(--textColor)]"
            )}
          >
            {isActive ? (
              <motion.span
                layoutId="nav-active-pill"
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-[var(--primaryColor10)]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            ) : null}

            <span className="relative text-sm/6 font-medium">
              {navItem.name}
            </span>
          </Link>
        );
      })}

      <Link
        href="https://cal.com/vinay-jain/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="!hidden md:!inline-flex app__filled_btn !rounded-full !px-4 !py-1.5 !text-sm !font-semibold ml-1"
      >
        <FontAwesomeIcon icon={faCalendarCheck} />
        Book a call
      </Link>
    </motion.nav>
  );
};

export default FloatingNavbar;
