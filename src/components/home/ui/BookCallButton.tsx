import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

const BookCallButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[11rem]"
      href="https://cal.com/vinay-jain/30min"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faCalendarCheck} />
      Book a 30-min call
    </Link>
  );
};

export default BookCallButton;
