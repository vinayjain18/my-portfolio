import type { CoreComponentsProps } from "@/types";

const ConstraintedBox = (props: Readonly<CoreComponentsProps>) => {
  const { children, classNames, onClick, id, elementRef } = props;

  return (
    <div
      className={`relative flex flex-col justify-start items-start w-full constrained-width p-0 mx-auto my-0 ${classNames ?? ""}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ConstraintedBox;
