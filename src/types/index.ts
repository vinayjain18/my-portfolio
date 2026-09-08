import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import type { MouseEventHandler, ReactNode, RefObject } from "react";

export interface INavMenuItem {
  id: string;
  title: string;
  path: string;
  section: string;
  submenu?: INavMenuItem[];
}

export interface INavItem {
  name: string;
  link: string;
  icon: IconProp;
}

export interface IRoleItem {
  title: string;
  startDate: string;
  endDate: string;
}

export interface IExperienceItem {
  designation: string;
  company: string;
  startDate: string;
  endDate: string;
  isCurrentJob: boolean;
  location: string;
  shortDescription: string;
  /** One entry per paragraph. */
  description: string[];
  /** Title progression within the same company, oldest first. */
  roles?: IRoleItem[];
  /** Shown when the role ran concurrently with another entry. */
  concurrentNote?: string;
}

export enum RepoType {
  Public,
  Private,
}

export enum ProjectType {
  Personal,
  JobWork,
  Freelance,
  Product,
}

export interface IProjectItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  repoType: RepoType;
  projectType?: ProjectType;
  githubUrl?: string;
  url?: string;
  tags?: string[];
  sceenshots?: string[];
  about?: string;
  /** Short "step — detail" lines shown on the lead project card. */
  highlights?: string[];
  /** Card-length version of `description`. Falls back to `description`. */
  summary?: string;
  /** Shown larger in the Selected Work grid. */
  featured?: boolean;
  /** Single-colour icon — recoloured to the text colour so it survives both themes. */
  monoIcon?: boolean;
}

export interface ISkillListItem {
  title: string;
  items: ISkillItem[];
  /** Kept out of the engineering toolkit grid. */
  nonTechnical?: boolean;
}

export enum SkillLevel {
  Expert,
  Intermediate,
  Begginer,
}

export interface ISkillItem {
  title: string;
  level?: SkillLevel;
  icon?: string;
  /**
   * Single-colour brand mark. These are drawn in pure black or pure white and
   * disappear against one theme or the other, so they get recoloured to the
   * current text colour instead of being shown as-authored.
   */
  mono?: boolean;
}

export interface ISocialLinkItem {
  url: string;
  icon: IconDefinition;
  text: string;
  name?: string;
}

export interface MenutItemProps {
  items: INavMenuItem;
  depthLevel: number;
  mobileNav: boolean;
  handleCloseMobileMenu: () => void;
  current?: string;
}

export interface DropdownMenuProps
  extends Omit<MenutItemProps, "items" | "current"> {
  submenus: INavMenuItem[];
  dropdown: boolean;
}

export interface ButtonComponentProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  classNames?: string;
  name?: string;
}

export interface CoreComponentsProps {
  children: ReactNode;
  classNames?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  id?: string;
  elementRef?: RefObject<HTMLDivElement>;
  /** Semantic element to render. Defaults to a div. */
  as?: "div" | "section" | "article" | "aside" | "header" | "footer" | "nav";
  ariaLabel?: string;
}

export interface ViewportProps {
  root?: null | undefined;
  rootMargin?: string | undefined;
  threshold?: number | undefined;
}

export interface ShootingStarProps {
  vw: number;
  vh: number;
}
