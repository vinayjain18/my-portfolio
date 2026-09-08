"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";
import { useTheme, type ThemeChoice } from "./ThemeProvider";
import { cn } from "@/utils/cn";

const options: { value: ThemeChoice; label: string; icon: IconDefinition }[] = [
  { value: "system", label: "System", icon: faDesktop },
  { value: "light", label: "Light", icon: faSun },
  { value: "dark", label: "Dark", icon: faMoon },
];

interface ThemeToggleProps {
  /** Icon-only on desktop nav; labelled in the mobile sheet where there is room. */
  showLabels?: boolean;
  className?: string;
}

const ThemeToggle = ({ showLabels = false, className }: ThemeToggleProps) => {
  const { choice, setChoice } = useTheme();
  const reduceMotion = useReducedMotion();
  const groupId = useId();

  return (
    <div
      role="radiogroup"
      aria-label="Colour theme"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-[var(--borderColor)] bg-[var(--surfaceColor)] p-1",
        className
      )}
    >
      {options.map((option) => {
        const isActive = choice === option.value;

        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            title={`${option.label} theme`}
            onClick={() => setChoice(option.value)}
            className={cn(
              "relative inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 text-sm font-medium",
              "transition-colors duration-200 ease-out",
              isActive
                ? "text-[var(--primaryColor)]"
                : "text-[var(--textColorLight)] hover:text-[var(--textColor)]",
              showLabels && "flex-1 justify-center px-3"
            )}
          >
            {isActive ? (
              <motion.span
                layoutId={`${groupId}-theme-pill`}
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-[var(--primaryColor10)] ring-1 ring-inset ring-[var(--primaryColor30)]"
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 420, damping: 34 }
                }
              />
            ) : null}

            <FontAwesomeIcon
              icon={option.icon}
              className="relative h-3.5 w-3.5"
              aria-hidden="true"
            />

            {showLabels ? (
              <span className="relative">{option.label}</span>
            ) : (
              <span className="sr-only">{option.label} theme</span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
