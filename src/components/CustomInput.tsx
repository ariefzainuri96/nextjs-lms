"use client";

import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type CustomInputProps = {
  label: string;
  enable?: boolean;
  className?: string;
  message?: string | undefined;
} & ComponentProps<"input">;

const CustomInput = ({
  className,
  label,
  message,
  enable = true,
  ...props
}: CustomInputProps) => {
  return (
    <div className={className}>
      <p className="text-sm font-medium text-[#344054]">{label}</p>
      <input
        disabled={!enable}
        className={twMerge(
          "mt-[6px] w-full rounded-lg border-[1px] border-slate-100 px-[14px] py-[10px] text-[16px] outline-none",
          enable ? "text-[#101828]" : "text-[#667085]",
        )}
        {...props}
      />
      {message && <p className="mt-1 text-sm text-red-300">{message}</p>}
    </div>
  );
};

export default CustomInput;
