"use client";

import { IcAdd, IcSearch } from "./Icons";
import { twMerge } from "tailwind-merge";

import React, { ComponentProps } from "react";

type ButtonProps = {
  content: string;
  iconName?: "add" | "search";
  pending?: boolean;
  className?: string;
  implementBreakPoints?: boolean;
  variant?: "outlined" | "full";
} & ComponentProps<"button">;

const IconFromName = ({ iconName }: { iconName: string }) => {
  if (iconName == "search") {
    return <IcSearch stroke="#fff" width="20" height="20" />;
  } else if (iconName == "add") {
    return <IcAdd stroke="#fff" width="20" height="20" />;
  }

  return <IcSearch />;
};

const Button = ({
  content,
  iconName,
  className,
  pending,
  implementBreakPoints = false,
  variant = "full",
  ...props
}: ButtonProps) => {
  // const isBreakPointActive = useIsBreakpointActive("sm");

  return (
    <button
      className={twMerge(
        "flex flex-row items-center justify-center gap-2 rounded-lg px-[16px] py-[10px] text-center font-semibold text-white duration-150",
        variant === "full"
          ? "bg-[#E24955] hover:bg-[#c23b46]"
          : "border-[1px] border-[#D0D5DD] text-black hover:bg-slate-200",
        className,
      )}
      {...props}
    >
      {iconName && <IconFromName iconName={iconName} />}
      {pending && <span className="loading loading-dots loading-sm bg-white" />}
      {pending ? "" : content}
    </button>
  );
};

export default Button;
