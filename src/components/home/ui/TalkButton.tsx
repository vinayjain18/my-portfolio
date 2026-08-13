import Link from "next/link";
import Strings from "@/constants/strings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const TalkButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[11rem]"
      href={Strings.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
      Message on WhatsApp
    </Link>
  );
};

export default TalkButton;
