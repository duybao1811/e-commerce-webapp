import React from "react";
import clsx from "clsx";
import { Input } from "@headlessui/react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
  className?: string;
  required?: boolean;
  label?: string;
  id?: string;
  variant?: "default" | "outlined";
}

const InputCustom = ({
  leftIcon,
  rightIcon,
  className,
  containerClassName,
  required,
  label,
  id,
  variant = "default",
  ...props
}: InputProps) => {
  return (
    <div>
      {label ? (
        <label htmlFor={id} className={"mb-2 block"}>
          {label} {required ? <span className="text-secondary2">*</span> : null}
        </label>
      ) : null}
      <div
        className={clsx(
          "relative flex items-center rounded",
          {
            "border border-transparent bg-secondary": variant === "default",
            "border border-text2": variant === "outlined",
          },
          containerClassName,
        )}
      >
        {leftIcon && <span className="absolute left-3 flex items-center">{leftIcon}</span>}

        <Input
          {...props}
          id={id}
          className={clsx(
            "text-text2 w-full border-none bg-transparent px-5 focus:outline-none ",
            leftIcon ? "pl-12" : "",
            rightIcon ? "pr-12" : "",
            {
              "placeholder-gray-400 placeholder:opacity-50 h-[50px]": variant === "default",
              "placeholder-text2 placeholder:opacity-50 h-[56px]": variant === "outlined",
            },
            className,
          )}
        />

        {rightIcon && <span className="absolute right-3 flex items-center">{rightIcon}</span>}
      </div>
    </div>
  );
};

export default InputCustom;
