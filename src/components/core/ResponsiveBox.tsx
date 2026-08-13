import { createElement } from "react";
import type { CoreComponentsProps } from "@/types";

const ResponsiveBox = (props: Readonly<CoreComponentsProps>) => {
  const {
    children,
    classNames,
    id,
    elementRef,
    onClick,
    as = "div",
    ariaLabel,
  } = props;

  return createElement(
    as,
    {
      className: `relative flex flex-col justify-start items-start w-full h-auto p-0 mx-auto my-0 ${classNames ?? ""}`,
      id,
      ref: elementRef,
      onClick,
      "aria-label": ariaLabel,
    },
    children
  );
};

export default ResponsiveBox;
