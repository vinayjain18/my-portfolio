import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/common/Reveal";
import SkillItem from "./ui/SkillItem";
import skills from "@/data/skills";

const HomeSection4 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      as="section"
      ariaLabel="Skills and tools"
      classNames="bg-[var(--dialogColor)] items-center justify-center"
      id={id}
    >
      <ConstraintedBox classNames="px-5 sm:px-8 section__pad">
        <SectionTitle
          index="03"
          eyebrow="Toolkit"
          lead={
            <>
              What I reach for day to day. A dot marks the ones I&apos;ve shipped
              production systems with.
            </>
          }
        >
          Tools I work in.
        </SectionTitle>

        <div className="w-full mt-14 border-t border-[var(--borderColorStrong)]">
          {skills.map((skill, index) => (
            <Reveal key={skill.title} step={Math.min(index, 5)}>
              <SkillItem data={skill} />
            </Reveal>
          ))}
        </div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection4;
