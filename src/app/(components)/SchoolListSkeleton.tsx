import React from "react";

const SchoolListSkeleton = () => {
  return (
    <div className="mt-2 grid grid-cols-3 gap-2">
      {[1, 2, 3].map((_, index) => {
        return (
          <div className="btn-outlined flex flex-col" key={index}>
            <div className="skeleton h-[20px] w-28" />
            <div className="mt-2 flex flex-row gap-2">
              <div className="skeleton size-[39px]" />
              <div className="skeleton size-[39px]" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SchoolListSkeleton;
