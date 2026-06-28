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
