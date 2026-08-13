"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import ScreenshotGallery from "./components/ScreenshotGallery";
import { getProjectDetails } from "@/data/projects";
import { ProjectType, RepoType } from "@/types";

const renderProjectType = (type?: ProjectType) => {
  switch (type) {
    case ProjectType.Personal:
      return "Personal project";

    case ProjectType.JobWork:
      return "Client work";

    case ProjectType.Freelance:
      return "Freelance project";

    case ProjectType.Product:
      return "WebsiNova product";

    default:
      return null;
  }
};

const ProjectsSection1 = ({ id }: Readonly<{ id?: string }>) => {
  const searchParams = useSearchParams();
  const project = getProjectDetails(searchParams.get("id")!);

  if (!project) {
    return (
      <ResponsiveBox
        as="section"
        classNames="bg-[var(--bgColor)] min-h-[100dvh] justify-center"
        id={id}
      >
        <ConstraintedBox classNames="px-5 sm:px-8 py-24 gap-6">
          <p className="label text-[var(--primaryColor)]">No such project</p>

          <h1 className="font-display">That project isn&apos;t here.</h1>

          <p className="measure text-base/8 text-[var(--textColorLight)]">
            The link may point at work that has since been taken down. The
            current list is on the home page.
          </p>

          <Link href="/#projects" className="app__filled_btn">
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to projects
          </Link>
        </ConstraintedBox>
      </ResponsiveBox>
    );
  }

  return (
    <ResponsiveBox
      as="header"
      classNames="bg-[var(--dialogColor)] border-b border-[var(--borderColor)]"
      id={id}
    >
      <ConstraintedBox classNames="px-5 sm:px-8 pt-10 pb-14 gap-8">
        <Link
          href="/#projects"
          className="inline-flex w-fit shrink-0 items-center gap-2 whitespace-nowrap text-sm/6 font-medium text-[var(--textColorLight)] transition-colors duration-200 ease-out hover:text-[var(--primaryColor)]"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          All projects
        </Link>

        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-[var(--borderColor)] bg-[var(--surfaceColor)] p-2.5">
              <Image
                src={project.icon}
                alt=""
                aria-hidden="true"
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </span>

            <div className="flex flex-col">
              <span className="label">
                {renderProjectType(project.projectType)}
              </span>
              <span className="label !text-[var(--textColorLight)]">
                {project.repoType === RepoType.Private
                  ? "Private repo"
                  : "Public"}
              </span>
            </div>
          </div>

          <h1 className="font-display !text-4xl md:!text-5xl">
            {project.title}
          </h1>

          {project.tags && project.tags.length > 0 ? (
            <ul className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="mono rounded-xs border border-[var(--borderColor)] bg-[var(--surfaceColor)] px-2 py-0.5 text-xs/5 text-[var(--textColorLight)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.url ? (
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="app__filled_btn"
              >
                Open project
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-xs -rotate-45"
                />
              </Link>
            ) : null}

            {project.githubUrl ? (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="app__outlined_btn"
              >
                <FontAwesomeIcon icon={faGithub} />
                View source
              </Link>
            ) : null}
          </div>
        </div>

        {project.sceenshots && project.sceenshots.length > 0 ? (
          <ScreenshotGallery imageList={project.sceenshots} />
        ) : null}
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default ProjectsSection1;
