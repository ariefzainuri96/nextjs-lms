import React, { Suspense } from "react";
import StudentList from "./(components)/StudentList";
import { AddOrEditStudentModal } from "./(components)/AddOrEditStudentModal";
import DeleteDataDialog from "@/components/DeleteDataDialog";
import { deleteStudent } from "./actions";
import { headers } from "next/headers";
import Link from "next/link";

const StudentListPage = () => {
  const headersList = headers();
  const header_url = headersList.get("x-url") || "";
  const pathname = headersList.get("x-pathname") || "";
  const origin = headersList.get("x-origin") || "";
  const params = new URL(header_url).searchParams;

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="mt-4 flex flex-row overflow-x-auto px-4">
        <Link
          href={`${header_url}&show-add-or-edit-student=true`}
          className="btn"
        >
          Tambah Murid
        </Link>
      </div>
      <div className="mt-4 h-[1px] w-full bg-slate-200" />
      <div className="flex flex-1 flex-col overflow-y-auto px-4">
        <Suspense fallback="Loading...">
          <StudentList />
        </Suspense>
      </div>
      <AddOrEditStudentModal />
      <DeleteDataDialog
        formAction={deleteStudent}
        lastUrl={`${pathname}?schoolId=${params.get("schoolId")}`}
      />
    </div>
  );
};

export default StudentListPage;
