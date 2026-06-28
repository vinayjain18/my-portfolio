import { IProjectItem } from "@/types";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  return (
    <div className="w-full mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
      {projects.map((item, index) => {
        return <ProjectItem key={`project-item-${index}`} project={item} />;
      })}
    </div>
  );
};

export default ProjectList;
