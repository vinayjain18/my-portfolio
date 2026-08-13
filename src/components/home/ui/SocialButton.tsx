import type { ISocialLinkItem } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SocialButton = ({ text, icon, url, name }: ISocialLinkItem) => {
  return (
    <Link
      className="group flex flex-row items-center gap-4 border-b border-[var(--borderColor)] py-4 transition-colors duration-200 ease-out hover:border-[var(--primaryColor50)]"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-lg text-[var(--textColorLight)] transition-colors duration-200 ease-out group-hover:text-[var(--primaryColor)]">
        <FontAwesomeIcon icon={icon} />
      </span>

      {name ? (
        <span className="label w-24 shrink-0 !text-[var(--textColor)]">
          {name}
        </span>
      ) : null}

      <span className="mono truncate text-sm/6 text-[var(--textColorLight)]">
        {text}
      </span>

      <span className="ml-auto text-xs text-[var(--textColorLight)] transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--primaryColor)]">
        <FontAwesomeIcon icon={faArrowRight} className="-rotate-45" />
      </span>
    </Link>
  );
};

export default SocialButton;
