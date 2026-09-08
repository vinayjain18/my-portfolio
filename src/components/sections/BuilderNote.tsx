import Reveal from "@/components/common/Reveal";

/**
 * Deliberately the quietest section on the page.
 *
 * Everything stated here is drawn from the experience data — the internship,
 * the handover-less codebase, the team of five, the empty repository, the
 * company. No hobbies, no interests, no invented personal detail.
 */
const loop = ["Build", "Solve", "Iterate"];

const BuilderNote = () => {
  return (
    <section
      id="note"
      aria-label="A note on how I work"
      className="relative w-full bg-[var(--bgColor)]"
    >
      <div className="constrained-width section__pad mx-auto w-full px-5 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="label">Beyond the work</p>
          </Reveal>

          <Reveal step={1}>
            <h2 className="mt-6 font-display text-[var(--textColor)]">
              Same engineer.
              <br />
              Bigger problems to solve.
            </h2>
          </Reveal>

          <Reveal step={2}>
            <p className="mt-8 text-lg/9 text-[var(--textColorLight)] md:text-xl/10">
              I started out writing Django backends as an intern. Since then
              I&apos;ve taken over a codebase with no handover, led a team of
              five, architected a platform from an empty repository, and started
              a company. The problems have changed size. The loop hasn&apos;t.
            </p>
          </Reveal>

          <Reveal step={3}>
            <ol className="mt-14 flex flex-col border-t border-[var(--borderColorStrong)] sm:flex-row sm:border-t-0">
              {loop.map((phase, index) => (
                <li
                  key={phase}
                  className="flex items-baseline gap-4 border-b border-[var(--borderColor)] py-5 sm:flex-1 sm:flex-col sm:gap-3 sm:border-b-0 sm:border-t sm:pt-6"
                >
                  <span className="label text-[var(--primaryColor)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl font-semibold tracking-[-0.02em] text-[var(--textColor)]">
                    {phase}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BuilderNote;
