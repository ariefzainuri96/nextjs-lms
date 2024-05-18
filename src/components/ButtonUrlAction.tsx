"use client";

import { useRouter } from "next/navigation";
import React from "react";

type ButtonUrlActionProps = {
  className: string;
  link: string;
  type?: "push" | "replace";
  children: React.ReactNode;
};

const ButtonUrlAction = ({
  className,
  link,
  type = "push",
  children,
}: ButtonUrlActionProps) => {
  const router = useRouter();

  return (
    <button
      className={className}
      onClick={(e) => {
        e.preventDefault();

        if (type == "replace") {
          router.replace(link);
        } else {
          router.prefetch(link);
        }
      }}
    >
      {children}
    </button>
  );
};

export default ButtonUrlAction;
