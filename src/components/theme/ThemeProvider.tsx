"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { THEME_STORAGE_KEY } from "./theme-script";

export type ThemeChoice = "system" | "light" | "dark";

interface ThemeContextValue {
  /** What the user picked. Not necessarily what is on screen. */
  choice: ThemeChoice;
  /** What is actually rendered right now. Null until mounted. */
  resolved: "light" | "dark" | null;
  setChoice: (next: ThemeChoice) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const applyChoice = (choice: ThemeChoice) => {
  const root = document.documentElement;

  if (choice === "system") {
    root.removeAttribute("data-theme");
    return;
  }

  root.setAttribute("data-theme", choice);
};

const ThemeProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  // "system" on the first render, so server and client markup match.
  const [choice, setChoiceState] = useState<ThemeChoice>("system");
  const [resolved, setResolved] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    let stored: string | null = null;

    try {
      stored = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
      // Private mode, or blocked site data.
    }

    if (stored === "light" || stored === "dark") {
      setChoiceState(stored);
    }
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");

    const read = () => {
      const attr = document.documentElement.getAttribute("data-theme");

      if (attr === "dark" || attr === "light") {
        setResolved(attr);
        return;
      }

      setResolved(query.matches ? "dark" : "light");
    };

    read();
    query.addEventListener("change", read);

    return () => query.removeEventListener("change", read);
  }, [choice]);

  const setChoice = useCallback((next: ThemeChoice) => {
    setChoiceState(next);
    applyChoice(next);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Preference will not persist beyond this session.
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ choice, resolved, setChoice }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};

export default ThemeProvider;
