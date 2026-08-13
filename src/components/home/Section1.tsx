import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import socialLinks from "@/data/socialLinks";
import BookCallButton from "./ui/BookCallButton";
import TalkButton from "./ui/TalkButton";
import { FlipWords } from "../common/FlipWords";
import { TerminalIntro } from "../common/TerminalIntro";

const stats = [
  { value: "5", label: "engineers led" },
  { value: "2", label: "AI platforms shipped" },
  { value: "16", label: "languages localised" },
];

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      as="section"
      ariaLabel="Introduction"
      classNames="bg-[var(--bgColor)] min-h-[100dvh] items-center justify-start overflow-hidden"
      id={id}
    >
      {/* Ambient warmth behind the hero, off-centre so it does not read as a symmetrical glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[18rem] -right-[12rem] h-[42rem] w-[42rem] rounded-full opacity-[0.55] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--secondaryColor30), transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-[#221e1a26] [mask-image:radial-gradient(60%_50%_at_50%_35%,black,transparent)]"
      />

      <ConstraintedBox classNames="px-5 sm:px-8 pt-28 pb-16 md:pt-32 md:pb-20 z-raised">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-14 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-7">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--borderColorStrong)] bg-[var(--bgColor)] pl-2.5 pr-3.5 py-1.5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--successColor)] opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--successColor)]" />
              </span>
              <span className="label !tracking-[0.1em] text-[var(--textColor)]">
                Available for client work
              </span>
            </span>

            <div className="flex flex-col gap-3">
              <h1 className="font-display">
                Vinay Jain
                <span className="text-[var(--primaryColor)]">.</span>
              </h1>

              <p className="text-xl/8 md:text-2xl/9 text-[var(--textColor)] font-medium tracking-[-0.02em] measure">
                I build RAG-based AI systems and the full-stack products they
                live inside.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[var(--textColorLight)]">
              <span className="label">Currently</span>
              <FlipWords
                words={["Founder, WebsiNova Technologies", "Building Karyalo"]}
                duration={2600}
                className="text-base/7 md:text-lg/8 font-medium text-[var(--textColor)] ml-0"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <BookCallButton />
              <div className="hidden md:block">
                <TalkButton />
              </div>
            </div>

            <dl className="mt-2 flex flex-wrap items-baseline gap-x-8 gap-y-4 border-t border-[var(--borderColor)] pt-6 w-full">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl md:text-3xl font-semibold tabular text-[var(--textColor)]">
                    {stat.value}
                  </dd>
                  <span className="text-sm/6 text-[var(--textColorLight)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </dl>
          </div>

          {/* Photo sits lower than the headline and lets the terminal overlap it */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end lg:pt-10">
            <div className="relative w-full max-w-[19rem] sm:max-w-[22rem]">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-[var(--borderColorStrong)] shadow-lg">
                <Image
                  src="/vinay-jain-profile-photo.jpeg"
                  alt="Vinay Jain, software engineer and founder of WebsiNova Technologies"
                  fill
                  sizes="(min-width: 1024px) 24rem, (min-width: 640px) 60vw, 19rem"
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Sits under the portrait rather than over it, so the
                  overlap lands on the desk and never on the face */}
              <div className="relative z-raised -mt-20 w-full sm:-ml-10 sm:w-[19rem]">
                <TerminalIntro className="max-w-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-16 flex flex-wrap items-center gap-4 border-t border-[var(--borderColor)] pt-6 w-full">
          <span className="label">Elsewhere</span>

          <ul className="flex flex-wrap items-center gap-2">
            {socialLinks.slice(0, 5).map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app__icon_btn !p-2.5 text-sm"
                  aria-label={link.name}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
