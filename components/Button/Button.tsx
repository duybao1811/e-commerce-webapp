import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

const ButtonCustom: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        "px-12 py-4 rounded-sm font-medium cursor-pointer",
        variant === "primary" && "bg-button2 text-text hover:opacity-80 ",
        variant === "secondary" && "bg-button1 text-text hover:opacity-80 ",
        variant === "outline" && "border border-button/40 hover:opacity-80",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default ButtonCustom;
