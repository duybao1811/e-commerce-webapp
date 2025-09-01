import React from "react";
import { Input } from "@headlessui/react";
import clsx from "clsx";

interface InputOutlineProps extends React.ComponentPropsWithoutRef<"input"> {
  className?: string;
}

const InputOutline = ({ className, ...props }: InputOutlineProps) => {
  return (
    <Input
      className={clsx(
        "w-full outline-none pb-2 border-b border-text2/50 placeholder-text2/40",
        className,
      )}
      {...props}
    />
  );
};

export default InputOutline;
