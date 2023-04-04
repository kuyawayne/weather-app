import React from "react";

const Skeleton: React.FunctionComponent = () => {
  return (
    <div className="flex w-full justify-stretch">
      <div className={"shadow-xl card w-full bg-base-100 h-28 animate-pulse"}>
        <span>Test</span>
      </div>
    </div>
  );
};

export default Skeleton;