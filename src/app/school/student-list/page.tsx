import React, { Suspense } from "react";
import StudentList from "./(components)/StudentList";
import LoadingPage from "@/components/LoadingPage";
import ButtonModalAction from "@/components/ButtonModalAction";
import { Modal } from "@/lib/strings";
import { AddOrEditStudentModal } from "./(components)/AddOrEditStudentModal";
import StudentListSkeleton from "./(components)/StudentListSkeleton";

const StudentListPage = () => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="mt-4 flex flex-row overflow-x-auto px-4">
        <ButtonModalAction modalId={Modal.AddStudent} className="btn">
          Tambah Murid
        </ButtonModalAction>
      </div>
      <div className="mt-4 h-[1px] w-full bg-slate-200" />
      <div className="flex flex-1 flex-col overflow-y-auto px-4">
        <Suspense fallback={<StudentListSkeleton />}>
          <StudentList />
        </Suspense>
      </div>
      <AddOrEditStudentModal modalId={Modal.AddStudent} />
    </div>
  );
};

export default StudentListPage;
