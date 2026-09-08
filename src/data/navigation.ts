export interface INavLink {
  label: string;
  href: string;
  /** Section id this link points at, for active-state tracking. */
  section: string;
}

const navLinks: INavLink[] = [
  { label: "Home", href: "#hero", section: "hero" },
  { label: "About", href: "#about", section: "about" },
  { label: "Building", href: "#building", section: "building" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "Work", href: "#work", section: "work" },
  { label: "Contact", href: "#contact", section: "contact" },
];

export default navLinks;

/** Every anchored section, in document order, for scroll tracking. */
export const sectionIds = [
  "hero",
  "about",
  "building",
  "karyalo",
  "voice-agents",
  "toolkit",
  "experience",
  "work",
  "note",
  "contact",
];

/** Label per section. Anything without an entry falls back to "Menu". */
export const sectionLabels: Record<string, string> = {
  about: "About",
  building: "Building",
  karyalo: "Karyalo",
  "voice-agents": "Voice agents",
  toolkit: "Toolkit",
  experience: "Experience",
  work: "Work",
  note: "Beyond work",
  contact: "Contact",
};

export const MENU_LABEL = "Menu";

export const bookACallHref = "https://cal.com/vinay-jain/30min";
