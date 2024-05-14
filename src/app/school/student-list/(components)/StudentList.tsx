import { IStudent, Student } from "@/lib/models/student";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getStudents } from "../actions";
import { IcEdit, IcTrash } from "@/components/Icons";
import { headers } from "next/headers";

const StudentList = async () => {
  const headersList = headers();
  const header_url = headersList.get("x-url") || "";
  const pathname = headersList.get("x-pathname");
  const origin_url = headersList.get("x-origin");
  const params = new URL(header_url).searchParams;

  console.log(`header_url ${header_url}`);
  console.log(`pathname ${pathname}`);
  console.log(`origin_url ${origin_url}`);

  const students = await getStudents(params.get("schoolId") ?? "");

  // const [students, setStudents] = useState<IStudent[]>([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function _getStudents() {
  //     setLoading(true);
  //     setStudents(await getStudents(id));
  //     setLoading(false);
  //   }

  //   _getStudents();
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      {students.map((element) => {
        return (
          <div
            className="btn-outlined mt-2 flex flex-row items-center gap-2 hover:bg-transparent"
            key={element._id}
          >
            <p className="flex-1">{element.full_name}</p>
            <button className="ic-bordered">
              <IcTrash />
            </button>
            <button className="ic-bordered">
              <IcEdit width="21" height="21" />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default StudentList;
