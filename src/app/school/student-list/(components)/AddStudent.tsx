"use client";

import { usePathname, useSearchParams } from "next/navigation";

export const AddStudent = () => {
  const pathname = usePathname();
  const params = useSearchParams();

  return (
    <button
      className="btn"
      onClick={(e) => {
        e.preventDefault();

        window.history.pushState(
          null,
          "",
          `${pathname}?${params}&show-add-or-edit-student=true`,
        );
      }}
    >
      Tambah Murid
    </button>
  );
};
