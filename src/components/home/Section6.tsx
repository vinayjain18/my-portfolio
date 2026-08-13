import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import SectionTitle from "@/components/common/SectionTitle";
import Reveal from "@/components/common/Reveal";
import SocialButton from "./ui/SocialButton";
import socialLinks from "@/data/socialLinks";
import BookCallButton from "./ui/BookCallButton";
import TalkButton from "./ui/TalkButton";
import Strings from "@/constants/strings";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const HomeSection6 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      as="section"
      ariaLabel="Contact"
      classNames="bg-[var(--dialogColor)] items-center justify-center overflow-hidden"
      id={id}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[20rem] -left-[10rem] h-[38rem] w-[38rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--primaryColor20), transparent 65%)",
        }}
      />

      <ConstraintedBox classNames="px-5 sm:px-8 section__pad z-raised">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-12">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <SectionTitle
              index="05"
              eyebrow="Contact"
              lead="I take on full-stack and AI builds through WebsiNova Technologies — from scoping and estimation to delivery. Thirty minutes is usually enough to tell whether it's a fit."
            >
              Have something to build?
            </SectionTitle>

            <div className="flex flex-col sm:flex-row gap-3">
              <BookCallButton />
              <TalkButton />
            </div>

            <p className="inline-flex items-center gap-2.5 text-sm/6 text-[var(--textColorLight)]">
              <span className="h-2 w-2 rounded-full bg-[var(--successColor)]" />
              Currently taking new client work · Mumbai, India · works across
              US and EU hours
            </p>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <p className="label pb-3 border-b border-[var(--borderColorStrong)]">
                Direct channels
              </p>

              <nav aria-label="Contact channels">
                {socialLinks.map((link) => (
                  <SocialButton
                    key={link.url}
                    name={link.name}
                    text={link.text}
                    icon={link.icon}
                    url={link.url}
                  />
                ))}

                <SocialButton
                  name={Strings.whatsapp}
                  text="+91 81697 96256"
                  icon={faWhatsapp}
                  url={Strings.whatsappLink}
                />
              </nav>
            </Reveal>
          </div>
        </div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection6;
