import Link from "next/link";
import React from "react";
import { IcEdit, IcTrash } from "@/components/Icons";
import { AddOrEditSchoolModal } from "./AddOrEditSchoolModal";
import ButtonModalAction from "@/components/ButtonModalAction";
import { DeleteDataDialog } from "@/components/DeleteDataDialog";
import { deleteSchool, getSchoolCached } from "../actions";

const SchoolList = async () => {
  const schools = await getSchoolCached();

  return (
    <div className="mt-2 grid grid-cols-3 gap-2 overflow-y-auto sm:grid-cols-4">
      {schools.map((element, index) => {
        return (
          <div className="btn-outlined hover:bg-slate-50" key={index}>
            <Link href={`/school/student-list?schoolId=${element._id}`}>
              <div className="flex flex-col items-start ">
                <p className="line-clamp-1 text-wrap">
                  {`${element.school_name}\n`}
                </p>
                <div
                  className="mt-2 flex flex-row gap-2"
                  suppressHydrationWarning
                >
                  <ButtonModalAction
                    className="rounded-md bg-slate-200 p-2 hover:bg-slate-300"
                    modalId={`delete-${element._id}`}
                  >
                    <IcTrash width="18" height="18" />
                  </ButtonModalAction>
                  <ButtonModalAction
                    className="rounded-md bg-slate-200 p-2 hover:bg-slate-300"
                    modalId={`add-${element._id}`}
                  >
                    <IcEdit width="18" height="18" />
                  </ButtonModalAction>
                </div>
              </div>
            </Link>
            <AddOrEditSchoolModal
              data={element}
              modalId={`add-${element._id}`}
            />
            <DeleteDataDialog
              modalId={`delete-${element._id}`}
              deletedItemId={element._id}
              formAction={deleteSchool}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SchoolList;
