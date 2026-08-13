import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import ProjectList from "./ui/ProjectList";
import projects from "@/data/projects";

const HomeSection5 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      as="section"
      ariaLabel="Selected projects"
      classNames="bg-[var(--bgColor)] items-center justify-center"
      id={id}
    >
      <ConstraintedBox classNames="px-5 sm:px-8 section__pad">
        <SectionTitle
          index="04"
          eyebrow="Work"
          lead="My own product at WebsiNova, the two platforms I led as tech lead, and the smaller things I build when a problem annoys me enough."
        >
          Selected projects.
        </SectionTitle>

        <div className="w-full mt-14">
          <ProjectList projects={projects} />
        </div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection5;
