import type { IExperienceItem } from "@/types";

const ExperienceTimelineNode = ({
  data,
  isLast,
}: Readonly<{ data: IExperienceItem; isLast: boolean }>) => {
  return (
    <article
      className={`group grid grid-cols-1 md:grid-cols-[11rem_1fr] gap-x-10 gap-y-4 py-9 border-t border-[var(--borderColor)] ${
        isLast ? "border-b" : ""
      }`}
    >
      <div className="flex flex-row md:flex-col md:items-start flex-wrap items-center gap-x-3 gap-y-2">
        <p className="label !text-[var(--textColor)] !tracking-[0.08em]">
          {data.startDate} — {data.isCurrentJob ? "Present" : data.endDate}
        </p>

        {data.isCurrentJob ? (
          <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[var(--successColor)] mono">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--successColor)]" />
            Current
          </span>
        ) : null}

        <p className="text-xs/6 text-[var(--textColorLight)]">
          {data.location}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-baseline gap-x-2.5">
          <h3 className="font-display !text-xl md:!text-2xl">
            {data.designation}
          </h3>
          <span aria-hidden="true" className="text-[var(--borderColorStrong)]">
            /
          </span>
          <p className="text-base/7 font-medium text-[var(--primaryColor)]">
            {data.company}
          </p>
        </div>

        {data.concurrentNote ? (
          <p className="text-sm/6 text-[var(--textColorLight)] italic">
            {data.concurrentNote}
          </p>
        ) : null}

        {data.roles && data.roles.length > 0 ? (
          <ol className="flex flex-col gap-1.5 border-l border-[var(--borderColorStrong)] pl-4 py-0.5 my-1">
            {data.roles.map((role, index) => {
              const isLatest = index === data.roles!.length - 1;

              return (
                <li
                  key={role.title}
                  className="flex flex-wrap items-baseline gap-x-3"
                >
                  <span
                    className={`text-sm/6 ${
                      isLatest
                        ? "font-semibold text-[var(--textColor)]"
                        : "font-medium text-[var(--textColorLight)]"
                    }`}
                  >
                    {role.title}
                  </span>
                  <span className="mono text-xs/6 text-[var(--textColorLight)]">
                    {role.startDate} — {role.endDate}
                  </span>
                </li>
              );
            })}
          </ol>
        ) : null}

        <div className="flex flex-col gap-3">
          {data.description.map((paragraph, index) => (
            <p
              key={`paragraph-${index}`}
              className="measure text-sm/7 md:text-base/8 text-[var(--textColorLight)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ExperienceTimelineNode;
