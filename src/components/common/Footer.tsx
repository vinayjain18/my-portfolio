import Link from "next/link";
import Strings from "@/constants/strings";
import { menuItems } from "@/data/navMenus";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[var(--bgColor)] border-t border-[var(--borderColor)]">
      <div className="constrained-width mx-auto px-5 sm:px-8 py-12 pb-28 md:pb-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="flex flex-col gap-3 max-w-sm">
            <Link
              href="/#hero"
              className="font-display text-lg font-semibold text-[var(--textColor)] w-fit"
            >
              Vinay Jain
              <span className="text-[var(--primaryColor)]">.</span>
            </Link>

            <p className="text-sm/7 text-[var(--textColorLight)]">
              AI and full-stack engineering through WebsiNova Technologies.
              Built from scratch — no templates, just code, coffee and rather
              too many git commits.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="label">Sections</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {menuItems.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className="text-sm/7 text-[var(--textColorLight)] transition-colors duration-200 ease-out hover:text-[var(--primaryColor)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <p className="label">Get in touch</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href={Strings.primaryEmailLink}
                  className="mono text-sm/7 text-[var(--textColorLight)] transition-colors duration-200 ease-out hover:text-[var(--primaryColor)]"
                >
                  {Strings.primaryEmail}
                </Link>
              </li>
              <li>
                <Link
                  href={Strings.linkedInLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-sm/7 text-[var(--textColorLight)] transition-colors duration-200 ease-out hover:text-[var(--primaryColor)]"
                >
                  linkedin/{Strings.linkedInUsername}
                </Link>
              </li>
              <li>
                <Link
                  href={Strings.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-sm/7 text-[var(--textColorLight)] transition-colors duration-200 ease-out hover:text-[var(--primaryColor)]"
                >
                  github/{Strings.githubUsername}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-[var(--borderColor)] pt-6">
          <p className="mono text-xs/6 text-[var(--textColorLight)]">
            © {year} Vinay Jain. All rights reserved.
          </p>

          <p className="mono text-xs/6 text-[var(--textColorLight)]">
            Built with Next.js · Hosted on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
