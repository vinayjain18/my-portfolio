import { RepoType, type IProjectItem } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Row from "@/components/core/Row";
import CardBox from "@/components/core/CardBox";

const ProjectItem = ({ project }: { project: IProjectItem }) => {
  return (
    <CardBox classNames="h-full p-6 gap-5 bg-[var(--textColor10)] slide_in">
      <Row classNames="w-full !items-start !justify-between gap-3">
        <Row classNames="!items-center gap-3">
          <Row classNames="w-10 h-10 shrink-0 !items-center !justify-center rounded-[1rem] bg-[var(--dialogColor)] p-2">
            <Image
              src={project.icon}
              alt={`project-${project.title}`}
              width={100}
              height={100}
              sizes="100%"
              loading="lazy"
              placeholder="blur"
              blurDataURL={project.icon}
              className="w-full h-full object-contain"
            />
          </Row>

          <p className="text-base/6 font-semibold">{project.title}</p>
        </Row>

        <p
          className={`shrink-0 rounded-full py-0.5 px-2 text-[0.65rem]/6 font-semibold uppercase border ${
            project.repoType === RepoType.Private
              ? "text-[var(--errorColor)] border-[var(--errorColor50)]"
              : "text-[var(--successColor)] border-[var(--successColor50)]"
          }`}
        >
          {project.repoType === RepoType.Private ? "Private" : "Public"}
        </p>
      </Row>

      <p className="text-sm/6 text-[var(--textColorLight)] line-clamp-4">
        {project.description}
      </p>

      {project.tags && project.tags.length > 0 ? (
        <Row classNames="w-full flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <p
              key={`tag-${i}`}
              className="rounded-full border border-[var(--textColor50)] py-0.5 px-2 text-xs/6 font-normal text-[var(--textColorLight)]"
            >
              {tag}
            </p>
          ))}
        </Row>
      ) : null}

      <Row classNames="w-full !items-center gap-3 mt-auto pt-1">
        {project.githubUrl ? (
          <Link
            href={project.githubUrl}
            aria-label={`${project.title} GitHub URL`}
            target="_blank"
            className="text-sm/6 font-medium text-[var(--textColor)] hover:text-[var(--primaryColor)] inline-flex items-center gap-1.5"
          >
            <FontAwesomeIcon icon={faGithub} />
            Code
          </Link>
        ) : null}

        {project.url ? (
          <Link
            href={project.url}
            aria-label={`${project.title} Project URL`}
            target="_blank"
            className="text-sm/6 font-medium text-[var(--primaryColor)] hover:underline inline-flex items-center gap-1.5"
          >
            View Project
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
          </Link>
        ) : (
          !project.githubUrl && (
            <p className="text-sm/6 text-[var(--textColorLight)]">
              Confidential client work
            </p>
          )
        )}
      </Row>
    </CardBox>
  );
};

export default ProjectItem;
