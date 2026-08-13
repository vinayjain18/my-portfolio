import { ProjectType, type IProjectItem } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import CardBox from "@/components/core/CardBox";

/**
 * Wide lead card for the flagship project. Deliberately a different shape
 * from the paired cards below it, so three featured projects still read as
 * a hierarchy rather than three identical towers.
 */
const ProjectFeature = ({ project }: { project: IProjectItem }) => {
  return (
    <CardBox classNames="p-7 md:p-10">
      <div className="grid w-full grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-12">
        <div className="flex flex-col items-start gap-5 lg:col-span-7">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-[var(--borderColor)] bg-[var(--dialogColor)] p-2.5">
              <Image
                src={project.icon}
                alt=""
                aria-hidden="true"
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </span>

            <span className="label text-[var(--primaryColor)]">
              {project.projectType === ProjectType.Product
                ? "WebsiNova product"
                : "Featured"}
            </span>
          </div>

          <h3 className="font-display !text-2xl md:!text-3xl">
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

          <p className="measure text-sm/7 md:text-base/8 text-[var(--textColorLight)]">
            {project.description}
          </p>

          {project.tags && project.tags.length > 0 ? (
            <ul className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="mono rounded-xs border border-[var(--borderColor)] px-2 py-0.5 text-xs/5 font-medium text-[var(--textColorLight)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-auto flex flex-wrap items-center gap-5 pt-2">
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
          </div>
        </div>

        {project.highlights && project.highlights.length > 0 ? (
          <ol className="flex flex-col gap-4 lg:col-span-5 lg:border-l lg:border-[var(--borderColor)] lg:pl-10">
            {project.highlights.map((highlight, index) => {
              const [step, detail] = highlight.split(" — ");

              return (
                <li key={highlight} className="flex items-start gap-4">
                  <span className="label pt-1 text-[var(--primaryColor)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm/6 font-semibold text-[var(--textColor)]">
                      {step}
                    </span>
                    {detail ? (
                      <span className="text-sm/6 text-[var(--textColorLight)]">
                        {detail}
                      </span>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
        ) : null}
      </div>
    </CardBox>
  );
};

export default ProjectFeature;
