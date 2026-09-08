"use client";

import { useEffect, useState } from "react";

/**
 * Reports which section is currently under the reader, using a line ~38% down
 * the viewport rather than plain intersection.
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

        if (top <= line && top > bestTop) {
          bestTop = top;
          current = id;
        }
      }

      // A short final section never reaches the band, so snap to it at the bottom.
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
