import { createElement } from "react";
import clsx from "clsx";

export interface ButtonProps {
  label: string;
  className?: string;
  type?: "button";
  onClick?: (arg: React.MouseEvent<HTMLElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  className = "",
  label = "button",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "focus:outline-none bg-primary text-white text-base py-2.5",
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};
