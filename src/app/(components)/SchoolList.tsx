import { validateRequest } from "@/lib/auth/lucia";
import { ISchool, School } from "@/lib/models/school";
import Link from "next/link";
import React from "react";
import { IcEdit, IcTrash } from "@/components/Icons";
import ButtonUrlAction from "@/components/ButtonUrlAction";

const SchoolList = async () => {
  const { user } = await validateRequest();
  const schools: ISchool[] = (
    await School.where({
      user_id: user?.id,
    })
  ).map((element) => {
    const obj: ISchool = JSON.parse(JSON.stringify(element));
    return obj;
  });

  return (
    <div className="mt-2 grid grid-cols-3 gap-2">
      {schools.map((element, index) => {
        return (
          <Link
            className="btn-outlined flex w-full flex-row hover:bg-slate-50"
            key={index}
            href={`/school/student-list?schoolId=${element._id}`}
          >
            <div className="flex flex-col items-start ">
              <p className="line-clamp-1 text-wrap">
                {`${element.school_name}\n`}
              </p>
              <div
                className="mt-2 flex flex-row gap-2"
                suppressHydrationWarning
              >
                <ButtonUrlAction
                  type="replace"
                  className="rounded-md bg-slate-200 p-2 hover:bg-slate-300"
                  link={`?showdelete=true&id=${element._id}`}
                >
                  <IcTrash width="18" height="18" />
                </ButtonUrlAction>
                <ButtonUrlAction
                  type="replace"
                  link={`?showaddoredit=true&content=${element.school_name}&id=${element._id}`}
                  className="rounded-md bg-slate-200 p-2 hover:bg-slate-300"
                >
                  <IcEdit width="18" height="18" />
                </ButtonUrlAction>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SchoolList;
