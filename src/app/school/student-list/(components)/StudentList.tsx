"use client";

import { IStudent } from "@/lib/models/student";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getStudents } from "../actions";
import { IcEdit, IcTrash } from "@/components/Icons";

const StudentList = () => {
  const params = useSearchParams();
  const id = params.get("id") ?? "";

  const [students, setStudents] = useState<IStudent[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function _getStudents() {
      setLoading(true);
      setStudents(await getStudents(id));
      setLoading(false);
    }

    _getStudents();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {students.map((element) => {
        return (
          <div
            className="btn-outlined flex flex-row items-center gap-2 hover:bg-transparent"
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
