import { SkillLevel, type ISkillListItem } from "@/types";
import Image from "next/image";

const SkillItem = ({ data }: { data: ISkillListItem }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[13rem_1fr] gap-x-10 gap-y-4 border-b border-[var(--borderColor)] py-7">
      <h3 className="!text-base md:!text-lg font-semibold text-[var(--textColor)] md:pt-1.5">
        {data.title}
      </h3>

      {data.items.length > 0 ? (
        <ul className="flex flex-wrap gap-2">
          {data.items.map((skill) => (
            <li
              key={skill.title}
              className="inline-flex items-center gap-2 rounded-sm border border-[var(--borderColor)] bg-[var(--surfaceColor)] pl-2 pr-3 py-1.5 shadow-xs transition-colors duration-200 ease-out hover:border-[var(--primaryColor50)]"
            >
              {skill.icon ? (
                <Image
                  src={skill.icon}
                  alt=""
                  aria-hidden="true"
                  width={40}
                  height={40}
                  loading="lazy"
                  className="h-5 w-5 object-contain"
                />
              ) : null}

              <span className="text-sm/6 font-medium text-[var(--textColor)]">
                {skill.title}
              </span>

              {skill.level === SkillLevel.Expert ? (
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[var(--primaryColor)]"
                  title={`${skill.title} — strongest level`}
                />
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SkillItem;
