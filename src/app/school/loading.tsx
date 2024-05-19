import React from "react";

const loading = () => {
  return (
    <div className="flex h-screen max-h-screen w-screen flex-col overflow-hidden">
      <div className="flex flex-row gap-2 overflow-x-auto">
        <div className="skeleton h-[46px] w-[105px]" />
        <div className="skeleton h-[46px] w-[105px]" />
      </div>
      <div className="skeleton mt-2 h-[46px] w-[105px]" />
      <div className="h-[1px] w-full bg-slate-200" />
    </div>
  );
};

export default loading;
