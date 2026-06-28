# Portfolio Content & Visual Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the portfolio's content to match Vinay's current resume (Tech Lead at GreenFi & Lejit AI through May 2026, founder of WebsiNova Technologies since, new FinSight project), remove the resume PDF link in favor of a cal.com booking CTA, drop the dedicated Services section, and replace the dark neon-green "AI template" visual theme with a warm, light, personal theme that includes two developer-themed animations (a terminal-style hero intro and a commit-graph experience timeline).

**Architecture:** This is a Next.js 14 App Router site where all visual styling flows through CSS custom properties defined once in `src/app/globals.scss` and consumed via Tailwind arbitrary-value syntax (`bg-[var(--bgColor)]`) across components - so the palette swap is centralized. Content lives in flat typed arrays under `src/data/`, consumed by presentational components under `src/components/home/`. No structural change to the App Router pages themselves (`src/app/page.tsx` keeps importing `HomeSection1` through `HomeSection6` by the same names - only what those components render changes).

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, Sass, Framer Motion, FontAwesome. No test runner is configured in this repo (`package.json` has no `test` script, no Jest/Vitest/Playwright test config) - verification in this plan uses `npx tsc --noEmit` (type check), `npm run build` (production build, also runs Next's lint-on-build checks), and for visually-changed components, a Playwright MCP screenshot of the local dev server checked against the acceptance criteria stated in the task. This is the closest equivalent to "tests" this codebase has.

## Global Constraints

- No em dashes anywhere in copy (data files or JSX) - use a hyphen (`-`) instead.
- Copy must read like a real person wrote it - concrete, specific to actual work, no generic marketing buzzwords.
- Light warm theme only - no dark mode toggle, no `dark:` variant classes need to stay functional (existing `dark:` classes can be left in place since they read the same CSS vars as light, but no new `dark:`-specific styling should be added).
- All existing CSS variable names in `globals.scss` (`--bgColor`, `--primaryColor`, etc., including their `10`-`100` suffixed variants) must keep their exact names - only the underlying RGB values change. Every component in the codebase references these by name and must keep working unmodified.
- `public/Vinay-Jain-Resume.pdf` and `public/Vinay_Jain__Updated-Resume.pdf` stay on disk, just unlinked from the UI.
- FinSight live URL: `https://financial-statement-analyzer-three.vercel.app/`.
- cal.com booking URL: `https://cal.com/vinay-jain/30min`.

---

## Task 1: Warm color palette in `globals.scss`

**Files:**
- Modify: `src/app/globals.scss:27-190` (the `:root` block)

**Interfaces:**
- Produces: every `--*Color*` CSS variable consumed by every component in the codebase, by name, unchanged - only values change.

- [ ] **Step 1: Replace the `:root` block**

Replace lines 27-190 of `src/app/globals.scss` (the entire `:root { ... }` block, from `--maxWidth` through `--navBarShadow`) with:

```scss
:root {
  --maxWidth: 1200px;
  --borderRadius: 1.5rem;
  --defaultRadius: 1.5rem;

  --dialogColor10: rgba(238, 227, 208, 0.1);
  --dialogColor20: rgba(238, 227, 208, 0.2);
  --dialogColor30: rgba(238, 227, 208, 0.3);
  --dialogColor40: rgba(238, 227, 208, 0.4);
  --dialogColor50: rgba(238, 227, 208, 0.5);
  --dialogColor60: rgba(238, 227, 208, 0.6);
  --dialogColor70: rgba(238, 227, 208, 0.7);
  --dialogColor80: rgba(238, 227, 208, 0.8);
  --dialogColor90: rgba(238, 227, 208, 0.9);
  --dialogColor100: rgba(238, 227, 208, 1);
  --dialogColor: rgb(238, 227, 208);

  --bgColor10: rgba(250, 246, 240, 0.1);
  --bgColor20: rgba(250, 246, 240, 0.2);
  --bgColor30: rgba(250, 246, 240, 0.3);
  --bgColor40: rgba(250, 246, 240, 0.4);
  --bgColor50: rgba(250, 246, 240, 0.5);
  --bgColor60: rgba(250, 246, 240, 0.6);
  --bgColor70: rgba(250, 246, 240, 0.7);
  --bgColor80: rgba(250, 246, 240, 0.8);
  --bgColor90: rgba(250, 246, 240, 0.9);
  --bgColor: rgba(250, 246, 240, 1);

  --lightGrayColor: #ede6da;
  --lighterGrayColor: #f4efe6;

  --borderColor: rgba(228, 217, 200, 1);
  --darkGrayColor: rgb(150, 138, 124);

  --linkColor10: rgba(61, 107, 138, 0.1);
  --linkColor20: rgba(61, 107, 138, 0.2);
  --linkColor30: rgba(61, 107, 138, 0.3);
  --linkColor40: rgba(61, 107, 138, 0.4);
  --linkColor50: rgba(61, 107, 138, 0.5);
  --linkColor60: rgba(61, 107, 138, 0.6);
  --linkColor70: rgba(61, 107, 138, 0.7);
  --linkColor80: rgba(61, 107, 138, 0.8);
  --linkColor90: rgba(61, 107, 138, 0.9);
  --linkColor100: rgba(61, 107, 138, 1);
  --linkColor: rgba(61, 107, 138, 1);

  --primaryColor10: rgba(191, 91, 38, 0.1);
  --primaryColor20: rgba(191, 91, 38, 0.2);
  --primaryColor30: rgba(191, 91, 38, 0.3);
  --primaryColor40: rgba(191, 91, 38, 0.4);
  --primaryColor50: rgba(191, 91, 38, 0.5);
  --primaryColor60: rgba(191, 91, 38, 0.6);
  --primaryColor70: rgba(191, 91, 38, 0.7);
  --primaryColor80: rgba(191, 91, 38, 0.8);
  --primaryColor90: rgba(191, 91, 38, 0.9);
  --primaryColor100: rgba(191, 91, 38, 1);
  --primaryColor: rgba(191, 91, 38, 1);

  --secondaryColor10: rgba(224, 164, 88, 0.1);
  --secondaryColor20: rgba(224, 164, 88, 0.2);
  --secondaryColor30: rgba(224, 164, 88, 0.3);
  --secondaryColor40: rgba(224, 164, 88, 0.4);
  --secondaryColor50: rgba(224, 164, 88, 0.5);
  --secondaryColor60: rgba(224, 164, 88, 0.6);
  --secondaryColor70: rgba(224, 164, 88, 0.7);
  --secondaryColor80: rgba(224, 164, 88, 0.8);
  --secondaryColor90: rgba(224, 164, 88, 0.9);
  --secondaryColor100: rgba(224, 164, 88, 1);
  --secondaryColor: rgba(224, 164, 88, 1);

  --successColor10: rgba(92, 138, 82, 0.1);
  --successColor20: rgba(92, 138, 82, 0.2);
  --successColor30: rgba(92, 138, 82, 0.3);
  --successColor40: rgba(92, 138, 82, 0.4);
  --successColor50: rgba(92, 138, 82, 0.5);
  --successColor60: rgba(92, 138, 82, 0.6);
  --successColor70: rgba(92, 138, 82, 0.7);
  --successColor80: rgba(92, 138, 82, 0.8);
  --successColor90: rgba(92, 138, 82, 0.9);
  --successColor100: rgba(92, 138, 82, 1);
  --successColor: rgba(92, 138, 82, 1);

  --errorColor10: rgba(179, 58, 58, 0.1);
  --errorColor20: rgba(179, 58, 58, 0.2);
  --errorColor30: rgba(179, 58, 58, 0.3);
  --errorColor40: rgba(179, 58, 58, 0.4);
  --errorColor50: rgba(179, 58, 58, 0.5);
  --errorColor60: rgba(179, 58, 58, 0.6);
  --errorColor70: rgba(179, 58, 58, 0.7);
  --errorColor80: rgba(179, 58, 58, 0.8);
  --errorColor90: rgba(179, 58, 58, 0.9);
  --errorColor100: rgba(179, 58, 58, 1);
  --errorColor: rgba(179, 58, 58, 1);

  --warningColor10: rgba(201, 138, 45, 0.1);
  --warningColor20: rgba(201, 138, 45, 0.2);
  --warningColor30: rgba(201, 138, 45, 0.3);
  --warningColor40: rgba(201, 138, 45, 0.4);
  --warningColor50: rgba(201, 138, 45, 0.5);
  --warningColor60: rgba(201, 138, 45, 0.6);
  --warningColor70: rgba(201, 138, 45, 0.7);
  --warningColor80: rgba(201, 138, 45, 0.8);
  --warningColor90: rgba(201, 138, 45, 0.9);
  --warningColor100: rgba(201, 138, 45, 1);
  --warningColor: rgba(201, 138, 45, 1);

  --textColor10: rgba(43, 36, 32, 0.1);
  --textColor20: rgba(43, 36, 32, 0.2);
  --textColor30: rgba(43, 36, 32, 0.3);
  --textColor40: rgba(43, 36, 32, 0.4);
  --textColor50: rgba(43, 36, 32, 0.5);
  --textColor60: rgba(43, 36, 32, 0.6);
  --textColor70: rgba(43, 36, 32, 0.7);
  --textColor80: rgba(43, 36, 32, 0.8);
  --textColor90: rgba(43, 36, 32, 0.9);
  --textColor100: rgba(43, 36, 32, 1);
  --textColor: rgba(43, 36, 32, 1);

  --textColorLight10: rgba(107, 95, 84, 0.1);
  --textColorLight20: rgba(107, 95, 84, 0.2);
  --textColorLight30: rgba(107, 95, 84, 0.3);
  --textColorLight40: rgba(107, 95, 84, 0.4);
  --textColorLight50: rgba(107, 95, 84, 0.5);
  --textColorLight60: rgba(107, 95, 84, 0.6);
  --textColorLight70: rgba(107, 95, 84, 0.7);
  --textColorLight80: rgba(107, 95, 84, 0.8);
  --textColorLight90: rgba(107, 95, 84, 0.9);
  --textColorLight100: rgba(107, 95, 84, 1);
  --textColorLight: rgba(107, 95, 84, 1);

  --blackColor10: rgba(0, 0, 0, 0.1);
  --blackColor20: rgba(0, 0, 0, 0.2);
  --blackColor30: rgba(0, 0, 0, 0.3);
  --blackColor40: rgba(0, 0, 0, 0.4);
  --blackColor50: rgba(0, 0, 0, 0.5);
  --blackColor60: rgba(0, 0, 0, 0.6);
  --blackColor70: rgba(0, 0, 0, 0.7);
  --blackColor80: rgba(0, 0, 0, 0.8);
  --blackColor90: rgba(0, 0, 0, 0.9);
  --blackColor100: rgba(0, 0, 0, 1);
  --blackColor: rgba(0, 0, 0, 1);

  --whiteColor10: rgba(255, 255, 255, 0.1);
  --whiteColor20: rgba(255, 255, 255, 0.2);
  --whiteColor30: rgba(255, 255, 255, 0.3);
  --whiteColor40: rgba(255, 255, 255, 0.4);
  --whiteColor50: rgba(255, 255, 255, 0.5);
  --whiteColor60: rgba(255, 255, 255, 0.6);
  --whiteColor70: rgba(255, 255, 255, 0.7);
  --whiteColor80: rgba(255, 255, 255, 0.8);
  --whiteColor90: rgba(255, 255, 255, 0.9);
  --whiteColor100: rgba(255, 255, 255, 1);
  --whiteColor: rgba(255, 255, 255, 1);

  --primaryGrad: linear-gradient(118.18deg,
      var(--primaryColor) 0.99%,
      var(--secondaryColor) 100%);

  --boxShadow: 0px 4px 12px -6px rgba(91, 61, 33, 0.10),
    0px -4px 12px -6px rgba(91, 61, 33, 0.06), -4px 0px 12px -6px rgba(91, 61, 33, 0.06),
    4px 0px 12px -6px rgba(91, 61, 33, 0.06);

  --navBarShadow: 0 0 10px 0 rgba(91, 61, 33, 0.12);
}
```

- [ ] **Step 2: Type check**

Run: `npx tsc --noEmit`
Expected: no new errors (SCSS isn't type-checked, this just confirms nothing else broke).

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: build succeeds with no errors.

- [ ] **Step 4: Visual check**

Run `npm run dev`, navigate to `http://localhost:3000` with the Playwright MCP browser tool, take a full-page screenshot. Expected: background is now warm cream instead of near-black, text is dark charcoal (existing components haven't been restructured yet, so layout will look unchanged except for color - that's expected at this stage).

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.scss
git commit -m "Switch theme palette from dark neon-green to warm light tones"
```

---

## Task 2: Remove hardcoded dark-theme colors in shared components

**Files:**
- Modify: `src/components/core/CardBox.tsx`
- Modify: `src/components/navbar/FloatingNavbar.tsx`

**Interfaces:**
- Consumes: CSS vars from Task 1 (`--textColor`, `--textColor10`, `--borderColor`, `--dialogColor50`, `--primaryColor`).
- Produces: no new exports - same component signatures (`CardBox(props: CoreComponentsProps)`, `FloatingNavbar({ navItems, className })`) consumed unchanged by `SkillItem.tsx`, `ProjectItem.tsx`, and `page.tsx`.

`CardBox` and `FloatingNavbar` use Tailwind's hardcoded `zinc-*`/`white`/`neutral-*` classes that assume a dark background. These don't read the CSS vars, so Task 1 alone doesn't fix them - they'd render dark or invisible text on the new cream background.

- [ ] **Step 1: Fix `CardBox.tsx`**

In `src/components/core/CardBox.tsx`, replace the className on the root `div` (currently `` `relative w-full flex flex-col justify-start items-start duration-500 border rounded-[var(--borderRadius)] hover:bg-zinc-800/10 hover:border-zinc-400/50 border-zinc-600 overflow-hidden group ${classNames}` ``) with:

```tsx
className={`relative w-full flex flex-col justify-start items-start duration-500 border rounded-[var(--borderRadius)] hover:bg-[var(--textColor10)] hover:border-[var(--primaryColor50)] border-[var(--borderColor)] overflow-hidden group ${classNames}`}
```

Also replace `via-zinc-100/10` (in the `motion.div` a few lines down) with `via-[var(--whiteColor20)]`.

- [ ] **Step 2: Fix `FloatingNavbar.tsx`**

In `src/components/navbar/FloatingNavbar.tsx`:
- Replace `border border-white/[0.25]` (on the outer `motion.div`) with `border border-[var(--borderColor)]`.
- Replace `text-neutral-50 hover:text-neutral-300` (on each nav `Link`) with `text-[var(--textColor)] hover:text-[var(--primaryColor)]`.
- Replace `border-white/[0.2] text-white` (on the WhatsApp `Link`) with `border-[var(--borderColor)] text-[var(--textColor)]`.

- [ ] **Step 3: Type check and build**

Run: `npx tsc --noEmit && npm run build`
Expected: both succeed with no errors.

- [ ] **Step 4: Visual check**

With `npm run dev` running, screenshot the homepage with Playwright MCP. Expected: the floating nav pill at the top has visible dark text on its (now light) background, not invisible white-on-light text.

- [ ] **Step 5: Commit**

```bash
git add src/components/core/CardBox.tsx src/components/navbar/FloatingNavbar.tsx
git commit -m "Replace hardcoded dark-theme colors with CSS variables in CardBox and FloatingNavbar"
```

---

## Task 3: Update experience content

**Files:**
- Modify: `src/data/experiences.ts`

**Interfaces:**
- Produces: `experiences: IExperienceItem[]` default export, same shape as before (`designation`, `company`, `startDate`, `endDate`, `isCurrentJob`, `location`, `shortDescription`, `description`), consumed unchanged by `Section3.tsx` (rewritten in Task 7, but reads the same field names).

- [ ] **Step 1: Replace the GreenFi entry with the combined GreenFi & Lejit AI entry and the new WebsiNova entry**

Replace the first object in the `experiences` array (currently `designation: "AI & Full Stack Developer", company: "GreenFi", ...`) in `src/data/experiences.ts` with these two objects, inserted in this order at the start of the array (most recent first):

```ts
  {
    designation: "Founder",
    company: "WebsiNova Technologies",
    startDate: "Jun 2026",
    endDate: "",
    isCurrentJob: true,
    location: "Remote, India",
    shortDescription:
      "I run my own development studio, providing full-stack and AI development services to clients.",
    description:
      "After leading engineering for GreenFi and Lejit AI, I started WebsiNova Technologies to bring the same architecture, RAG and AI systems, and full-stack experience directly to clients, from initial scoping and estimation through to delivery.",
  },
  {
    designation: "Tech Lead",
    company: "GreenFi & Lejit AI",
    startDate: "Jun 2024",
    endDate: "May 2026",
    isCurrentJob: false,
    location: "Remote, India",
    shortDescription:
      "I led a team of 5 developers across two products, a climatetech ESG platform and a legal tech SaaS, owning architecture, sprint delivery, and client communication for both.",
    description:
      "I started as a Python developer on GreenFi, grew into a full-stack role, and became Tech Lead managing both GreenFi and Lejit AI for the same founder. I took over both codebases after the previous vendor left with no knowledge transfer, reverse-engineered the systems, and onboarded the team without missing client deadlines. On GreenFi, I maintained and extended a multi-module ESG platform covering carbon emission tracking, ESG ratings, sustainability reporting, media monitoring, and regulatory compliance, and built the RAG pipeline for ESG document Q&A using LLMs and Milvus, served through FastAPI, across a serverless AWS Lambda and EC2 backend with an Express 5 API and MySQL. On Lejit AI, I architected a legal tech SaaS from scratch with separate flows for lawyers, citizens, corporates, law students, and law enforcement, built RAG-based legal AI features for document Q&A, drafting, case comparison, and legal opinions, designed a multi-tenant law enforcement module with department hierarchy and role-based access, and integrated Razorpay payments, Twilio OTP authentication, and i18n support for 16 languages.",
  },
```

Leave the Intel and Creative Finserve entries that follow unchanged.

- [ ] **Step 2: Type check**

Run: `npx tsc --noEmit`
Expected: no errors (the `experiences` array still matches `IExperienceItem[]`).

- [ ] **Step 3: Commit**

```bash
git add src/data/experiences.ts
git commit -m "Update experience data: combined GreenFi & Lejit AI role, add WebsiNova Technologies"
```

---

## Task 4: Add FinSight project

**Files:**
- Modify: `src/data/projects.ts`

**Interfaces:**
- Produces: `projects: IProjectItem[]` default export with one new entry, same shape consumed unchanged by `ProjectItem.tsx` / `ProjectList.tsx`.

- [ ] **Step 1: Add the FinSight entry**

In `src/data/projects.ts`, add this object as the first entry in the `projects` array (before the `desihelper` entry):

```ts
  {
    id: "finsight",
    title: "FinSight: Bank Statement Analyzer",
    description:
      "FinSight takes bank statement PDFs, extracts transactions using AI, categorizes expenses, and shows spending insights through interactive charts. Analyzed data can be downloaded as CSV or PDF, no signup is needed, and no data is stored on the server.",
    icon: "/skills/medical-report.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://financial-statement-analyzer-three.vercel.app/",
    tags: ["Next JS", "FastAPI", "OpenAI"],
    sceenshots: ["/screenshots/rippl.png"],
  },
```

Note: `icon` reuses `/skills/medical-report.png` (an existing icon in `public/skills/`) since no finance-specific icon exists yet in `public/skills/` - confirm this renders acceptably in the visual check below; if not, swap to any other existing icon under `public/skills/` (run `ls public/skills` to see options) rather than referencing a file that doesn't exist.

- [ ] **Step 2: Type check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Visual check**

With `npm run dev` running, navigate to the homepage Projects section with Playwright MCP and screenshot it. Expected: a FinSight card appears with the title, description, tags, and a working "view project" (eye icon) link - no broken image icon.

- [ ] **Step 4: Commit**

```bash
git add src/data/projects.ts
git commit -m "Add FinSight bank statement analyzer project"
```

---

## Task 5: Remove the Resume button, add a Book a Call button

**Files:**
- Create: `src/components/home/ui/BookCallButton.tsx`
- Delete: `src/components/home/ui/ResumeButton.tsx`
- Modify: `src/components/home/Section1.tsx:1-9` (imports), used again in Task 6's hero rewrite

**Interfaces:**
- Produces: `BookCallButton` component (default export, no props), a filled-button link to the cal.com URL, opening in a new tab.

- [ ] **Step 1: Create `BookCallButton.tsx`**

```tsx
import Link from "next/link";

const BookCallButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[12rem]"
      href="https://cal.com/vinay-jain/30min"
      target="_blank"
      rel="noopener noreferrer"
    >
      Book a Call
    </Link>
  );
};

export default BookCallButton;
```

- [ ] **Step 2: Delete `ResumeButton.tsx`**

```bash
rm src/components/home/ui/ResumeButton.tsx
```

- [ ] **Step 3: Update `Section1.tsx` to use `BookCallButton` instead of `ResumeButton`**

In `src/components/home/Section1.tsx`, replace the import `import ResumeButton from "./ui/ResumeButton";` with `import BookCallButton from "./ui/BookCallButton";`, and replace the JSX usage `<ResumeButton />` with `<BookCallButton />`. (This file gets a fuller rewrite in Task 6 for the two-column layout - this step just ensures the build doesn't break between commits.)

- [ ] **Step 4: Type check and build**

Run: `npx tsc --noEmit && npm run build`
Expected: both succeed - no references to the deleted `ResumeButton` remain.

- [ ] **Step 5: Commit**

```bash
git add src/components/home/ui/BookCallButton.tsx src/components/home/Section1.tsx
git rm src/components/home/ui/ResumeButton.tsx
git commit -m "Replace Resume button with Book a Call button"
```

---

## Task 6: Terminal-intro component

**Files:**
- Create: `src/components/common/TerminalIntro.tsx`

**Interfaces:**
- Produces: `TerminalIntro` component (default export, no props - copy is hardcoded since it's a one-off hero element, not reusable data).

The existing `TypewriterEffect.tsx` animates one line of characters fading in together on scroll-into-view; it doesn't support a multi-line, sequential command/output structure, so this is a new small component built with the same Framer Motion stagger approach.

- [ ] **Step 1: Create `TerminalIntro.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
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
  const [scope, animate] = useAnimate();
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
        "w-full max-w-[28rem] rounded-[var(--defaultRadius)] border border-[var(--borderColor)] bg-[var(--dialogColor)] overflow-hidden shadow-[var(--boxShadow)]",
        className
      )}
    >
      <div className="flex items-center gap-1.5 px-4 py-2 border-b border-[var(--borderColor)]">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--errorColor)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--warningColor)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--successColor)]" />
      </div>

      <div className="p-4 font-mono text-xs/6 md:text-sm/6 min-h-[7rem]">
        {lines.slice(0, visibleLines).map((line, idx) => (
          <motion.p
            key={`terminal-line-${idx}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={line.prompt ? "text-[var(--primaryColor)]" : "text-[var(--textColor)] pl-4"}
          >
            {line.prompt ? `${line.prompt} ${line.text}` : line.text}
          </motion.p>
        ))}
        {visibleLines >= lines.length ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block h-[1em] w-[0.5em] bg-[var(--primaryColor)] ml-4 align-middle"
          />
        ) : null}
      </div>
    </div>
  );
};

export default TerminalIntro;
```

- [ ] **Step 2: Type check**

Run: `npx tsc --noEmit`
Expected: no errors. (The component isn't used anywhere yet, so this only validates its own syntax/types.)

- [ ] **Step 3: Commit**

```bash
git add src/components/common/TerminalIntro.tsx
git commit -m "Add terminal-style intro animation component"
```

---

## Task 7: Hero rewrite (two-column layout with photo and terminal intro)

**Files:**
- Modify: `src/components/home/Section1.tsx` (full rewrite)

**Interfaces:**
- Consumes: `BookCallButton` (Task 5), `TerminalIntro` (Task 6), `TalkButton` (existing, unchanged), `socialLinks` (existing data, unchanged), `FlipWords` (existing, unchanged).
- Produces: `HomeSection1` component, same signature `({ id }: Readonly<{ id: string }>)` consumed unchanged by `src/app/page.tsx`.

- [ ] **Step 1: Rewrite `Section1.tsx`**

Replace the full contents of `src/components/home/Section1.tsx` with:

```tsx
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import socialLinks from "@/data/socialLinks";
import BookCallButton from "./ui/BookCallButton";
import TalkButton from "./ui/TalkButton";
import { FlipWords } from "../common/FlipWords";
import { TerminalIntro } from "../common/TerminalIntro";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-screen items-center justify-center relative overflow-hidden"
      id={id}
    >
      <ConstraintedBox classNames="px-4 py-8 pt-24 md:pt-16 z-20 items-center justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Column classNames="w-full items-start text-left gap-6">
            <div className="inline-flex flex-wrap items-center">
              <p className="text-2xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal dark:text-[var(--textColor)] text-[var(--textColor)] font-bold">
                Hi there, I am
              </p>
              <FlipWords
                words={["Vinay Jain", "@vinayjn18"]}
                className="text-2xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-bold"
              />
            </div>

            <p className="text-base/normal md:text-lg/normal dark:text-[var(--textColorLight)] text-[var(--textColorLight)]">
              Tech Lead & Founder, WebsiNova Technologies
            </p>

            <TerminalIntro />

            <Row classNames="gap-4 flex-col sm:flex-row">
              <BookCallButton />
              <TalkButton />
            </Row>

            <Column classNames="w-full items-start gap-2">
              <p className="text-base/6 font-medium">Follow me here</p>

              <Row classNames="gap-2">
                {socialLinks.slice(0, 5).map((link, index) => {
                  return (
                    <Link
                      key={`social-link-${index}`}
                      href={link.url}
                      target="_blank"
                      className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                      aria-label={`${link.name}`}
                    >
                      <span className="text-base/6 text-[var(--textColor)]">
                        <FontAwesomeIcon icon={link.icon} />
                      </span>
                    </Link>
                  );
                })}
              </Row>
            </Column>
          </Column>

          <div className="hidden md:flex w-full items-center justify-center">
            <div className="relative aspect-square w-full max-w-[26rem] rounded-[2rem] overflow-hidden border border-[var(--borderColor)] shadow-[var(--boxShadow)]">
              <Image
                src="/my-photo-orange-bg.png"
                alt="Vinay Jain"
                fill
                sizes="(min-width: 768px) 26rem, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
```

Notes on what changed from the original: dropped the `dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2]` dot-grid classes (Task 1/spec requirement), dropped the commented-out radial-gradient mask div, switched the outer layout to a responsive two-column grid, replaced `<ResumeButton />` with `<BookCallButton />`, added `<TerminalIntro />`, added the photo on the right column (hidden on mobile via `hidden md:flex` to avoid an awkward stacked square photo above the fold on small screens - the photo is a nice-to-have on desktop, not essential on mobile where vertical space is precious).

- [ ] **Step 2: Type check and build**

Run: `npx tsc --noEmit && npm run build`
Expected: both succeed.

- [ ] **Step 3: Visual check**

With `npm run dev` running, screenshot the homepage hero at both a desktop viewport (e.g. 1440x900) and a mobile viewport (e.g. 390x844) using Playwright MCP's `browser_resize` followed by `browser_take_screenshot`. Expected: desktop shows text + terminal card on the left, photo on the right, no overlap or clipping; mobile shows text + terminal card stacked, no photo, no horizontal scrollbar.

- [ ] **Step 4: Commit**

```bash
git add src/components/home/Section1.tsx
git commit -m "Rewrite hero into two-column layout with photo and terminal intro"
```

---

## Task 8: Remove the Services section

**Files:**
- Delete: `src/data/services.ts`
- Delete: `src/components/home/ui/AnimatedServiceCard.tsx`
- Delete: `src/components/common/HoverLayoutGrid.tsx`
- Modify: `src/types/index.ts` (remove `IServiceItem`)
- Modify: `src/data/navMenus.ts` (remove the "services" entries from both arrays)

**Interfaces:**
- Produces: `navMenus: INavMenuItem[]` and `menuItems: INavItem[]` with 5 entries each instead of 6 (no "Services"/"services").

`Section2.tsx` still imports `HoverLayoutGrid` and `services` at this point - Task 9 replaces `Section2.tsx`'s contents in the same commit-adjacent change, but to keep each commit buildable, this task and Task 9 are combined into one set of build-verification steps (deleting the services files first would break the still-unmodified `Section2.tsx`).

- [ ] **Step 1: Confirm nothing else references the files being deleted**

Run: `grep -rn "services\b\|HoverLayoutGrid\|AnimatedServiceCard\|IServiceItem" src --include="*.tsx" --include="*.ts"`
Expected output: only matches inside `src/data/services.ts`, `src/components/home/ui/AnimatedServiceCard.tsx`, `src/components/common/HoverLayoutGrid.tsx`, `src/types/index.ts`, `src/data/navMenus.ts`, and `src/components/home/Section2.tsx`. If anything else matches, stop and investigate before deleting.

- [ ] **Step 2: Delete the three files**

```bash
rm src/data/services.ts src/components/home/ui/AnimatedServiceCard.tsx src/components/common/HoverLayoutGrid.tsx
```

- [ ] **Step 3: Remove `IServiceItem` from `src/types/index.ts`**

Delete this block from `src/types/index.ts`:

```ts
export type IServiceItem = {
  id: number | string;
  title: string;
  icon?: IconDefinition;
  shortDescription: string;
  description: string;
  icons: string[];
};
```

(Leave everything else in the file unchanged. If `IconDefinition` is no longer referenced anywhere else in the file after this removal, check with `grep -n "IconDefinition" src/types/index.ts` - if it's still used by `INavItem` or `ISocialLinkItem`, leave the import as-is.)

- [ ] **Step 4: Remove the "Services"/"services" entries from `navMenus.ts`**

In `src/data/navMenus.ts`, delete this object from the `navMenus` array:

```ts
  {
    id: "services",
    title: "Services",
    path: "/#services",
    section: "services",
  },
```

And delete this object from the `menuItems` array:

```ts
  {
    name: "Services",
    link: "/#services",
    icon: faBriefcase,
  },
```

If `faBriefcase` is no longer used elsewhere in the file after this removal, remove it from the `import` statement at the top too (check with `grep -n "faBriefcase" src/data/navMenus.ts`).

- [ ] **Step 5: Proceed directly to Task 9** (do not type-check/build yet - `Section2.tsx` still references the deleted files until Task 9 rewrites it)

---

## Task 9: About section (replaces Services section content)

**Files:**
- Modify: `src/components/home/Section2.tsx` (full rewrite)

**Interfaces:**
- Produces: `HomeSection2` component, same signature `({ id }: { id: string })` consumed unchanged by `src/app/page.tsx`. The `id` value passed in from `page.tsx` is currently `"services"` - this also needs updating (Step 2 below).

- [ ] **Step 1: Rewrite `Section2.tsx`**

Replace the full contents of `src/components/home/Section2.tsx` with:

```tsx
import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import SectionTitle from "@/components/common/SectionTitle";

const capabilities = [
  "Full-Stack Development",
  "Backend Architecture",
  "AI/RAG Systems",
  "Chatbot Development",
  "AI Consultancy",
];

const HomeSection2 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
      id={id}
    >
      <ConstraintedBox classNames="p-4 py-16 z-20">
        <SectionTitle>About</SectionTitle>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-base/7 md:text-lg/8 text-[var(--textColor)]">
            I&apos;m Vinay Jain, a Tech Lead turned founder. I started as a Python
            developer, grew into full-stack development, and spent two years leading
            a team of 5 engineers across a climatetech ESG platform and a legal tech
            SaaS, owning architecture, sprint delivery, and client communication for
            both. In June 2026 I started WebsiNova Technologies, where I now provide
            full-stack and AI development services to clients directly. My focus is
            RAG-based AI systems, microservice architecture, and full-stack
            development with React, Node.js, and FastAPI.
          </p>
        </div>

        <Row classNames="flex-wrap justify-center gap-3 mt-10">
          {capabilities.map((capability) => (
            <span
              key={capability}
              className="rounded-full border border-[var(--primaryColor50)] text-[var(--primaryColor)] px-4 py-2 text-sm/6 font-medium"
            >
              {capability}
            </span>
          ))}
        </Row>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection2;
```

- [ ] **Step 2: Update the `id` passed in `src/app/page.tsx`**

In `src/app/page.tsx`, change `<HomeSection2 id="services" />` to `<HomeSection2 id="about" />` (this now matches the `"about"` nav entry already present in `navMenus.ts`).

- [ ] **Step 3: Type check and build**

Run: `npx tsc --noEmit && npm run build`
Expected: both succeed - confirms Task 8's deletions and Task 9's rewrite are consistent together.

- [ ] **Step 4: Visual check**

With `npm run dev` running, screenshot the homepage and click the "About" nav link with Playwright MCP. Expected: scrolls to a section with the bio paragraph and a row of capability tags - no Services cards remain anywhere on the page, "Mobile App Development" does not appear anywhere on the site.

- [ ] **Step 5: Commit**

```bash
git add -A -- src/data/services.ts src/components/home/ui/AnimatedServiceCard.tsx src/components/common/HoverLayoutGrid.tsx src/types/index.ts src/data/navMenus.ts src/components/home/Section2.tsx src/app/page.tsx
git commit -m "Replace Services section with About section and capability tags"
```

---

## Task 10: Commit-graph experience timeline

**Files:**
- Create: `src/components/home/ui/ExperienceTimelineNode.tsx`
- Delete: `src/components/home/ui/ExperienceItem.tsx`
- Modify: `src/components/home/Section3.tsx` (full rewrite)

**Interfaces:**
- Consumes: `IExperienceItem` (existing type, unchanged), `experiences` data (Task 3).
- Produces: `ExperienceTimelineNode` component, props `{ data: IExperienceItem; isLast: boolean }`.

- [ ] **Step 1: Create `ExperienceTimelineNode.tsx`**

```tsx
import type { IExperienceItem } from "@/types";
import { Balancer } from "react-wrap-balancer";

const ExperienceTimelineNode = ({
  data,
  isLast,
}: Readonly<{ data: IExperienceItem; isLast: boolean }>) => {
  return (
    <div className="relative pl-10 pb-12 last:pb-0">
      {!isLast ? (
        <span className="absolute left-[7px] top-3 bottom-0 w-px bg-[var(--borderColor)]" />
      ) : null}

      <span
        className={`absolute left-0 top-1 h-4 w-4 rounded-full border-2 ${
          data.isCurrentJob
            ? "bg-[var(--primaryColor)] border-[var(--primaryColor)]"
            : "bg-[var(--dialogColor)] border-[var(--primaryColor)]"
        }`}
      />

      <div className="flex flex-wrap items-baseline gap-2">
        <p className="text-lg/6 font-semibold text-[var(--textColor)]">
          {data.designation}
        </p>
        <p className="text-base/6 text-[var(--textColorLight)]">
          @ {data.company}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 mt-1">
        <span className="rounded-full border border-[var(--textColor)] text-[var(--textColor)] px-2 py-0.5 text-xs/6 font-medium uppercase">
          {data.startDate} - {data.isCurrentJob ? "Present" : data.endDate}
        </span>
        <span className="text-xs/6 text-[var(--textColorLight)]">
          {data.location}
        </span>
      </div>

      <p className="mt-3 text-base/6 text-[var(--textColor)] max-w-3xl">
        <Balancer>{data.description}</Balancer>
      </p>
    </div>
  );
};

export default ExperienceTimelineNode;
```

- [ ] **Step 2: Delete `ExperienceItem.tsx`**

```bash
rm src/components/home/ui/ExperienceItem.tsx
```

- [ ] **Step 3: Rewrite `Section3.tsx`**

Replace the full contents of `src/components/home/Section3.tsx` with:

```tsx
import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import ExperienceTimelineNode from "./ui/ExperienceTimelineNode";
import experiences from "@/data/experiences";

const HomeSection3 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
      id={id}
    >
      <ConstraintedBox classNames="p-4 py-16">
        <SectionTitle>Experience</SectionTitle>

        <div className="max-w-2xl mx-auto w-full mt-16">
          {experiences.map((experience, index) => (
            <ExperienceTimelineNode
              key={`experience-${index}`}
              data={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection3;
```

- [ ] **Step 4: Type check and build**

Run: `npx tsc --noEmit && npm run build`
Expected: both succeed.

- [ ] **Step 5: Visual check**

With `npm run dev` running, screenshot the Experience section with Playwright MCP. Expected: a vertical line with 4 dot-nodes (WebsiNova, GreenFi & Lejit AI, Intel, Creative Finserve), the current role's dot visually distinct (filled) from past roles (hollow), full description text visible for each without needing hover, no clipped/cut-off text.

- [ ] **Step 6: Commit**

```bash
git add src/components/home/ui/ExperienceTimelineNode.tsx src/components/home/Section3.tsx
git rm src/components/home/ui/ExperienceItem.tsx
git commit -m "Replace experience card grid with commit-graph-style timeline"
```

---

## Task 11: Add Book a Call to the Get in Touch section

**Files:**
- Modify: `src/components/home/Section6.tsx`

**Interfaces:**
- Consumes: `SocialButton` (existing, unchanged).

- [ ] **Step 1: Add a Book a Call entry**

In `src/components/home/Section6.tsx`, add the import:

```tsx
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
```

Then, inside the `<GridBox>`, before the `{socialLinks.map(...)}` block, add:

```tsx
            <SocialButton
              text="Book a Call"
              icon={faCalendarCheck}
              url="https://cal.com/vinay-jain/30min"
            />
```

(`SocialButton` takes `{ text, icon, url }` per `ISocialLinkItem` - `faCalendarCheck` satisfies the `IconDefinition` type the same way each `link.icon` does.)

- [ ] **Step 2: Type check and build**

Run: `npx tsc --noEmit && npm run build`
Expected: both succeed.

- [ ] **Step 3: Visual check**

With `npm run dev` running, screenshot the "Get in Touch" section with Playwright MCP. Expected: a "Book a Call" button appears first in the grid, styled identically to the social buttons, opens the cal.com link in a new tab when clicked.

- [ ] **Step 4: Commit**

```bash
git add src/components/home/Section6.tsx
git commit -m "Add Book a Call CTA to Get in Touch section"
```

---

## Task 12: Full-site review pass

**Files:** none (verification only)

- [ ] **Step 1: Full build**

Run: `npx tsc --noEmit && npm run build`
Expected: both succeed cleanly.

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: no errors (warnings about pre-existing code are acceptable, but nothing new from this change set).

- [ ] **Step 3: Full-page visual review**

With `npm run dev` running, use Playwright MCP to:
1. Screenshot the full homepage (desktop viewport, full page).
2. Screenshot the full homepage (mobile viewport 390x844, full page).
3. Click through every nav link (About, Experience, Skills, Projects, Contact) and confirm each scrolls to the correct section (no dead "Services" link remains in the nav).
4. Click "Book a Call" in the hero and confirm it opens `https://cal.com/vinay-jain/30min` in a new tab.
5. Click "Book a Call" in Get in Touch and confirm the same.

Expected: warm cream/terracotta palette throughout, no leftover dark/neon-green styling, no Services section, About section with photo (desktop) + terminal intro + capability tags, commit-graph timeline in Experience, FinSight visible in Projects, no horizontal scroll on mobile, no console errors.

- [ ] **Step 4: Fix any visual issues found**

If Step 3 reveals issues (clipped text, broken links, color contrast problems), fix them directly in the relevant file from Tasks 1-11 and re-run Steps 1-3 until clean. This step intentionally has no fixed checklist since the issues, if any, depend on what Step 3 actually finds.

- [ ] **Step 5: Final commit (only if Step 4 made changes)**

```bash
git add -A
git commit -m "Fix visual issues found in full-site review"
```
