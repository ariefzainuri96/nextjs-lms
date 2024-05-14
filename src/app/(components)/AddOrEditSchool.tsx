"use client";

import { IcEdit } from "@/components/Icons";

export const AddOrEditSchool = ({
  schoolName,
  schoolId,
}: {
  schoolName?: string;
  schoolId?: string;
}) => {
  return (
    <>
      <button
        className={
          schoolName ? "rounded-md bg-slate-200 p-2 hover:bg-slate-300" : "btn"
        }
        onClick={(e) => {
          e.preventDefault();

          const newUrl = `?showaddoredit=true&content=${schoolName}&id=${schoolId}`;

          window.history.pushState(null, "", newUrl);
        }}
      >
        {!schoolName ? "Tambah Sekolah" : <IcEdit width="18" height="18" />}
      </button>
    </>
  );
};
