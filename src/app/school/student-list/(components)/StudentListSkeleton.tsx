import React from "react";

const StudentListSkeleton = () => {
  return (
    <div>
      {[1, 2, 3].map((_, index) => {
        return (
          <div
            className="btn-outlined mt-4 flex flex-row items-center gap-2"
            key={index}
          >
            <div className="flex flex-1 flex-row">
              <div className="skeleton h-[32px] w-10" />
            </div>
            <div className="skeleton size-[39px]" />
            <div className="skeleton size-[39px]" />
          </div>
        );
      })}
    </div>
  );
};

export default StudentListSkeleton;
