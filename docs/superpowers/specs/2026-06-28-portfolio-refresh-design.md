# Portfolio content & visual refresh - design

## Goal

Update the portfolio (vinay-jain-portfolio) to reflect the current resume (Tech Lead at GreenFi & Lejit AI, May 2026 departure, new venture WebsiNova Technologies, new FinSight project), remove the resume PDF link, and move the visual design away from the current dark "AI-generated SaaS template" look (near-black background, neon green, glowing dot-grid) toward a warm, personal, professional look that supports converting visitors into client calls.

## Non-goals

- No change to the projects detail page (`/projects`) layout or gallery modal.
- No change to typography (Poppins stays).
- No dark mode toggle - light warm theme only, replacing dark theme entirely.
- No change to the GitHub/Vercel API helpers in `src/apis/data.ts` (unused by current pages, out of scope).
- Actual resume PDFs stay in `public/` (unlinked from the UI, kept in case they're shared directly).

## 1. Content updates (`src/data/`)

### `experiences.ts`

Replace the current single "AI & Full Stack Developer - GreenFi" entry with two entries:

1. **Tech Lead - GreenFi & Lejit AI**, June 2024 - May 2026, not current.
   - Short description: led a team of 5 developers across two products (GreenFi climatetech/ESG platform, Lejit AI legal tech SaaS), owning architecture, sprint delivery, and client communication; grew from Python developer to Tech Lead.
   - Full description: covers GreenFi's RAG pipeline (LLMs + Milvus + FastAPI) for ESG document QnA, AWS infra (EC2, RDS, S3, CloudFront, Lambda) serving 100+ endpoints; Lejit AI's multi-role platform (lawyers, citizens, corporates, law students, law enforcement), RAG-based legal AI features (document QnA, drafting, case comparison, legal opinions), multi-tenant law enforcement module, Razorpay/Twilio OTP/i18n (16 languages) integration; and taking over both codebases with no handover from the prior vendor.
2. **Founder - WebsiNova Technologies**, June 2026 - Present, current.
   - Short description: providing full-stack and AI development services to clients.
   - Full description: applying the architecture, RAG/AI, and team-leadership experience from GreenFi/Lejit AI to client engagements.

Intel ML internship and Creative Finserve backend internship entries are unchanged.

### `projects.ts`

Add a new entry for **FinSight: Bank Statement Analyzer**:
- Personal project, public-facing web app (no GitHub link provided in resume, so `githubUrl` omitted).
- Description: extracts transactions from bank statement PDFs using AI, categorizes expenses, shows spending insights via interactive charts, CSV/PDF export, no signup, no server-side data storage.
- Tags: Next.js, FastAPI, OpenAI.
- `url`: the live Vercel deployment link (to be provided/confirmed at implementation time if not already known).

### Resume removal

- Delete `src/components/home/ui/ResumeButton.tsx`.
- Remove its usage from `src/components/home/Section1.tsx`.
- Leave `public/Vinay-Jain-Resume.pdf` and `public/Vinay_Jain__Updated-Resume.pdf` in place, just unlinked.

## 2. Visual design system

Replace the CSS custom properties in `src/app/globals.scss` (`:root` block) from the current dark/neon-green palette to a light, warm palette:

- `--bgColor`: warm cream/off-white (e.g. `#FAF6F1` range) replacing near-black `rgb(10,13,15)`.
- `--dialogColor` (alternating section/card surface): a slightly deeper warm sand tone, replacing dark slate `rgb(18,22,27)`.
- `--textColor`: dark warm charcoal/espresso, replacing near-white.
- `--textColorLight`: a softer warm gray-brown, replacing light gray.
- `--primaryColor`: terracotta/burnt-orange (complements the photo's orange background), replacing neon green `rgb(0,177,113)`.
- `--secondaryColor`: warm amber, replacing mint-green `rgb(35,230,134)` (used in `--primaryGrad` and button hover states).
- `--borderColor`, `--boxShadow`, `--navBarShadow`: re-tuned to warm-toned, softer shadows instead of pure black.
- Link/success/error/warning colors stay functionally the same hue family but checked for contrast against the light background.

All `-10` through `-100` opacity variants of each token get regenerated from the new base colors (same pattern as today).

Remove the dot-grid/glow background utilities from where they're applied:
- `Section1.tsx`: drop `bg-grid-small-white/[0.2]` classes.
- `Section2.tsx`: drop `bg-dot-white/[0.2]` classes.

No layout primitive (`PageBox`, `ResponsiveBox`, `CardBox`, etc.) changes - they're unstyled wrappers that just consume the vars.

## 3. Page structure & components

### Hero (`Section1.tsx`)

Two-column split on desktop (`md:` and up), stacked on mobile:
- Left: "Hi there, I am [FlipWords]" heading, subtitle, CTA row, social row (unchanged content, restyled).
- Right: the photo (`public/my-photo-orange-bg.png`), shown in a soft rounded-frame container consistent with `--borderRadius`.

CTA row: **Book a Call** (filled button, links to `https://cal.com/vinay-jain/30min`, opens in new tab) + **Let's Talk** (existing `TalkButton`, outlined, WhatsApp). Resume button removed.

### New About section

New component (e.g. `src/components/home/Section1b.tsx` or renumber existing sections - exact filename decided at implementation time), inserted between hero and Skills, with `id="about"` - this matches an existing nav entry in `src/data/navMenus.ts` that currently points to a non-existent section.

Content: short personal narrative - Tech Lead at GreenFi & Lejit AI -> founder of WebsiNova Technologies, current focus (AI/RAG systems, full-stack development, team leadership), framed toward availability for client work. Text-only (photo already shown in hero, avoiding repetition).

Below the narrative, a compact capability tag row (not full cards): Full-Stack Development, Backend Architecture, AI/RAG Systems, Chatbot Development, AI Consultancy. This replaces the dedicated Services section (see below) - same "I do this and have experience in it" signal, without a full scroll-stop of generic service-card copy.

### Services section - removed

The dedicated Services section (`Section2.tsx`, `HoverLayoutGrid.tsx`, `AnimatedServiceCard.tsx`, `src/data/services.ts`) is removed entirely as its own scroll-stop. Rationale: six animated cards with paragraph-length generic copy ("I deliver stunning, user-friendly websites...") reads like an agency landing page, not a personal portfolio, and is one of the more obvious "AI template" tells on the current site. The same signal is carried by the About section's capability tag row instead. "Mobile App Development" is dropped from the capability list (no longer an offered service). `navMenus.ts` loses its "Services" entry; `page.tsx` no longer renders `HomeSection2`.

### Experience section -> commit-graph timeline (`ExperienceItem.tsx`, `Section3.tsx`)

Replaces the hover-flip card grid with a vertical git-log/commit-graph-style timeline: a vertical "branch" line with commit-node dots per role, connecting lines between them, each node expanding into a card with role/company/dates and the description (no hover-to-reveal needed since there's room for full text directly). Visually reinforces "developer" without being a literal terminal pastiche. Needs enough vertical room for the longer GreenFi & Lejit AI entry's full description.

### Skills / Projects sections

No structural change - same components (`ProjectItem`, etc.), restyled to new palette only.

### Get in Touch (`Section6.tsx`)

Add a "Book a Call" entry alongside the existing `SocialButton` grid, same visual treatment, linking to the cal.com URL.

### Navbar

No structural change, restyled colors only. "About" nav link now resolves to the new section instead of a missing anchor.

## 4. Developer-themed animation

Two pieces, combined:

1. **Terminal intro in the hero.** A small terminal-window component (rounded warm-toned chrome, monospace text, blinking caret) sitting near the hero copy/photo, typing out something like:
   ```
   $ whoami
   Vinay Jain - Tech Lead, AI & Full-Stack Developer
   $ status
   Available for new client work
   ```
   Looping or one-shot on load (one-shot preferred so it doesn't distract on repeat visits/long dwell time). The repo's existing `TypewriterEffect.tsx` only staggers a single line of characters in on view - it doesn't fit a multi-line command/output sequence, so this needs a small new component (`TerminalIntro.tsx` or similar) built with the same framer-motion stagger approach rather than a new dependency.
2. **Commit-graph timeline for Experience**, as described above.

Both are genuinely different from generic scroll-fade-in animation and tie directly to "this person is a developer" rather than being decorative motion.

## Style notes (content writing)

- No em dashes anywhere in copy - use a hyphen (`-`) instead, per explicit instruction.
- Copy should read like a real person wrote it, not generic AI marketing copy - keep sentences concrete and specific to actual work described in the resume, avoid buzzword-stacking.

## Open items to confirm at implementation time

- Exact hex values for the warm palette (terracotta/amber/cream) - will pick specific values during implementation and can be adjusted visually.
- Live URL for FinSight if not already `https://finsight...` (confirm exact link).
