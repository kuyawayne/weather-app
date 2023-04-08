import React, { FunctionComponent, ReactNode } from "react";

const DashboardCard: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={"bg-base-300 rounded-xl h-full"}>
      {children}
    </div>
  );
};

export default DashboardCard;