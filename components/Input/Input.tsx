import React from "react";
import clsx from "clsx";
import { Input } from "@headlessui/react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
  className?: string;
}

const InputCustom = ({
  leftIcon,
  rightIcon,
  className,
  containerClassName,
  ...props
}: InputProps) => {
  return (
    <div
      className={clsx(
        "relative flex items-center rounded border border-transparent bg-secondary",
        containerClassName,
      )}
    >
      {leftIcon && <span className="absolute left-3 flex items-center">{leftIcon}</span>}

      <Input
        {...props}
        className={clsx(
          "text-text2 text-xs w-full rounded-2xl border-none bg-transparent px-5 py-2 placeholder-gray-400 focus:outline-none placeholder:opacity-50",
          leftIcon ? "pl-12" : "",
          rightIcon ? "pr-12" : "",
          className,
        )}
      />

      {rightIcon && <span className="absolute right-3 flex items-center">{rightIcon}</span>}
    </div>
  );
};

export default InputCustom;
