import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Strings from "@/constants/strings";

const MobileCTABar = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-nav flex items-center gap-2.5 border-t border-[var(--borderColor)] bg-[var(--bgColor90)] backdrop-blur-xl px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <Link
        href="https://cal.com/vinay-jain/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="app__filled_btn !flex-1 !min-w-0 !px-3 !text-sm"
      >
        <FontAwesomeIcon icon={faCalendarCheck} />
        Book a Call
      </Link>

      <Link
        href={Strings.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="app__outlined_btn !flex-1 !min-w-0 !px-3 !text-sm"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
        Let&apos;s Talk
      </Link>
    </div>
  );
};

export default MobileCTABar;
