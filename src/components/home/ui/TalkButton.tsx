import Link from "next/link";
import Strings from "@/constants/strings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const TalkButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[12rem]"
      href={Strings.whatsappLink}
      target="_blank"
    >
      Let&apos;s Talk&nbsp;&nbsp;
      <span className="hidden sm:inline">
      <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
      </span>
    </Link>
  );
};

export default TalkButton;
