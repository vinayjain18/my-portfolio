import Link from "next/link";
import Strings from "@/constants/strings";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[var(--dialogColor)] py-8 px-4 pb-24 md:pb-8">
      <p className="text-center text-sm/6 text-[var(--textColorLight)]">
        No templates, no shortcuts - just code, coffee, and a few too many git
        commits. Made by{" "}
        <Link
          href={Strings.linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[var(--textColor)] hover:text-[var(--primaryColor)]"
        >
          Vinay Jain
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;
