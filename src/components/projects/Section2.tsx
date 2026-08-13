"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import { getProjectDetails } from "@/data/projects";

const ProjectsSection2 = ({ id }: Readonly<{ id?: string }>) => {
  const searchParams = useSearchParams();
  const project = getProjectDetails(searchParams.get("id")!);

  if (!project) return null;

  return (
    <ResponsiveBox as="section" ariaLabel="Project overview" id={id}>
      <ConstraintedBox classNames="px-5 sm:px-8 py-14 gap-10">
        <div className="grid w-full grid-cols-1 gap-x-16 gap-y-6 lg:grid-cols-12">
          <p className="label lg:col-span-3">Overview</p>

          <div className="flex flex-col gap-5 lg:col-span-9">
            <p className="measure text-lg/8 text-[var(--textColor)]">
              {project.description}
            </p>

            {project.about ? (
              <p className="measure text-base/8 text-[var(--textColorLight)]">
                {project.about}
              </p>
            ) : null}
          </div>
        </div>

        <div className="w-full border-t border-[var(--borderColor)] pt-8">
          <Link href="/#contact" className="app__text_btn">
            Want something similar built? Let&apos;s talk
          </Link>
        </div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default ProjectsSection2;
