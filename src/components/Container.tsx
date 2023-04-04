import React, { FunctionComponent, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ({ children }): JSX.Element => {
  return (
    <div className={"bg-[#282828] p-4 h-screen"}>
      {children}
    </div>
  );
};

export default Container;