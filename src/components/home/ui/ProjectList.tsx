import { IProjectItem } from "@/types";
import ProjectItem from "./ProjectItem";
import ProjectFeature from "./ProjectFeature";
import ProjectRow from "./ProjectRow";
import Reveal from "@/components/common/Reveal";

const FEATURED_COUNT = 3;

const ProjectList = ({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  const [lead, ...featured] = projects.slice(0, FEATURED_COUNT);
  const rest = projects.slice(FEATURED_COUNT);

  return (
    <div className="w-full">
      {lead ? (
        <Reveal>
          <ProjectFeature project={lead} />
        </Reveal>
      ) : null}

      {featured.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 items-stretch">
          {featured.map((project, index) => (
            <Reveal key={project.id} step={index} className="h-full">
              <ProjectItem project={project} />
            </Reveal>
          ))}
        </div>
      ) : null}

      {rest.length > 0 ? (
        <div className="mt-16">
          <p className="label pb-4 border-b border-[var(--borderColorStrong)]">
            More work
          </p>

          {rest.map((project, index) => (
            <Reveal key={project.id} step={Math.min(index, 4)}>
              <ProjectRow
                project={project}
                index={index + FEATURED_COUNT + 1}
              />
            </Reveal>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ProjectList;
