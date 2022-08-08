import React, { FC, PropsWithChildren } from "react";

interface Props {
  /** This callback will be called every time a user clicks on the button*/
  onClick?: () => void;
  /** Allows you to extend different classNames to this button */
  className?: string;
}
export const Button: FC<PropsWithChildren<Props>> = ({
  onClick,
  children,
  className,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={
        "px-4 py-2 bg-slate-400 text-white cursor-pointer rounded-md " +
        className
      }
      {...rest}
    >
      {children}
    </button>
  );
};
