import React, { FC, PropsWithChildren } from "react";

interface Props {
  /** This callback will be called every time a user clicks on the button*/
  onClick?: () => void;
  /** Allows you to extend different classNames to this button */
  className?: string;
  /** Allows you to disable this button and applies custom styling*/
  disabled?: boolean;
}
export const Button: FC<PropsWithChildren<Props>> = ({
  onClick,
  children,
  className,
  disabled,
  ...rest
}) => {
  console.log({ disabled });
  const disabledClassName = disabled ? " bg-slate-300 cursor-not-allowed" : "";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={
        "px-4 py-2 bg-slate-400 text-white cursor-pointer rounded-md " +
        className +
        disabledClassName
      }
      {...rest}
    >
      {children}
    </button>
  );
};
