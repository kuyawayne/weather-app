import React, { FunctionComponent, ReactNode } from "react";

const DashboardCard: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={"bg-[#101014] rounded-xl h-screen"}>
      {children}
    </div>
  );
};

export default DashboardCard;