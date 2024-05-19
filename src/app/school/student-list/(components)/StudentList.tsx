import { DeleteDataDialog } from "@/components/DeleteDataDialog";
import { deleteStudent, getStudents } from "../actions";
import { IcEdit, IcTrash } from "@/components/Icons";
import { headers } from "next/headers";
import ButtonModalAction from "@/components/ButtonModalAction";
import { AddOrEditStudentModal } from "./AddOrEditStudentModal";
import { IStudent } from "@/lib/models/student";
import { delay } from "@/lib/utils/common_functions";

const StudentList = async () => {
  const headersList = headers();
  const headerUrl = headersList.get("x-url") || "";
  const params = new URL(headerUrl).searchParams;
  const pathname = new URL(headerUrl).pathname;

  console.log(`fullUrl ${pathname}?${params}`);

  const students: IStudent[] = (
    await getStudents(params.get("schoolId") ?? "")
  ).map((element) => {
    const obj: IStudent = JSON.parse(JSON.stringify(element));
    return obj;
  });

  return (
    <>
      {students.map((element) => {
        return (
          <div key={element._id}>
            <div className="btn-outlined mt-4 flex flex-row items-center gap-2 hover:bg-transparent">
              <p className="line-clamp-1 flex-1 text-wrap">
                {element.full_name}
              </p>
              <ButtonModalAction
                className="ic-bordered"
                modalId={`delete-${element._id}`}
              >
                <IcTrash />
              </ButtonModalAction>
              <ButtonModalAction
                className="ic-bordered"
                modalId={`edit-${element._id}`}
              >
                <IcEdit width="21" height="21" />
              </ButtonModalAction>
            </div>
            <DeleteDataDialog
              modalId={`delete-${element._id}`}
              deletedItemId={element._id}
              lastUrl={`${pathname}?${params}`}
              formAction={deleteStudent}
            />
            <AddOrEditStudentModal
              modalId={`edit-${element._id}`}
              student={element}
            />
          </div>
        );
      })}
    </>
  );
};

export default StudentList;
