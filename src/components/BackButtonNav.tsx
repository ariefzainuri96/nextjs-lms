"use client";

import React from "react";
import { IcArrowUp } from "./Icons";
import { useRouter } from "next/navigation";

const BackButtonNav = () => {
  const router = useRouter();

  return (
    <div
      onClick={(e) => {
        e.preventDefault();

        router.back();
      }}
      className="rotate-90 rounded-full border-[1px] hover:bg-slate-100"
    >
      <div className="rotate-180">
        <IcArrowUp width="30" height="30" />
      </div>
    </div>
  );
};

export default BackButtonNav;
