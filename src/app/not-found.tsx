import Link from "next/link";
import type { Metadata } from "next";
import { menuItems } from "@/data/navMenus";

export const metadata: Metadata = {
  title: "Page not found",
};

const NotFound = () => {
  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center px-5 py-24">
      <div className="constrained-width mx-auto flex flex-col items-start gap-7">
        <p className="label text-[var(--primaryColor)]">Error 404</p>

        <h1 className="font-display">This page doesn&apos;t exist.</h1>

        <p className="measure text-base/8 text-[var(--textColorLight)]">
          The link is either out of date or points somewhere that no longer
          exists. Everything worth reading is on the home page.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/" className="app__filled_btn">
            Back to home
          </Link>
          <Link href="/#contact" className="app__outlined_btn">
            Get in touch
          </Link>
        </div>

        <nav aria-label="Site sections" className="w-full pt-6">
          <p className="label pb-3 border-b border-[var(--borderColorStrong)]">
            Or jump to
          </p>

          <ul className="flex flex-wrap gap-x-8 gap-y-2 pt-4">
            {menuItems.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className="text-base/8 text-[var(--textColorLight)] transition-colors duration-200 ease-out hover:text-[var(--primaryColor)]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NotFound;
