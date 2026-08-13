import type { IProjectItem } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

/**
 * Compact ruled row for secondary projects — deliberately not a card,
 * so the two featured projects above keep their weight.
 */
const ProjectRow = ({
  project,
  index,
}: Readonly<{ project: IProjectItem; index: number }>) => {
  return (
    <article className="group grid grid-cols-1 md:grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-6 gap-y-3 border-b border-[var(--borderColor)] py-6 transition-colors duration-200 ease-out hover:border-[var(--primaryColor50)]">
      <span className="label text-[var(--primaryColor)]">
        {String(index).padStart(2, "0")}
      </span>

      <div className="flex flex-col gap-2">
        <h3 className="!text-lg md:!text-xl font-semibold">
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

        <p className="measure text-sm/7 text-[var(--textColorLight)]">
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 ? (
          <ul className="flex flex-wrap gap-x-3 gap-y-1 pt-1">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="mono text-xs/6 text-[var(--textColorLight)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="flex items-center gap-4 md:justify-end">
        {project.githubUrl ? (
          <Link
            href={project.githubUrl}
            aria-label={`${project.title} source on GitHub`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-[var(--textColorLight)] transition-colors duration-200 ease-out hover:text-[var(--textColor)]"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        ) : null}

        {project.url ? (
          <Link
            href={project.url}
            aria-label={`Open ${project.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--borderColorStrong)] text-sm text-[var(--textColor)] transition-all duration-200 ease-out group-hover:border-[var(--primaryColor)] group-hover:text-[var(--primaryColor)] group-hover:-translate-y-0.5"
          >
            <FontAwesomeIcon icon={faArrowRight} className="-rotate-45" />
          </Link>
        ) : (
          <span className="label">Under NDA</span>
        )}
      </div>
    </article>
  );
};

export default ProjectRow;
