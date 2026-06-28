import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import socialLinks from "@/data/socialLinks";
import BookCallButton from "./ui/BookCallButton";
import TalkButton from "./ui/TalkButton";
import { FlipWords } from "../common/FlipWords";
import { TerminalIntro } from "../common/TerminalIntro";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-screen items-center justify-center relative overflow-hidden"
      id={id}
    >
      <ConstraintedBox classNames="px-4 py-8 pt-24 md:pt-16 z-20 items-center justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Column classNames="w-full items-start text-left gap-6">
            <div className="inline-flex flex-wrap items-center">
              <p className="text-2xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal dark:text-[var(--textColor)] text-[var(--textColor)] font-bold">
                Hi there, I am&nbsp;
              </p>
              <p className="text-2xl/normal sm:text-3xl/normal md:text-4xl/normal lg:text-5xl/normal dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-bold">
                Vinay Jain
              </p>
            </div>

            <div className="inline-flex flex-wrap items-center text-base/normal md:text-lg/normal dark:text-[var(--textColorLight)] text-[var(--textColorLight)]">
              <FlipWords
                words={[
                  "Tech Lead & Founder, WebsiNova Technologies",
                  "AI & RAG Systems Engineer",
                  "Full-Stack Developer",
                ]}
                duration={2600}
                className="text-base/normal md:text-lg/normal font-normal dark:text-[var(--textColorLight)] text-[var(--textColorLight)] ml-0"
              />
            </div>

            <TerminalIntro />

            <Row classNames="gap-4 flex-col sm:flex-row">
              <BookCallButton />
              <TalkButton />
            </Row>

            <Column classNames="w-full items-start gap-2">
              <p className="text-base/6 font-medium">Follow me here</p>

              <Row classNames="gap-2">
                {socialLinks.slice(0, 5).map((link, index) => {
                  return (
                    <Link
                      key={`social-link-${index}`}
                      href={link.url}
                      target="_blank"
                      className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                      aria-label={`${link.name}`}
                    >
                      <span className="text-base/6 text-[var(--textColor)]">
                        <FontAwesomeIcon icon={link.icon} />
                      </span>
                    </Link>
                  );
                })}
              </Row>
            </Column>
          </Column>

          <div className="hidden md:flex w-full items-center justify-center">
            <div className="relative aspect-square w-full max-w-[26rem] rounded-[2rem] overflow-hidden border border-[var(--borderColor)] shadow-[var(--boxShadow)]">
              <Image
                src="/my-photo-orange-bg.png"
                alt="Vinay Jain"
                fill
                sizes="(min-width: 768px) 26rem, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
