import React, { FunctionComponent, ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FunctionComponent<ContainerProps> = ({ children, className }): JSX.Element => {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <div className={`bg-base-100 p-4 h-auto ${className}`} data-theme={theme}>
      {children}
    </div>
  );
};

export default Container;