import Link from "next/link";
import React from "react";

interface SchoolDetailPageProps {
  params: {
    id: string;
  };
}

const SchoolDetailPage = ({ params: { id } }: SchoolDetailPageProps) => {
  return (
    <div className="h-full w-full overflow-hidden p-4">
      <div className="flex flex-row overflow-x-auto">
        <Link
          className="btn-outlined"
          href={`/school/${id}/student-list?id=${id}`}
        >
          Daftar Murid
        </Link>
      </div>
    </div>
  );
};

export default SchoolDetailPage;
