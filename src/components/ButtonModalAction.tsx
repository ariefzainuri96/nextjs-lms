"use client";

import { ReactNode } from "react";

type ButtonModalActionProps = {
  modalId: string;
  children: ReactNode;
  className?: string;
};

const ButtonModalAction = ({
  modalId,
  className,
  children,
}: ButtonModalActionProps) => {
  return (
    <button
      className={className}
      onClick={(e) => {
        e.preventDefault();

        (document.getElementById(modalId) as HTMLFormElement).showModal();
      }}
    >
      {children}
    </button>
  );
};

export default ButtonModalAction;
