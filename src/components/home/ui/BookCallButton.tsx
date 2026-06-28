import Link from "next/link";

const BookCallButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[12rem]"
      href="https://cal.com/vinay-jain/30min"
      target="_blank"
      rel="noopener noreferrer"
    >
      Book a Call
    </Link>
  );
};

export default BookCallButton;
