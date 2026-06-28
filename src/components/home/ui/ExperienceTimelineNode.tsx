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
