"use client";

import { useEffect, useState } from "react";

/**
 * Reports which section is currently under the reader.
 *
 * Uses a viewport band rather than plain intersection: a tall section and a
 * short one otherwise fight over "most visible", and the highlight flickers as
 * you scroll past a boundary. The band is a horizontal line ~38% down the
 * viewport, and whichever section crosses it wins.
 */
const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (!ids.length) return;

    const read = () => {
      const line = window.innerHeight * 0.38;
      let current = ids[0];
      let bestTop = -Infinity;

      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;

        const { top } = element.getBoundingClientRect();

        // Lowest section that has already crossed the line wins. Comparing
        // positions rather than trusting array order means the caller's list
        // does not have to match document order.
        if (top <= line && top > bestTop) {
          bestTop = top;
          current = id;
        }
      }

      // The last section is often shorter than the viewport, so it can never
      // reach the band. Snap to it once we are at the bottom of the page.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) current = ids[ids.length - 1];

      setActive((previous) => (previous === current ? previous : current));
    };

    read();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);

    return () => {
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, [ids]);

  return active;
};

export default useActiveSection;
