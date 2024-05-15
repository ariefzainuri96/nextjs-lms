import { validateRequest } from "@/lib/auth/lucia";
import { ISchool, School } from "@/lib/models/school";
import Link from "next/link";
import React from "react";
import { DeleteSchool } from "./DeleteSchool";
import { AddOrEditSchool } from "./AddOrEditSchool";

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
          <Link key={index} href={`/school?schoolId=${element._id}`}>
            <div className="btn-outlined flex flex-col items-start hover:bg-transparent">
              <p className="line-clamp-2 text-wrap">
                {`${element.school_name}\n`}
              </p>
              <div className="mt-2 flex flex-row gap-2">
                <DeleteSchool schoolId={element._id} />
                <AddOrEditSchool
                  schoolName={element.school_name}
                  schoolId={element._id}
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SchoolList;
