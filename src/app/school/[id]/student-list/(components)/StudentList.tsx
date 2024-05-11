"use client";

import { IStudent } from "@/lib/models/student";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getStudents } from "../actions";

const StudentList = () => {
  const params = useSearchParams();
  const id = params.get("id") ?? "";

  const [students, setStudents] = useState<IStudent[]>([]);

  useEffect(() => {
    async function _getStudents() {
      setStudents(await getStudents(id));
    }

    _getStudents();
  }, [id]);

  return (
    <>
      {students.map((element) => {
        return <div key={element._id}>{element.full_name}</div>;
      })}
    </>
  );
};

export default StudentList;
