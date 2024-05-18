import { validateRequest } from "@/lib/auth/lucia";
import { ISchool, School } from "@/lib/models/school";
import Link from "next/link";
import React from "react";
import { IcEdit, IcTrash } from "@/components/Icons";
import { redirect } from "next/navigation";

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
          <form
            className="flex w-full flex-row"
            key={index}
            action={async () => {
              "use server";

              redirect(`/school?schoolId=${element._id}`);
            }}
          >
            <button
              className="btn-outlined w-full hover:bg-slate-50"
              type="submit"
            >
              <div className=" flex flex-col items-start ">
                <p className="line-clamp-1 text-wrap">
                  {`${element.school_name}\n`}
                </p>
                <div
                  className="mt-2 flex flex-row gap-2"
                  suppressHydrationWarning
                >
                  <Link
                    href={`?showdelete=true&id=${element._id}`}
                    className="rounded-md bg-slate-200 p-2 hover:bg-slate-300"
                    replace
                  >
                    <IcTrash width="18" height="18" />
                  </Link>
                  <Link
                    href={`?showaddoredit=true&content=${element.school_name}&id=${element._id}`}
                    className="rounded-md bg-slate-200 p-2 hover:bg-slate-300"
                    replace
                  >
                    <IcEdit width="18" height="18" />
                  </Link>
                </div>
              </div>
            </button>
          </form>
        );
      })}
    </div>
  );
};

export default SchoolList;
