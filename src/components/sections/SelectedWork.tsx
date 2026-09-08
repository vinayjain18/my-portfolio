import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/common/Reveal";
import projects from "@/data/projects";
import type { IProjectItem } from "@/types";
import { cn } from "@/utils/cn";

/** The link a card's arrow should follow: live product first, else the repo. */
const primaryLink = (project: IProjectItem) => project.url ?? project.githubUrl;

const ProjectCard = ({
  project,
  featured,
}: {
  project: IProjectItem;
  featured: boolean;
}) => {
  const href = primaryLink(project);
  const body = project.summary ?? project.description;

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--borderColor)] bg-[var(--surfaceRaised)]">
          <Image
            src={project.icon}
            alt=""
            aria-hidden="true"
            width={22}
            height={22}
            loading="lazy"
            className={cn(
              "h-[1.375rem] w-[1.375rem] object-contain",
              project.monoIcon && "logo-mono"
            )}
          />
        </span>

        {href ? (
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--borderColor)] text-[var(--textColorLight)] transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-[var(--primaryColor)] group-hover:text-[var(--primaryColor)]"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="h-3 w-3"
            />
          </span>
        ) : null}
      </div>

      <div className="mt-5 flex flex-col gap-2.5">
        <h3
          className={cn(
            "font-semibold tracking-[-0.015em] text-[var(--textColor)]",
            featured ? "text-xl" : "text-base"
          )}
        >
          {project.title}
        </h3>

        <p
          className={cn(
            "text-[var(--textColorLight)]",
            featured ? "text-sm/7" : "text-sm/6"
          )}
        >
          {body}
        </p>
      </div>

      {project.tags?.length ? (
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="mono rounded-full border border-[var(--borderColor)] px-2.5 py-1 text-[0.6875rem] text-[var(--textColorLight)]"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );

  const shellClass = cn(
    "group relative flex h-full flex-col rounded-xl border border-[var(--borderColor)] bg-[var(--surfaceColor)] p-6 shadow-xs",
    "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--borderColorStrong)] hover:shadow-md",
    featured && "sm:p-7"
  );

  if (!href) {
    return <div className={shellClass}>{content}</div>;
  }

  return (
    <div className={shellClass}>
      {content}

      {/* One link covering the card, so the whole surface is clickable but
          screen readers and the tab order still see a single named link. */}
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 rounded-xl"
      >
        <span className="sr-only">{project.title} — opens in a new tab</span>
      </Link>

      {/* A second, real link for the repo where the card already points at a
          live product. Sits above the overlay so it stays clickable. */}
      {project.url && project.githubUrl ? (
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-raised mt-5 inline-flex w-fit items-center gap-2 text-xs font-medium text-[var(--textColorLight)] transition-colors duration-200 ease-out hover:text-[var(--primaryColor)]"
        >
          <FontAwesomeIcon icon={faGithub} className="h-3.5 w-3.5" />
          Source
        </Link>
      ) : null}
    </div>
  );
};

const SelectedWork = () => {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section
      id="work"
      aria-label="Selected work"
      className="relative w-full bg-[var(--dialogColor)]"
    >
      <div className="constrained-width section__pad mx-auto w-full px-5 sm:px-8">
        <SectionTitle
          index="07"
          eyebrow="Selected work"
          lead="My own products, the two platforms I led as tech lead, and the smaller things I build when a problem annoys me enough."
        >
          Things I&apos;ve built.
        </SectionTitle>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal key={project.id} step={index} className="h-full">
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>

        <h3 className="label mt-14 border-t border-[var(--borderColorStrong)] pt-8">
          More projects
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((project, index) => (
            <Reveal key={project.id} step={index} className="h-full">
              <ProjectCard project={project} featured={false} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
