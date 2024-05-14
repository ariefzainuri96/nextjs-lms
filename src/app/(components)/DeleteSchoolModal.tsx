"use client";

import { IcTrash } from "@/components/Icons";

export const DeleteSchoolModal = ({ schoolId }: { schoolId: string }) => {
  return (
    <button
      className="rounded-md bg-slate-200 p-2 hover:bg-slate-300"
      onClick={(e) => {
        e.preventDefault();

        const newUrl = `?showdelete=true&id=${schoolId}`;

        window.history.pushState(null, "", newUrl);
      }}
    >
      <IcTrash width="18" height="18" />
    </button>
  );
};
