"use client";

import { motion, AnimatePresence } from "framer-motion";
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
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-4 inset-x-0 mx-auto border border-[var(--borderColor)] rounded-full bg-[var(--dialogColor50)] backdrop-blur-sm shadow-[var(--boxShadow)] z-[5000] px-3 md:pl-6 md:pr-2 py-2 items-center justify-center gap-5 md:gap-6",
          className
        )}
      >
        {navItems.map((navItem: INavItem, idx: number) => {
          const isActive = navItem.link === `/#${visibleSectionId}`;

          return (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center transition-colors",
                isActive
                  ? "text-[var(--primaryColor)]"
                  : "text-[var(--textColor)] hover:text-[var(--primaryColor)]"
              )}
            >
              <span className="block md:hidden text-base">
                <FontAwesomeIcon
                  id={`nav-item-icon${idx}`}
                  icon={navItem.icon}
                  titleId={`nav-item-icon-title${idx}`}
                  title={navItem.name}
                />
              </span>
              <span className="hidden md:block text-sm/6 lg:text-base font-medium">
                {navItem.name}
              </span>
              {isActive ? (
                <span className="absolute inset-x-0 -bottom-1.5 mx-auto h-px w-full bg-[var(--primaryColor)]" />
              ) : null}
            </Link>
          );
        })}

        <Link
          href="https://cal.com/vinay-jain/30min"
          target="_blank"
          className="!hidden md:!inline-flex app__filled_btn !rounded-full !px-4 !py-2 !text-sm/6 !font-semibold items-center gap-2"
        >
          <FontAwesomeIcon icon={faCalendarCheck} />
          Book a Call
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNavbar;
