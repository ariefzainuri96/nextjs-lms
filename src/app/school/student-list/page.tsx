import React, { Suspense } from "react";
import StudentList from "./(components)/StudentList";
import { AddStudent } from "./(components)/AddStudent";
import { AddOrEditStudentModal } from "./(components)/AddOrEditStudentModal";

const StudentListPage = () => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="mt-2 flex flex-row overflow-x-auto px-4">
        <AddStudent />
      </div>
      <div className="mt-2 h-[1px] w-full bg-slate-200" />
      <div className="flex flex-1 flex-col overflow-y-auto px-4">
        <Suspense fallback="Loading...">
          <StudentList />
        </Suspense>
      </div>
      <AddOrEditStudentModal />
    </div>
  );
};

export default StudentListPage;
