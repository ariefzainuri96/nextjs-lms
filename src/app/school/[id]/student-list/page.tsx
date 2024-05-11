import React from "react";
import AddStudentModal from "./(components)/AddStudentModal";
import StudentList from "./(components)/StudentList";

const StudentListPage = () => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="mt-2 flex flex-row overflow-x-auto px-4">
        <AddStudentModal />
      </div>
      <div className="mt-2 h-[1px] w-full bg-slate-200" />
      <div className="mt-2 flex flex-1 flex-col overflow-y-auto">
        <StudentList />
      </div>
    </div>
  );
};

export default StudentListPage;
