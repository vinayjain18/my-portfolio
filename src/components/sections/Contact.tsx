import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/common/Reveal";
import Strings from "@/constants/strings";
import { bookACallHref } from "@/data/navigation";

interface Channel {
  name: string;
  value: string;
  href: string;
  icon: IconDefinition;
}

/** Every channel here comes from src/constants/strings.ts — nothing invented. */
const channels: Channel[] = [
  {
    name: "Email",
    value: Strings.primaryEmail,
    href: Strings.primaryEmailLink,
    icon: faEnvelope,
  },
  {
    name: "LinkedIn",
    value: `linkedin/${Strings.linkedInUsername}`,
    href: Strings.linkedInLink,
    icon: faLinkedin,
  },
  {
    name: "GitHub",
    value: `github/${Strings.githubUsername}`,
    href: Strings.githubLink,
    icon: faGithub,
  },
  {
    name: "X",
    value: `x/${Strings.twitterUsername}`,
    href: Strings.twitterLink,
    icon: faXTwitter,
  },
  {
    name: "WhatsApp",
    value: "+91 81697 96256",
    href: Strings.whatsappLink,
    icon: faWhatsapp,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative w-full overflow-hidden bg-[var(--dialogColor)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[20rem] -left-[10rem] h-[38rem] w-[38rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--primaryColor20), transparent 65%)",
        }}
      />

      <div className="constrained-width section__pad relative z-raised mx-auto w-full px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-7">
            <SectionTitle
              index="08"
              eyebrow="Contact"
              lead="I take on full-stack and AI builds through WebsiNova Technologies — from scoping and estimation to delivery. Thirty minutes is usually enough to tell whether it's a fit."
            >
              Have something to build?
            </SectionTitle>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={bookACallHref}
                target="_blank"
                rel="noopener noreferrer"
                className="app__filled_btn !w-full sm:!w-auto"
              >
                Book a call
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="h-3 w-3"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href={Strings.primaryEmailLink}
                className="app__outlined_btn !w-full sm:!w-auto"
              >
                Send an email
              </Link>
            </div>

            <p className="inline-flex flex-wrap items-center gap-2.5 text-sm/6 text-[var(--textColorLight)]">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[var(--successColor)]"
              />
              Currently taking new client work · Mumbai, India · works across US
              and EU hours
            </p>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <p className="label border-b border-[var(--borderColorStrong)] pb-3">
                Direct channels
              </p>

              <nav aria-label="Contact channels">
                <ul>
                  {channels.map((channel) => (
                    <li key={channel.href}>
                      <Link
                        href={channel.href}
                        target={
                          channel.href.startsWith("mailto:")
                            ? undefined
                            : "_blank"
                        }
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 border-b border-[var(--borderColor)] py-4 transition-colors duration-200 ease-out"
                      >
                        <FontAwesomeIcon
                          icon={channel.icon}
                          className="h-4 w-4 shrink-0 text-[var(--textColorLight)] transition-colors duration-200 ease-out group-hover:text-[var(--primaryColor)]"
                          aria-hidden="true"
                        />

                        <span className="flex min-w-0 flex-1 flex-col">
                          <span className="text-sm font-semibold text-[var(--textColor)]">
                            {channel.name}
                          </span>
                          <span className="mono truncate text-xs text-[var(--textColorLight)]">
                            {channel.value}
                          </span>
                        </span>

                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="h-3 w-3 shrink-0 -translate-x-1 text-[var(--textColorLight)] opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:text-[var(--primaryColor)] group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
