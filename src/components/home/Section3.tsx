import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/common/Reveal";
import ExperienceTimelineNode from "./ui/ExperienceTimelineNode";
import experiences from "@/data/experiences";

const HomeSection3 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      as="section"
      ariaLabel="Work experience"
      classNames="bg-[var(--bgColor)] items-center justify-center"
      id={id}
    >
      <ConstraintedBox classNames="px-5 sm:px-8 section__pad">
        <SectionTitle
          index="02"
          eyebrow="Experience"
          lead="Python and AI engineer to tech lead in thirteen months, then founding engineer on a product built from an empty repository. The short version is below; the long version is a good first call."
        >
          Where I&apos;ve worked.
        </SectionTitle>

        <div className="w-full mt-14">
          {experiences.map((experience, index) => (
            <Reveal key={`${experience.company}-${experience.startDate}`} step={index}>
              <ExperienceTimelineNode
                data={experience}
                isLast={index === experiences.length - 1}
              />
            </Reveal>
          ))}
        </div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection3;
