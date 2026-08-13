import { RepoType, type IProjectItem } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import CardBox from "@/components/core/CardBox";

const ProjectItem = ({ project }: { project: IProjectItem }) => {
  return (
    <CardBox classNames="h-full p-7 md:p-8">
      <div className="flex w-full flex-1 flex-col items-start gap-5">
        <div className="flex w-full items-start justify-between gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-[var(--borderColor)] bg-[var(--dialogColor)] p-2.5">
            <Image
              src={project.icon}
              alt=""
              aria-hidden="true"
              width={96}
              height={96}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </span>

          <span
            className={`label shrink-0 !text-[0.625rem] ${
              project.repoType === RepoType.Private
                ? "text-[var(--textColorLight)]"
                : "text-[var(--successColor)]"
            }`}
          >
            {project.repoType === RepoType.Private ? "Private repo" : "Public"}
          </span>
        </div>

        <h3 className="font-display !text-xl md:!text-2xl mt-1">
          {project.url ? (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--textColor)] transition-colors duration-200 ease-out hover:text-[var(--primaryColor)]"
            >
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>

        <p className="text-sm/7 text-[var(--textColorLight)]">
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 ? (
          <ul className="flex w-full flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-xs border border-[var(--borderColor)] px-2 py-0.5 text-xs/5 font-medium text-[var(--textColorLight)] mono"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex w-full items-center gap-5 pt-3">
          {project.url ? (
            <Link
              href={project.url}
              aria-label={`Open ${project.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="app__text_btn group/link"
            >
              View project
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xs -rotate-45 transition-transform duration-200 ease-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </Link>
          ) : null}

          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              aria-label={`${project.title} source on GitHub`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm/6 font-medium text-[var(--textColorLight)] transition-colors duration-200 ease-out hover:text-[var(--textColor)]"
            >
              <FontAwesomeIcon icon={faGithub} />
              Source
            </Link>
          ) : null}

          {!project.url && !project.githubUrl ? (
            <p className="text-sm/6 text-[var(--textColorLight)]">
              Client work under NDA
            </p>
          ) : null}
        </div>
      </div>
    </CardBox>
  );
};

export default ProjectItem;
