import React from "react";
import StudentList from "./(components)/StudentList";
import { AddStudentModal } from "./(components)/AddStudentModal";

const StudentListPage = () => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="mt-2 flex flex-row overflow-x-auto px-4">
        <AddStudentModal />
      </div>
      <div className="mt-2 h-[1px] w-full bg-slate-200" />
      <div className="mt-2 flex flex-1 flex-col overflow-y-auto px-4">
        <StudentList />
      </div>
    </div>
  );
};

export default StudentListPage;
