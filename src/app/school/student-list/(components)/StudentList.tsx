import { getStudents } from "../actions";
import { IcEdit, IcTrash } from "@/components/Icons";
import { headers } from "next/headers";
import Link from "next/link";

const StudentList = async () => {
  const headersList = headers();
  const headerUrl = headersList.get("x-url") || "";
  const params = new URL(headerUrl).searchParams;

  const students = await getStudents(params.get("schoolId") ?? "");

  return (
    <>
      {students.map((element) => {
        return (
          <div
            className="btn-outlined mt-4 flex flex-row items-center gap-2 hover:bg-transparent"
            key={element._id}
          >
            <p className="flex-1">{element.full_name}</p>
            <Link
              className="ic-bordered"
              href={`${headerUrl}&showdelete=true&id=${element._id}`}
            >
              <IcTrash />
            </Link>
            <Link
              className="ic-bordered"
              href={`${headerUrl}&show-add-or-edit-student=true`}
            >
              <IcEdit width="21" height="21" />
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default StudentList;
