"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const SchoolDetailPage = () => {
  const params = useSearchParams();
  const id = params.get("id");

  return (
    <div className="h-full w-full overflow-hidden p-4">
      <div className="flex flex-row gap-2 overflow-x-auto">
        <Link className="btn-outlined" href={`/school/student-list?id=${id}`}>
          Daftar Murid
        </Link>
        <Link className="btn-outlined" href={`/school/class-list?id=${id}`}>
          Daftar Kelas
        </Link>
      </div>
    </div>
  );
};

export default SchoolDetailPage;
