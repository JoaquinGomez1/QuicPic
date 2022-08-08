import { FC, PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={"max-w-3xl mx-auto px-4 md:px-0 " + className}>
      {children}
    </div>
  );
};
