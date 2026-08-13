import type { ReactNode } from "react";

type SectionTitleProps = Readonly<{
  /** Two-digit section counter shown in the mono eyebrow, e.g. "01" */
  index?: string;
  /** Short mono label sitting above the heading */
  eyebrow?: string;
  /** Supporting sentence under the heading */
  lead?: ReactNode;
  children: ReactNode;
}>;

const SectionTitle = ({ index, eyebrow, lead, children }: SectionTitleProps) => {
  return (
    <header className="w-full max-w-4xl">
      {index || eyebrow ? (
        <div className="flex items-center gap-3">
          {index ? (
            <span className="label text-[var(--primaryColor)]">{index}</span>
          ) : null}
          {eyebrow ? <span className="label">{eyebrow}</span> : null}
          <span
            aria-hidden="true"
            className="h-px flex-1 max-w-[7rem] bg-[var(--borderColorStrong)]"
          />
        </div>
      ) : null}

      <h2 className="mt-4 font-display text-[var(--textColor)]">{children}</h2>

      {lead ? (
        <p className="mt-5 measure text-base/7 md:text-lg/8 text-[var(--textColorLight)]">
          {lead}
        </p>
      ) : null}
    </header>
  );
};

export default SectionTitle;
